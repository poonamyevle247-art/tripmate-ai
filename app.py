import argparse
import json
import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import parse_qs, urlencode, urlsplit
from urllib.request import Request, urlopen


SITE_DIRECTORY = Path(__file__).resolve().parent


class TripMateRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(SITE_DIRECTORY), **kwargs)

    def do_GET(self):
        parsed_url = urlsplit(self.path)
        if parsed_url.path != "/api/places":
            super().do_GET()
            return

        self.serve_places(parse_qs(parsed_url.query))

    def send_json(self, status_code, payload):
        response = json.dumps(payload).encode("utf-8")
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(response)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(response)

    def serve_places(self, params):
        api_key = os.environ.get("OPENTRIPMAP_API_KEY")
        if not api_key:
            self.send_json(503, {
                "configured": False,
                "error": "Set OPENTRIPMAP_API_KEY to enable live place suggestions."
            })
            return

        try:
            latitude = float(params.get("lat", ["22.3072"])[0])
            longitude = float(params.get("lon", ["73.1812"])[0])
            radius = int(params.get("radius", ["10000"])[0])
            limit = int(params.get("limit", ["30"])[0])
            if not -90 <= latitude <= 90 or not -180 <= longitude <= 180:
                raise ValueError("Coordinates are out of range.")
            if radius < 1:
                raise ValueError("Radius must be positive.")
        except (TypeError, ValueError) as error:
            self.send_json(400, {"error": str(error) or "Invalid place search parameters."})
            return

        query = urlencode({
            "radius": min(radius, 50000),
            "lat": latitude,
            "lon": longitude,
            "limit": min(max(limit, 1), 50),
            "format": "json",
            "apikey": api_key,
        })
        request = Request(
            f"https://api.opentripmap.com/0.1/en/places/radius?{query}",
            headers={"User-Agent": "TripMateAI/1.0"},
        )

        try:
            with urlopen(request, timeout=15) as upstream:
                payload = json.loads(upstream.read().decode("utf-8"))
            self.send_json(200, payload)
        except HTTPError as error:
            self.send_json(502, {
                "configured": True,
                "error": "OpenTripMap rejected the place search.",
                "upstream_status": error.code,
            })
        except (URLError, TimeoutError, OSError, json.JSONDecodeError):
            self.send_json(502, {
                "configured": True,
                "error": "OpenTripMap could not be reached. Curated suggestions are still available.",
            })


def main():
    parser = argparse.ArgumentParser(description="Run the TripMate AI website locally.")
    parser.add_argument("--host", default="127.0.0.1", help="Host address to bind to")
    parser.add_argument(
        "--port",
        type=int,
        default=int(os.environ.get("PORT", "8000")),
        help="Port to serve on (default: 8000 or PORT environment variable)",
    )
    args = parser.parse_args()

    try:
        with ThreadingHTTPServer((args.host, args.port), TripMateRequestHandler) as server:
            print(f"TripMate AI is running at http://{args.host}:{server.server_port}/")
            server.serve_forever()
    except KeyboardInterrupt:
        print("\nTripMate AI server stopped.")


if __name__ == "__main__":
    main()