const baseDestinations = [
  {
    name: 'Champaner-Pavagadh',
    location: 'Gujarat',
    score: 94,
    budget: '₹1,200–₹1,800',
    travelTime: 'Approx. 3 hrs',
    distance: '110 km',
    duration: 'Weekend',
    bestFor: 'History + Nature + Photography',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
    vibe: 'Explore Culture',
    tags: ['Nature', 'Photography', 'Low Cost', 'Culture'],
    hiddenGems: [
      { name: 'Pavagadh Fort Trail', description: 'A sunset climb with panoramic views and quiet paths.', bestTime: 'Late afternoon', time: '1.5 hrs' },
      { name: 'Helical Stepwell', description: 'A hidden architectural surprise for slow exploration.', bestTime: 'Morning', time: '45 mins' },
      { name: 'Local Gujarati Thali', description: 'A food stop with flavors rooted in the region.', bestTime: 'Lunch', time: '1 hr' }
    ],
    itinerary: {
      saturday: [
        { time: '08:00 AM', label: 'Start Journey', icon: '🚗' },
        { time: '10:30 AM', label: 'Reach Destination', icon: '📍' },
        { time: '11:00 AM', label: 'Explore Main Attraction', icon: '🏛️' },
        { time: '01:00 PM', label: 'Lunch', icon: '🍴' },
        { time: '03:00 PM', label: 'Photography Spot', icon: '📸' },
        { time: '06:00 PM', label: 'Sunset Point', icon: '🌅' }
      ],
      sunday: [
        { time: '09:00 AM', label: 'Breakfast', icon: '☕' },
        { time: '10:00 AM', label: 'Nature Activity', icon: '🌿' },
        { time: '01:00 PM', label: 'Lunch', icon: '🍴' },
        { time: '03:00 PM', label: 'Hidden Gem', icon: '💎' },
        { time: '05:00 PM', label: 'Return', icon: '🚗' }
      ]
    },
    budgetBreakdown: { travel: '₹600–₹800', food: '₹400–₹600', activities: '₹200–₹300', stay: '₹450–₹700', total: '₹1,650–₹2,100', perPerson: '₹413–₹525' }
  },
  {
    name: 'Munnar',
    location: 'Kerala',
    score: 96,
    budget: '₹2,100–₹3,400',
    travelTime: 'Approx. 7 hrs',
    distance: '160 km',
    duration: '2 days',
    bestFor: 'Nature + Scenic Views + Peace',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    vibe: 'Nature Escape',
    tags: ['Nature', 'Low Cost', 'Photography', 'Comfort'],
    hiddenGems: [
      { name: 'Kundala Lake Walk', description: 'A small trail with cool air and a calm lakefront atmosphere.', bestTime: 'Morning', time: '1 hr' },
      { name: 'Tea Valley Viewpoint', description: 'A scenic stop for silence, greenery and long frames.', bestTime: 'Sunrise', time: '1 hr' },
      { name: 'Local Plantation Café', description: 'Try tea with fresh snacks in a quiet hillside setting.', bestTime: 'Evening', time: '45 mins' }
    ],
    itinerary: {
      saturday: [
        { time: '08:00 AM', label: 'Drive out', icon: '🚗' },
        { time: '10:30 AM', label: 'Tea estate visit', icon: '🌱' },
        { time: '12:30 PM', label: 'Late lunch', icon: '🍲' },
        { time: '03:00 PM', label: 'Photo walk', icon: '📸' },
        { time: '06:30 PM', label: 'Sunset point', icon: '🌄' }
      ],
      sunday: [
        { time: '08:30 AM', label: 'Breakfast', icon: '☕' },
        { time: '09:30 AM', label: 'Hike or viewpoint', icon: '🥾' },
        { time: '01:00 PM', label: 'Lunch', icon: '🍴' },
        { time: '03:00 PM', label: 'Hidden gem', icon: '💎' },
        { time: '05:30 PM', label: 'Return', icon: '🚗' }
      ]
    },
    budgetBreakdown: { travel: '₹900–₹1,300', food: '₹500–₹700', activities: '₹300–₹500', stay: '₹700–₹1,000', total: '₹2,400–₹3,500', perPerson: '₹600–₹875' }
  },
  {
    name: 'Jaipur',
    location: 'Rajasthan',
    score: 92,
    budget: '₹1,600–₹3,000',
    travelTime: 'Approx. 5 hrs',
    distance: '140 km',
    duration: '2 days',
    bestFor: 'Culture + Food + Instagrammable Streets',
    image: 'https://images.unsplash.com/photo-1603262110263-fb0112e7ef33?auto=format&fit=crop&w=900&q=80',
    vibe: 'Explore Culture',
    tags: ['Culture', 'Food', 'Photography', 'Comfort'],
    hiddenGems: [
      { name: 'Johri Bazaar lane', description: 'A vibrant local street for textures, color and market stories.', bestTime: 'Evening', time: '1 hr' },
      { name: 'Stepwell detour', description: 'Skip the crowded routes and explore the quieter heritage corners.', bestTime: 'Morning', time: '50 mins' },
      { name: 'Traditional rooftop dinner', description: 'A cozy evening meal with city views and local flavors.', bestTime: 'Sunset', time: '1.5 hrs' }
    ],
    itinerary: {
      saturday: [
        { time: '08:00 AM', label: 'Start drive', icon: '🚗' },
        { time: '10:30 AM', label: 'Historic streets', icon: '🏛️' },
        { time: '01:00 PM', label: 'Lunch', icon: '🍜' },
        { time: '03:00 PM', label: 'Photo walk', icon: '📸' },
        { time: '06:30 PM', label: 'Sunset rooftop', icon: '🌅' }
      ],
      sunday: [
        { time: '09:00 AM', label: 'Breakfast', icon: '☕' },
        { time: '10:00 AM', label: 'Heritage site', icon: '🕌' },
        { time: '01:00 PM', label: 'Lunch', icon: '🍴' },
        { time: '03:00 PM', label: 'Hidden gem', icon: '💎' },
        { time: '05:00 PM', label: 'Drive back', icon: '🚗' }
      ]
    },
    budgetBreakdown: { travel: '₹650–₹900', food: '₹400–₹600', activities: '₹250–₹400', stay: '₹500–₹800', total: '₹1,800–₹2,700', perPerson: '₹450–₹675' }
  },
  {
    name: 'Lonavala',
    location: 'Maharashtra',
    score: 91,
    budget: '₹1,300–₹2,200',
    travelTime: 'Approx. 2 hrs',
    distance: '70 km',
    duration: 'One Day + Night',
    bestFor: 'Quick reset + scenic drive + café stops',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
    vibe: 'Relax & Recharge',
    tags: ['Low Cost', 'Nature', 'Comfort', 'Food'],
    hiddenGems: [
      { name: 'Karla Cave detour', description: 'A quiet stop with a calm and spiritual vibe.', bestTime: 'Morning', time: '1 hr' },
      { name: 'Waterfall trail', description: 'Short, refreshing and perfect for a quick reset.', bestTime: 'Monsoon', time: '1 hr' },
      { name: 'Café corner', description: 'A cozy place to recharge and take in the view.', bestTime: 'Afternoon', time: '45 mins' }
    ],
    itinerary: {
      saturday: [
        { time: '08:30 AM', label: 'Start Journey', icon: '🚗' },
        { time: '10:30 AM', label: 'Reach Lonavala', icon: '📍' },
        { time: '11:00 AM', label: 'Viewpoint walk', icon: '🌄' },
        { time: '01:00 PM', label: 'Lunch', icon: '🍲' },
        { time: '03:00 PM', label: 'Cafe break', icon: '☕' },
        { time: '06:30 PM', label: 'Sunset stop', icon: '🌅' }
      ],
      sunday: [
        { time: '09:00 AM', label: 'Breakfast', icon: '☕' },
        { time: '10:00 AM', label: 'Nature trail', icon: '🌿' },
        { time: '01:00 PM', label: 'Lunch', icon: '🍴' },
        { time: '03:00 PM', label: 'Hidden gem', icon: '💎' },
        { time: '05:00 PM', label: 'Drive back', icon: '🚗' }
      ]
    },
    budgetBreakdown: { travel: '₹450–₹700', food: '₹350–₹500', activities: '₹150–₹250', stay: '₹350–₹600', total: '₹1,300–₹2,050', perPerson: '₹325–₹512' }
  },
  {
    name: 'Coorg',
    location: 'Karnataka',
    score: 95,
    budget: '₹2,400–₹4,000',
    travelTime: 'Approx. 6 hrs',
    distance: '250 km',
    duration: '2 days',
    bestFor: 'Coffee + Mist + Nature',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
    vibe: 'Nature Escape',
    tags: ['Nature', 'Comfort', 'Photography', 'Low Cost'],
    hiddenGems: [
      { name: 'Coffee Estate Walk', description: 'A slow walk through misty coffee rows and quiet roads.', bestTime: 'Morning', time: '1.5 hrs' },
      { name: 'Hidden Waterfall', description: 'A cool and scenic detour for a quiet reset.', bestTime: 'Early afternoon', time: '1 hr' },
      { name: 'Homestay Breakfast', description: 'Fresh local breakfast with mountain views.', bestTime: 'Morning', time: '45 mins' }
    ],
    itinerary: {
      saturday: [
        { time: '08:00 AM', label: 'Drive to Coorg', icon: '🚗' },
        { time: '11:30 AM', label: 'Coffee estate', icon: '☕' },
        { time: '01:00 PM', label: 'Lunch', icon: '🍲' },
        { time: '03:00 PM', label: 'Waterfall stop', icon: '💧' },
        { time: '06:00 PM', label: 'Sunset view', icon: '🌅' }
      ],
      sunday: [
        { time: '09:00 AM', label: 'Breakfast', icon: '☕' },
        { time: '10:00 AM', label: 'Nature trail', icon: '🌿' },
        { time: '01:00 PM', label: 'Lunch', icon: '🍴' },
        { time: '03:00 PM', label: 'Hidden gem', icon: '💎' },
        { time: '05:00 PM', label: 'Return', icon: '🚗' }
      ]
    },
    budgetBreakdown: { travel: '₹1,000–₹1,500', food: '₹500–₹700', activities: '₹250–₹400', stay: '₹700–₹1,200', total: '₹2,450–₹3,800', perPerson: '₹612–₹950' }
  },
  {
    name: 'Puducherry',
    location: 'Tamil Nadu',
    score: 93,
    budget: '₹2,000–₹3,500',
    travelTime: 'Approx. 5 hrs',
    distance: '170 km',
    duration: '2 days',
    bestFor: 'Beach + Chilled vibe + Cafés',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    vibe: 'Relax & Recharge',
    tags: ['Food', 'Nature', 'Comfort', 'Photography'],
    hiddenGems: [
      { name: 'French Quarter Walk', description: 'Slow streets, pastel walls and cozy corners.', bestTime: 'Evening', time: '1 hr' },
      { name: 'Quiet Beach Stretch', description: 'A lighter beach hour with fewer crowds.', bestTime: 'Sunset', time: '1.5 hrs' },
      { name: 'Hidden Café', description: 'A small coffee stop for a relaxed break.', bestTime: 'Afternoon', time: '40 mins' }
    ],
    itinerary: {
      saturday: [
        { time: '08:30 AM', label: 'Start drive', icon: '🚗' },
        { time: '11:30 AM', label: 'Beach arrival', icon: '🏖️' },
        { time: '01:00 PM', label: 'Lunch', icon: '🍽️' },
        { time: '03:00 PM', label: 'Cafe walk', icon: '☕' },
        { time: '06:30 PM', label: 'Sunset stroll', icon: '🌅' }
      ],
      sunday: [
        { time: '09:00 AM', label: 'Breakfast', icon: '☕' },
        { time: '10:00 AM', label: 'French quarter', icon: '🏛️' },
        { time: '01:00 PM', label: 'Lunch', icon: '🍜' },
        { time: '03:00 PM', label: 'Hidden gem', icon: '💎' },
        { time: '05:00 PM', label: 'Return', icon: '🚗' }
      ]
    },
    budgetBreakdown: { travel: '₹700–₹1,000', food: '₹500–₹800', activities: '₹200–₹400', stay: '₹600–₹1,000', total: '₹2,000–₹3,200', perPerson: '₹500–₹800' }
  },
  {
    name: 'Kodaikanal',
    location: 'Tamil Nadu',
    score: 92,
    budget: '₹2,300–₹3,800',
    travelTime: 'Approx. 8 hrs',
    distance: '250 km',
    duration: '2 days',
    bestFor: 'Cool weather + photography + quiet escapes',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80',
    vibe: 'Peaceful',
    tags: ['Nature', 'Photography', 'Comfort', 'Low Cost'],
    hiddenGems: [
      { name: 'Pine Forest Walk', description: 'A calm and scenic patch with forest air and soft light.', bestTime: 'Morning', time: '1 hr' },
      { name: 'Viewpoint Detour', description: 'A scenic extra stop with a small crowd and a big payoff.', bestTime: 'Sunset', time: '45 mins' },
      { name: 'Tea Stall Snack Stop', description: 'Simple warm bites with cold weather comfort.', bestTime: 'Evening', time: '30 mins' }
    ],
    itinerary: {
      saturday: [
        { time: '08:00 AM', label: 'Set off', icon: '🚗' },
        { time: '11:00 AM', label: 'Forest drive', icon: '🌲' },
        { time: '01:00 PM', label: 'Lunch', icon: '🍲' },
        { time: '03:00 PM', label: 'Photo walk', icon: '📸' },
        { time: '06:00 PM', label: 'Sunset point', icon: '🌅' }
      ],
      sunday: [
        { time: '09:00 AM', label: 'Breakfast', icon: '☕' },
        { time: '10:00 AM', label: 'Lake viewpoint', icon: '🏞️' },
        { time: '01:00 PM', label: 'Lunch', icon: '🍴' },
        { time: '03:00 PM', label: 'Hidden gem', icon: '💎' },
        { time: '05:00 PM', label: 'Return', icon: '🚗' }
      ]
    },
    budgetBreakdown: { travel: '₹900–₹1,300', food: '₹450–₹700', activities: '₹250–₹350', stay: '₹700–₹1,200', total: '₹2,300–₹3,550', perPerson: '₹575–₹888' }
  }
];

const additionalDestinationProfiles = [
  { name: 'Auroville', location: 'Tamil Nadu', score: 91, budget: '₹1,800–₹3,000', travelTime: 'Approx. 3 hrs', distance: '150 km', bestFor: 'Slow living + cafés + community', image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80', vibe: 'Relax & Recharge', tags: ['Nature', 'Food', 'Culture', 'Photography'], highlight: 'Matrimandir gardens', localFlavor: 'Auroville bakery and café trail' },
  { name: 'Alleppey', location: 'Kerala', score: 94, budget: '₹2,000–₹3,800', travelTime: 'Approx. 4 hrs', distance: '140 km', bestFor: 'Backwaters + food + slow travel', image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80', vibe: 'Nature Escape', tags: ['Nature', 'Food', 'Photography', 'Comfort'], highlight: 'Backwater canoe ride', localFlavor: 'Kerala seafood lunch' },
  { name: 'Ooty', location: 'Tamil Nadu', score: 92, budget: '₹1,500–₹2,800', travelTime: 'Approx. 4 hrs', distance: '90 km', bestFor: 'Tea gardens + cool weather + views', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80', vibe: 'Nature Escape', tags: ['Nature', 'Photography', 'Comfort', 'Low Cost'], highlight: 'Tea estate viewpoint', localFlavor: 'Fresh tea and local bakery stop' },
  { name: 'Wayanad', location: 'Kerala', score: 93, budget: '₹2,000–₹3,500', travelTime: 'Approx. 5 hrs', distance: '180 km', bestFor: 'Waterfalls + forest trails + wildlife', image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=80', vibe: 'Adventure', tags: ['Nature', 'Adventure', 'Photography', 'Low Cost'], highlight: 'Edakkal Caves trail', localFlavor: 'Malabar spice and tea stop' },
  { name: 'Udaipur', location: 'Rajasthan', score: 94, budget: '₹2,500–₹4,200', travelTime: 'Approx. 5 hrs', distance: '190 km', bestFor: 'Heritage + lake views + local food', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80', vibe: 'Explore Culture', tags: ['Culture', 'Food', 'Photography', 'Comfort'], highlight: 'Old City lakefront walk', localFlavor: 'Rajasthani thali in the old city' },
  { name: 'Rishikesh', location: 'Uttarakhand', score: 95, budget: '₹1,600–₹3,000', travelTime: 'Approx. 4 hrs', distance: '230 km', bestFor: 'River views + rafting + mountain air', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80', vibe: 'Adventure', tags: ['Adventure', 'Nature', 'Food', 'Photography'], highlight: 'Ganga riverside evening walk', localFlavor: 'Riverside café and local breakfast' },
  { name: 'Goa', location: 'Goa', score: 93, budget: '₹2,500–₹4,500', travelTime: 'Approx. 6 hrs', distance: '300 km', bestFor: 'Beaches + cafés + sunset drives', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80', vibe: 'Food & Fun', tags: ['Food', 'Nature', 'Photography', 'Adventure'], highlight: 'South Goa beach stretch', localFlavor: 'Goan fish curry and a bakery stop' },
  { name: 'Hampi', location: 'Karnataka', score: 92, budget: '₹1,800–₹3,200', travelTime: 'Approx. 6 hrs', distance: '340 km', bestFor: 'Ancient ruins + cycling + sunsets', image: 'https://images.unsplash.com/photo-1600100397608-f010e32f1f63?auto=format&fit=crop&w=900&q=80', vibe: 'Explore Culture', tags: ['Culture', 'Adventure', 'Photography', 'Low Cost'], highlight: 'Riverside boulder trail', localFlavor: 'Local thali near the bazaar' },
  { name: 'Varkala', location: 'Kerala', score: 92, budget: '₹2,000–₹3,600', travelTime: 'Approx. 5 hrs', distance: '180 km', bestFor: 'Cliff walks + beach time + cafés', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80', vibe: 'Relax & Recharge', tags: ['Nature', 'Food', 'Photography', 'Comfort'], highlight: 'North Cliff sunset walk', localFlavor: 'Seafood café above the beach' },
  { name: 'Shillong', location: 'Meghalaya', score: 91, budget: '₹2,500–₹4,500', travelTime: 'Approx. 5 hrs', distance: '100 km', bestFor: 'Waterfalls + music + scenic drives', image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80', vibe: 'Nature Escape', tags: ['Nature', 'Adventure', 'Food', 'Photography'], highlight: 'Laitlum canyon viewpoint', localFlavor: 'Khasi café and market stop' },
  { name: 'Darjeeling', location: 'West Bengal', score: 92, budget: '₹2,400–₹4,000', travelTime: 'Approx. 6 hrs', distance: '250 km', bestFor: 'Tea gardens + mountain views + cafés', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80', vibe: 'Scenic Escape', tags: ['Nature', 'Culture', 'Photography', 'Food'], highlight: 'Tea garden sunrise viewpoint', localFlavor: 'Tea-room breakfast and momos' },
  { name: 'Amritsar', location: 'Punjab', score: 90, budget: '₹1,500–₹2,800', travelTime: 'Approx. 4 hrs', distance: '230 km', bestFor: 'Heritage + food + meaningful visits', image: 'https://images.unsplash.com/photo-1598091383021-15d­de096d6?auto=format&fit=crop&w=900&q=80', vibe: 'Explore Culture', tags: ['Culture', 'Food', 'Photography', 'Low Cost'], highlight: 'Heritage lanes near the Golden Temple', localFlavor: 'Punjabi kulcha and lassi stop' },
  { name: 'Nashik', location: 'Maharashtra', score: 89, budget: '₹1,700–₹3,200', travelTime: 'Approx. 3 hrs', distance: '170 km', bestFor: 'Vineyards + food + riverside walks', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80', vibe: 'Food & Fun', tags: ['Food', 'Nature', 'Culture', 'Photography'], highlight: 'Vineyard tasting and countryside drive', localFlavor: 'Maharashtrian lunch in the old city' },
  { name: 'Gokarna', location: 'Karnataka', score: 92, budget: '₹1,800–₹3,400', travelTime: 'Approx. 5 hrs', distance: '230 km', bestFor: 'Quiet beaches + coastal walks + seafood', image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=80', vibe: 'Scenic Escape', tags: ['Nature', 'Adventure', 'Food', 'Photography'], highlight: 'Kudle Beach coastal walk', localFlavor: 'Coastal seafood café' },
  { name: 'Mahabaleshwar', location: 'Maharashtra', score: 91, budget: '₹1,700–₹3,200', travelTime: 'Approx. 3 hrs', distance: '120 km', bestFor: 'Viewpoints + strawberries + cool air', image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80', vibe: 'Nature Escape', tags: ['Nature', 'Comfort', 'Food', 'Photography'], highlight: 'Arthur’s Seat viewpoint', localFlavor: 'Strawberry farm and market stop' },
  { name: 'Matheran', location: 'Maharashtra', score: 90, budget: '₹1,500–₹2,800', travelTime: 'Approx. 2 hrs', distance: '90 km', bestFor: 'Forest paths + viewpoints + car-free breaks', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80', vibe: 'Peaceful', tags: ['Nature', 'Adventure', 'Photography', 'Low Cost'], highlight: 'Panorama Point forest trail', localFlavor: 'Local chikki and tea stop' },
  { name: 'Mysuru', location: 'Karnataka', score: 92, budget: '₹1,500–₹2,900', travelTime: 'Approx. 3 hrs', distance: '145 km', bestFor: 'Palaces + markets + South Indian food', image: 'https://images.unsplash.com/photo-1603262110263-fb0112e7ef33?auto=format&fit=crop&w=900&q=80', vibe: 'Explore Culture', tags: ['Culture', 'Food', 'Photography', 'Low Cost'], highlight: 'Mysore Palace and Devaraja Market', localFlavor: 'Mysore masala dosa and filter coffee' },
  { name: 'Varanasi', location: 'Uttar Pradesh', score: 93, budget: '₹1,600–₹3,000', travelTime: 'Approx. 5 hrs', distance: '300 km', bestFor: 'Heritage lanes + riverfront + local food', image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=900&q=80', vibe: 'Explore Culture', tags: ['Culture', 'Food', 'Photography'], highlight: 'Early morning boat ride on the Ganges', localFlavor: 'Kachori breakfast in the old city' },
  { name: 'Jaisalmer', location: 'Rajasthan', score: 92, budget: '₹2,300–₹4,000', travelTime: 'Approx. 6 hrs', distance: '280 km', bestFor: 'Desert sunsets + fort lanes + folk culture', image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=900&q=80', vibe: 'Explore Culture', tags: ['Culture', 'Adventure', 'Photography'], highlight: 'Jaisalmer Fort heritage walk', localFlavor: 'Rajasthani thali in a haveli courtyard' },
  { name: 'Mount Abu', location: 'Rajasthan', score: 89, budget: '₹1,800–₹3,300', travelTime: 'Approx. 4 hrs', distance: '165 km', bestFor: 'Hill air + lake views + relaxed walks', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80', vibe: 'Peaceful', tags: ['Nature', 'Comfort', 'Photography', 'Low Cost'], highlight: 'Nakki Lake sunset walk', localFlavor: 'Rajasthani snack and tea stop' },
  { name: 'Orchha', location: 'Madhya Pradesh', score: 90, budget: '₹1,400–₹2,700', travelTime: 'Approx. 3 hrs', distance: '115 km', bestFor: 'Riverside palaces + quiet heritage walks', image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=900&q=80', vibe: 'Explore Culture', tags: ['Culture', 'Photography', 'Nature', 'Low Cost'], highlight: 'Betwa River cenotaph walk', localFlavor: 'Bundeli home-style lunch' },
  { name: 'Khajuraho', location: 'Madhya Pradesh', score: 90, budget: '₹1,700–₹3,200', travelTime: 'Approx. 4 hrs', distance: '175 km', bestFor: 'Temple architecture + history + photography', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80', vibe: 'Explore Culture', tags: ['Culture', 'Photography', 'Nature'], highlight: 'Western Group of Temples', localFlavor: 'Local thali near the old village' },
  { name: 'Madurai', location: 'Tamil Nadu', score: 91, budget: '₹1,400–₹2,700', travelTime: 'Approx. 4 hrs', distance: '140 km', bestFor: 'Temple heritage + markets + Tamil cuisine', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80', vibe: 'Food & Fun', tags: ['Culture', 'Food', 'Photography', 'Low Cost'], highlight: 'Meenakshi Temple and old market lanes', localFlavor: 'Jigarthanda and a traditional banana-leaf meal' },
  { name: 'Ziro Valley', location: 'Arunachal Pradesh', score: 91, budget: '₹2,800–₹4,800', travelTime: 'Approx. 6 hrs', distance: '180 km', bestFor: 'Pine hills + village walks + slow travel', image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80', vibe: 'Scenic Escape', tags: ['Nature', 'Culture', 'Adventure', 'Photography'], highlight: 'Apatani village and paddy-field walk', localFlavor: 'Local Apatani dishes in a village homestay' },
  { name: 'Tawang', location: 'Arunachal Pradesh', score: 90, budget: '₹3,000–₹5,200', travelTime: 'Approx. 7 hrs', distance: '200 km', bestFor: 'Mountain roads + monastery visits + high-altitude views', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80', vibe: 'Adventure', tags: ['Nature', 'Adventure', 'Culture', 'Photography'], highlight: 'Tawang Monastery and valley viewpoint', localFlavor: 'Warm local noodle soup and butter tea' },
  { name: 'Puri', location: 'Odisha', score: 90, budget: '₹1,500–₹2,900', travelTime: 'Approx. 3 hrs', distance: '65 km', bestFor: 'Beach mornings + temple heritage + Odia food', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80', vibe: 'Scenic Escape', tags: ['Nature', 'Culture', 'Food', 'Photography'], highlight: 'Golden Beach sunrise walk', localFlavor: 'Odia thali and local sweets' },
  { name: 'McLeod Ganj', location: 'Himachal Pradesh', score: 92, budget: '₹2,000–₹3,800', travelTime: 'Approx. 4 hrs', distance: '230 km', bestFor: 'Mountain trails + cafés + Tibetan culture', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80', vibe: 'Adventure', tags: ['Nature', 'Adventure', 'Culture', 'Food', 'Photography'], highlight: 'Bhagsu trail and waterfall', localFlavor: 'Tibetan momos and thukpa' },
  { name: 'Kaziranga', location: 'Assam', score: 91, budget: '₹2,500–₹4,500', travelTime: 'Approx. 5 hrs', distance: '220 km', bestFor: 'Wildlife + grassland landscapes + nature', image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=80', vibe: 'Adventure', tags: ['Nature', 'Adventure', 'Photography'], highlight: 'Kaziranga safari zone', localFlavor: 'Assamese thali with local greens' },
  { name: 'Chikmagalur', location: 'Karnataka', score: 91, budget: '₹1,900–₹3,500', travelTime: 'Approx. 4 hrs', distance: '240 km', bestFor: 'Coffee estates + waterfalls + hill drives', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80', vibe: 'Nature Escape', tags: ['Nature', 'Adventure', 'Comfort', 'Photography'], highlight: 'Coffee estate walk near Mullayanagiri', localFlavor: 'Coorg-style coffee and Malnad meal' }
];

function createAdditionalDestination(profile) {
  return {
    ...profile,
    duration: 'Weekend',
    hiddenGems: [
      { name: profile.highlight, description: `Make time for ${profile.highlight}, a standout local experience in ${profile.name}.`, bestTime: 'Morning', time: '1–2 hrs' },
      { name: profile.localFlavor, description: `Try a relaxed local food stop while exploring ${profile.name}.`, bestTime: 'Lunch', time: '1 hr' },
      { name: `${profile.name} sunset stop`, description: `End the day with an easy scenic break around ${profile.name}.`, bestTime: 'Evening', time: '45 mins' }
    ],
    itinerary: {
      saturday: [
        { time: '08:00 AM', label: `Start for ${profile.name}`, icon: '🚗' },
        { time: '11:00 AM', label: profile.highlight, icon: '📍' },
        { time: '01:00 PM', label: profile.localFlavor, icon: '🍴' },
        { time: '03:30 PM', label: 'Explore a local neighborhood', icon: '🚶' },
        { time: '06:00 PM', label: 'Sunset stop', icon: '🌅' }
      ],
      sunday: [
        { time: '09:00 AM', label: 'Breakfast', icon: '☕' },
        { time: '10:00 AM', label: 'Scenic morning activity', icon: '🌿' },
        { time: '01:00 PM', label: 'Lunch', icon: '🍽️' },
        { time: '03:00 PM', label: 'Free time and photos', icon: '📸' },
        { time: '05:00 PM', label: 'Return journey', icon: '🚗' }
      ]
    },
    budgetBreakdown: {
      travel: '₹600–₹1,000',
      food: '₹450–₹800',
      activities: '₹200–₹500',
      stay: '₹700–₹1,400',
      total: profile.budget,
      perPerson: '₹488–₹925'
    }
  };
}

let destinations = [...baseDestinations, ...additionalDestinationProfiles.map(createAdditionalDestination)];

const formState = {
  mood: 'Relax & Recharge',
  company: 'Friends',
  budget: '₹1,000–₹2,000',
  time: 'Weekend',
  distance: '50–100 km',
  priorities: ['Nature', 'Food']
};

let currentStep = 0;
let results = [];
let selectedDestination = null;
let savedTrips = [];

function loadSavedTrips() {
  try {
    const storedTrips = JSON.parse(localStorage.getItem('tripmate-saved-trips') || '[]');
    savedTrips = Array.isArray(storedTrips) ? storedTrips : [];
  } catch {
    savedTrips = [];
  }
}

function persistSavedTrips() {
  try {
    localStorage.setItem('tripmate-saved-trips', JSON.stringify(savedTrips));
  } catch (error) {
    console.warn('Favorites could not be saved in this browser.', error);
  }
}

loadSavedTrips();

function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

async function loadLiveDestinationSuggestions() {
  try {
    const response = await fetch('/api/places?lat=22.3072&lon=73.1812&radius=10000&limit=30');
    if (response.status === 404) return;
    const data = await response.json();
    if (response.status === 503 && data.configured === false) return;
    if (!response.ok) throw new Error(data.error || 'Unable to fetch live places');

    const images = [
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80'
    ];
    const liveMatches = (Array.isArray(data) ? data : [])
      .filter((place) => place.name && place.point)
      .map((place, index) => {
        const categories = String(place.kinds || '').toLowerCase();
        const tags = new Set(['Photography']);
        if (/nature|park|water|beach|mountain|forest|natural/.test(categories)) tags.add('Nature');
        if (/adventure|sport|climb|hiking|ski/.test(categories)) tags.add('Adventure');
        if (/historic|cultural|museum|church|temple|monument|architecture|religion/.test(categories)) tags.add('Culture');
        if (/food|cafe|restaurant|market/.test(categories)) tags.add('Food');
        if (!['Nature', 'Adventure', 'Culture', 'Food'].some((tag) => tags.has(tag))) tags.add('Nature');
        const placeTags = Array.from(tags);
        const distanceKm = Number.isFinite(Number(place.dist)) ? Math.max(0, Math.round(Number(place.dist) / 1000)) : null;
        const categoryLabel = categories.split(',').slice(0, 2).join(', ').replaceAll('_', ' ') || 'local point of interest';
        const highlight = place.name;

      return {
        name: place.name,
        location: 'Vadodara, Gujarat',
        score: Math.max(86, Math.min(98, 88 + Math.round(Number(place.rate) || 0))),
        budget: '₹500–₹2,000',
        travelTime: 'Nearby',
        distance: distanceKm === null ? 'Nearby' : `${distanceKm} km away`,
        duration: 'Half day',
        bestFor: categoryLabel,
        image: images[index % images.length],
        vibe: placeTags.includes('Food') ? 'Food & Fun' : placeTags.includes('Culture') ? 'Explore Culture' : placeTags.includes('Adventure') ? 'Adventure' : 'Nature Escape',
        tags: placeTags,
        hiddenGems: [
          { name: highlight, description: `OpenTripMap lists this nearby ${categoryLabel}.`, bestTime: 'Daytime', time: '1 hr' },
          { name: 'Nearby local stop', description: 'Explore the surrounding area and nearby points of interest.', bestTime: 'Afternoon', time: '45 mins' },
          { name: 'Vadodara city break', description: 'Add a relaxed food or coffee stop to the local outing.', bestTime: 'Evening', time: '1 hr' }
        ],
        itinerary: {
          saturday: [
            { time: '09:00 AM', label: `Visit ${place.name}`, icon: '📍' },
            { time: '11:00 AM', label: 'Explore nearby points of interest', icon: '🚶' },
            { time: '01:00 PM', label: 'Lunch break', icon: '🍴' },
            { time: '03:00 PM', label: 'Local photo stop', icon: '📸' },
            { time: '05:00 PM', label: 'Return to Vadodara', icon: '🚗' }
          ],
          sunday: [
            { time: '09:00 AM', label: 'Breakfast in Vadodara', icon: '☕' },
            { time: '10:00 AM', label: `Revisit ${place.name}`, icon: '💎' },
            { time: '01:00 PM', label: 'Lunch break', icon: '🍽️' },
            { time: '03:00 PM', label: 'Leisure walk', icon: '🚶' },
            { time: '05:00 PM', label: 'Return home', icon: '🚗' }
          ]
        },
        budgetBreakdown: {
          travel: '₹500–₹900',
          food: '₹400–₹700',
          activities: '₹200–₹400',
          stay: '₹600–₹1,200',
          total: '₹1,700–₹3,200',
          perPerson: '₹125–₹500'
        }
        };
      });

    const unique = liveMatches.filter((item) => !destinations.some((existing) => existing.name === item.name));
    if (unique.length) {
      destinations = [...destinations, ...unique];
      generateTripMatches();
    }
  } catch (error) {
    console.warn('OpenTripMap suggestions unavailable; using curated destinations.', error);
  }
}

const stepEls = Array.from(document.querySelectorAll('.builder-step'));
const stepIndicators = Array.from(document.querySelectorAll('.step'));
const nextBtn = document.getElementById('nextStep');
const prevBtn = document.getElementById('prevStep');
const generateBtn = document.getElementById('generateTrip');
const resultsGrid = document.getElementById('resultsGrid');
const compatibilityList = document.getElementById('compatibilityList');
const scoreRing = document.getElementById('scoreRing');
const itineraryWrap = document.getElementById('itineraryWrap');
const gemsGrid = document.getElementById('gemsGrid');
const budgetTotal = document.getElementById('budgetTotal');
const travelCost = document.getElementById('travelCost');
const foodCost = document.getElementById('foodCost');
const activityCost = document.getElementById('activityCost');
const stayCost = document.getElementById('stayCost');
const perPerson = document.getElementById('perPerson');
const compareTableBody = document.getElementById('compareTableBody');
const savedTripsGrid = document.getElementById('savedTripsGrid');

function updateStepUI() {
  stepEls.forEach((el, index) => {
    el.classList.toggle('active', index === currentStep);
  });

  stepIndicators.forEach((el, index) => {
    el.classList.toggle('active', index === currentStep);
  });

  prevBtn.style.visibility = currentStep === 0 ? 'hidden' : 'visible';
  nextBtn.classList.toggle('hidden', currentStep === stepEls.length - 1);
  generateBtn.classList.toggle('hidden', currentStep !== stepEls.length - 1);
}

function collectOptionSelections() {
  document.querySelectorAll('.option-btn').forEach((button) => {
    const group = button.dataset.group;
    const value = button.dataset.value;
    if (group === 'priorities') {
      const isSelected = formState.priorities.includes(value);
      button.classList.toggle('selected', isSelected);
      return;
    }
    if (group === 'mood') button.classList.toggle('selected', formState.mood === value);
    if (group === 'company') button.classList.toggle('selected', formState.company === value);
    if (group === 'budget') button.classList.toggle('selected', formState.budget === value);
    if (group === 'time') button.classList.toggle('selected', formState.time === value);
    if (group === 'distance') button.classList.toggle('selected', formState.distance === value);
  });
}

function setupBuilderInteractions() {
  document.querySelectorAll('.option-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const { group, value } = button.dataset;
      if (group === 'priorities') {
        const selected = new Set(formState.priorities);
        if (selected.has(value)) selected.delete(value);
        else selected.add(value);
        formState.priorities = Array.from(selected);
        button.classList.toggle('selected');
        return;
      }

      formState[group] = value;
      collectOptionSelections();
    });
  });

  nextBtn.addEventListener('click', () => {
    if (currentStep < stepEls.length - 1) {
      currentStep += 1;
      updateStepUI();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep -= 1;
      updateStepUI();
    }
  });

  generateBtn.addEventListener('click', () => {
    generateTripMatches();
    document.getElementById('destinations').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.getElementById('surpriseTrigger').addEventListener('click', () => {
    const surpriseResult = document.getElementById('surpriseResult');
    const spinner = document.querySelector('.spinner-ring');
    spinner.style.animation = 'spin 0.9s linear infinite';
    setTimeout(() => {
      const randomPlace = destinations[Math.floor(Math.random() * destinations.length)];
      document.getElementById('surpriseDestination').textContent = randomPlace.name;
      document.getElementById('surpriseMood').textContent = `Mood: ${formState.mood}`;
      document.getElementById('surpriseBudget').textContent = `Est. budget: ${randomPlace.budget}`;
      document.getElementById('surpriseActivity').textContent = randomPlace.hiddenGems[0].description;
      surpriseResult.classList.remove('hidden');
      document.getElementById('surpriseCard').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 1200);
  });

  document.getElementById('spinSurprise').addEventListener('click', () => {
    document.getElementById('surpriseResult').classList.add('hidden');
    const spinner = document.querySelector('.spinner-ring');
    spinner.style.animation = 'spin 0.9s linear infinite';
    setTimeout(() => {
      const randomPlace = destinations[Math.floor(Math.random() * destinations.length)];
      document.getElementById('surpriseDestination').textContent = randomPlace.name;
      document.getElementById('surpriseMood').textContent = `Mood: ${formState.mood}`;
      document.getElementById('surpriseBudget').textContent = `Est. budget: ${randomPlace.budget}`;
      document.getElementById('surpriseActivity').textContent = randomPlace.hiddenGems[0].description;
      document.getElementById('surpriseResult').classList.remove('hidden');
    }, 1200);
  });

  document.getElementById('planBBtn').addEventListener('click', () => {
    const destination = selectedDestination || destinations[0];
    const list = destination.hiddenGems.slice(0, 2);
    const delay = list.map((gem) => {
      const newCard = document.createElement('div');
      newCard.className = 'gem-card';
      newCard.innerHTML = `
        <span class="gem-badge">Plan B</span>
        <h4>${gem.name}</h4>
        <p>${gem.description}</p>
        <div class="gem-meta"><span>Best time: ${gem.bestTime}</span><span>${gem.time}</span></div>
      `;
      return newCard;
    });

    gemsGrid.innerHTML = '';
    delay.forEach((card) => gemsGrid.appendChild(card));
    document.getElementById('hidden-gems')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.querySelectorAll('[data-scroll]').forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.scroll;
      if (target) scrollToSection(target);
    });
  });

  document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks! Your message has been drafted for TripMate AI.');
  });

  document.querySelectorAll('.vibe-card').forEach((card) => {
    card.addEventListener('click', () => {
      const vibeProfiles = {
        Peaceful: { mood: 'Relax & Recharge', tags: ['Nature', 'Comfort'] },
        Adventure: { mood: 'Adventure', tags: ['Adventure', 'Nature'] },
        Photography: { mood: 'Photography', tags: ['Photography'] },
        Foodie: { mood: 'Food & Fun', tags: ['Food'] },
        'Culture & History': { mood: 'Explore Culture', tags: ['Culture'] },
        'Scenic Escape': { mood: 'Nature Escape', tags: ['Nature', 'Photography'] }
      };
      const selection = vibeProfiles[card.dataset.vibe];
      if (!selection) return;

      document.querySelectorAll('.vibe-card').forEach((el) => el.classList.remove('active'));
      card.classList.add('active');
      formState.mood = selection.mood;
      formState.priorities = selection.tags;
      collectOptionSelections();
      generateTripMatches();
      scrollToSection('destinations');
    });
  });
}

function buildResultCard(destination, index) {
  const isSaved = savedTrips.some((trip) => trip.destination === destination.name);
  return `
    <article class="result-card ${index === 0 ? 'active' : ''}" data-name="${destination.name}">
      <div class="result-image" style="background-image:url('${destination.image}')">
        <span class="result-score">${destination.score}% Match</span>
      </div>
      <div class="result-body">
        <div class="result-header">
          <h3>${destination.name}</h3>
        </div>
        <p class="location">${destination.location}</p>
        <ul class="meta-list">
          <li><span>💰 Budget</span><span>${destination.budget}</span></li>
          <li><span>🚗 Travel</span><span>${destination.travelTime}</span></li>
          <li><span>📍 Distance</span><span>${destination.distance}</span></li>
          <li><span>⏱️ Duration</span><span>${destination.duration}</span></li>
          <li><span>🎯 Best for</span><span>${destination.bestFor}</span></li>
        </ul>
        <div class="card-actions">
          <button class="explore-btn" data-explore="${destination.name}">Explore Trip</button>
          <button class="compare-btn" data-compare="${destination.name}">Compare</button>
          <button class="save-btn ${isSaved ? 'is-saved' : ''}" data-save="${destination.name}" aria-pressed="${isSaved}">${isSaved ? 'Remove from favorites ♥' : 'Save to favorites ♡'}</button>
        </div>
      </div>
    </article>
  `;
}

function generateTripMatches() {
  const prioritized = [...formState.priorities];
  const moodTags = {
    'Relax & Recharge': ['Nature', 'Comfort'],
    Adventure: ['Adventure', 'Nature'],
    Photography: ['Photography'],
    'Food & Fun': ['Food'],
    'Explore Culture': ['Culture'],
    'Nature Escape': ['Nature', 'Photography']
  }[formState.mood] || [];
  const relevantDestinations = destinations.filter((destination) =>
    moodTags.some((tag) => destination.tags.includes(tag))
  );
  const destinationsToRank = relevantDestinations.length ? relevantDestinations : destinations;

  results = destinationsToRank
    .map((destination) => {
      let score = destination.score;
      const matchingMoodTags = moodTags.filter((tag) => destination.tags.includes(tag)).length;
      score += matchingMoodTags * 8;
      if (moodTags.length && matchingMoodTags === 0) score -= 8;
      if (prioritized.includes('Nature')) score += destination.tags.includes('Nature') ? 2 : -1;
      if (prioritized.includes('Culture')) score += destination.tags.includes('Culture') ? 2 : -1;
      if (prioritized.includes('Food')) score += destination.tags.includes('Food') ? 2 : -1;
      if (prioritized.includes('Photography')) score += destination.tags.includes('Photography') ? 2 : -1;
      if (prioritized.includes('Low Cost')) score += destination.tags.includes('Low Cost') ? 2 : -1;
      if (formState.mood === 'Relax & Recharge' && destination.vibe === 'Relax & Recharge') score += 3;
      if (formState.mood === 'Adventure' && destination.tags.includes('Nature')) score += 2;
      if (formState.mood === 'Explore Culture' && destination.tags.includes('Culture')) score += 3;
      if (formState.mood === 'Food & Fun' && destination.tags.includes('Food')) score += 3;
      if (formState.mood === 'Nature Escape' && destination.tags.includes('Nature')) score += 3;
      if (formState.mood === 'Photography' && destination.tags.includes('Photography')) score += 3;
      return { ...destination, score: Math.max(0, score) };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map((destination) => ({ ...destination, score: Math.min(99, destination.score) }));

  selectedDestination = results[0];
  resultsGrid.innerHTML = results.map(buildResultCard).join('');
  setTimeout(() => {
    updateDestinationDetail(results[0]);
    renderComparisonTable();
  }, 50);

  attachResultCardActions();
}

function attachResultCardActions() {
  document.querySelectorAll('[data-explore]').forEach((button) => {
    button.addEventListener('click', () => {
      const destination = destinations.find((item) => item.name === button.dataset.explore);
      updateDestinationDetail(destination);
      document.getElementById('destinationDetails').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.querySelectorAll('[data-compare]').forEach((button) => {
    button.addEventListener('click', () => {
      const destination = destinations.find((item) => item.name === button.dataset.compare);
      const tableBody = document.getElementById('compareTableBody');
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${destination.name}</td>
        <td>${destination.score}%</td>
        <td>${destination.budget}</td>
        <td>${destination.distance}</td>
        <td>${destination.travelTime}</td>
        <td>${destination.bestFor}</td>
        <td>${destination.tags.join(', ')}</td>
      `;
      tableBody.appendChild(row);
      document.getElementById('comparison-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.querySelectorAll('[data-save]').forEach((button) => {
    button.addEventListener('click', () => {
      const destination = destinations.find((item) => item.name === button.dataset.save);
      saveTrip(destination);
    });
  });

  if (!savedTripsGrid.dataset.favoriteHandlerBound) {
    savedTripsGrid.dataset.favoriteHandlerBound = 'true';
    savedTripsGrid.addEventListener('click', (event) => {
      const button = event.target.closest('[data-remove-favorite]');
      if (button) removeSavedTrip(button.dataset.removeFavorite);
    });
  }
}

function updateDestinationDetail(destination) {
  selectedDestination = destination;
  compatibilityList.innerHTML = '';
  const preferences = [
    'Nature',
    'Photography',
    'Low Cost',
    'Adventure',
    'Food',
    'Culture'
  ];

  preferences.forEach((pref) => {
    const item = document.createElement('div');
    item.className = 'compatibility-item';
    const status = destination.tags.includes(pref) ? '✓' : destination.tags.includes('Nature') && pref === 'Adventure' ? '~' : '✕';
    const statusClass = status === '✓' ? 'status' : status === '~' ? 'status partial' : 'status';
    item.innerHTML = `
      <span>${pref}</span>
      <span class="${statusClass}">${status}</span>
    `;
    compatibilityList.appendChild(item);
  });

  scoreRing.style.background = `conic-gradient(var(--accent) 0 ${destination.score}%, rgba(29,36,50,0.08) ${destination.score}% 100%)`;
  scoreRing.innerHTML = `<span>${destination.score}%</span>`;

  const selectedDestinationData = destination;
  const itineraryDays = [
    { day: 'SATURDAY', items: selectedDestinationData.itinerary.saturday },
    { day: 'SUNDAY', items: selectedDestinationData.itinerary.sunday }
  ];

  itineraryWrap.innerHTML = itineraryDays
    .map(
      (day) => `
        <div class="day-card">
          <button class="day-header" type="button">
            <span>${day.day}</span>
            <span>▾</span>
          </button>
          <div class="day-content">
            <div class="timeline">
              ${day.items
                .map(
                  (event) => `
                    <div class="timeline-item">
                      <span>${event.time}</span>
                      <strong>${event.icon} ${event.label}</strong>
                    </div>
                  `
                )
                .join('')}
            </div>
          </div>
        </div>
      `
    )
    .join('');

  bindDayToggle();

  const gemCards = selectedDestinationData.hiddenGems
    .map(
      (gem) => `
        <article class="gem-card">
          <span class="gem-badge">💎 Hidden Gem</span>
          <h4>${gem.name}</h4>
          <p>${gem.description}</p>
          <div class="gem-meta"><span>Best time: ${gem.bestTime}</span><span>${gem.time}</span></div>
          <button type="button">Add to My Trip +</button>
        </article>
      `
    )
    .join('');
  gemsGrid.innerHTML = gemCards;

  const cost = selectedDestinationData.budgetBreakdown;
  budgetTotal.textContent = cost.total;
  travelCost.textContent = cost.travel;
  foodCost.textContent = cost.food;
  activityCost.textContent = cost.activities;
  stayCost.textContent = cost.stay;
  perPerson.textContent = cost.perPerson;
}

function renderComparisonTable() {
  compareTableBody.innerHTML = results
    .map(
      (destination) => `
        <tr>
          <td>${destination.name}</td>
          <td>${destination.score}%</td>
          <td>${destination.budget}</td>
          <td>${destination.distance}</td>
          <td>${destination.travelTime}</td>
          <td>${destination.bestFor}</td>
          <td>${destination.tags.join(', ')}</td>
        </tr>
      `
    )
    .join('');
}

function saveTrip(destination) {
  if (!destination) return;

  const savedIndex = savedTrips.findIndex((trip) => trip.destination === destination.name);
  if (savedIndex !== -1) {
    savedTrips.splice(savedIndex, 1);
  } else {
    const trip = {
      destination: destination.name,
      tripDate: 'This weekend',
      budget: destination.budget,
      people: formState.company,
      savedDate: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    };

    savedTrips.unshift(trip);
  }

  persistSavedTrips();
  renderSavedTrips();
  syncFavoriteButtons();
}

function removeSavedTrip(destinationName) {
  savedTrips = savedTrips.filter((trip) => trip.destination !== destinationName);
  persistSavedTrips();
  renderSavedTrips();
  syncFavoriteButtons();
}

function syncFavoriteButtons() {
  document.querySelectorAll('[data-save]').forEach((button) => {
    const isSaved = savedTrips.some((trip) => trip.destination === button.dataset.save);
    button.textContent = isSaved ? 'Remove from favorites ♥' : 'Save to favorites ♡';
    button.classList.toggle('is-saved', isSaved);
    button.setAttribute('aria-pressed', String(isSaved));
  });
}

function renderSavedTrips() {
  savedTripsGrid.innerHTML = savedTrips.length
    ? savedTrips
        .map(
          (trip) => `
            <article class="saved-card">
              <span class="badge">Saved trip</span>
              <h4>${trip.destination}</h4>
              <div class="saved-meta">
                <span>Trip date: ${trip.tripDate}</span>
                <span>Budget: ${trip.budget}</span>
                <span>People: ${trip.people}</span>
                <span>Saved: ${trip.savedDate}</span>
              </div>
              <button class="remove-favorite-btn" type="button" data-remove-favorite="${trip.destination}">Remove from favorites</button>
            </article>
          `
        )
        .join('')
    : `
      <article class="saved-card">
        <h4>No trips saved yet</h4>
        <p>Choose a destination and save your favorite weekend plan.</p>
      </article>
    `;
}

function bindDayToggle() {
  document.querySelectorAll('.day-header').forEach((button) => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      content.classList.toggle('hidden');
    });
  });
}

function initializeDefaults() {
  const moodOption = document.querySelector('[data-group="mood"][data-value="Relax & Recharge"]');
  moodOption?.classList.add('selected');
  collectOptionSelections();
  updateStepUI();
  renderSavedTrips();
  bindDayToggle();
  generateTripMatches();
}

setupBuilderInteractions();
initializeDefaults();
loadLiveDestinationSuggestions();
