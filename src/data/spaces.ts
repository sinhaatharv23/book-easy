
export interface Space {
  id: string;
  name: string;
  description: string;
  location: string;
  price: number;
  category: SpaceCategory;
  capacity: number;
  amenities: string[];
  images: string[];
  rating: number;
  reviewCount: number;
  businessId: string;
}

export type SpaceCategory = 
  | 'coworking'
  | 'event'
  | 'fitness'
  | 'dining'
  | 'meeting'
  | 'studio';

export const categoryLabels: Record<SpaceCategory, string> = {
  coworking: 'Co-working Space',
  event: 'Event Venue',
  fitness: 'Fitness & Wellness',
  dining: 'Dining & Cafes',
  meeting: 'Meeting Room',
  studio: 'Studio Space'
};

export const sampleSpaces: Space[] = [
  {
    id: '1',
    name: 'Urban Workspace Loft',
    description: 'A bright, open co-working space with high-speed internet, meeting rooms, and complimentary coffee. Perfect for freelancers and small teams.',
    location: 'Downtown, New York',
    price: 25,
    category: 'coworking',
    capacity: 50,
    amenities: ['High-speed WiFi', 'Meeting rooms', 'Coffee bar', 'Printing services', '24/7 access'],
    images: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
    ],
    rating: 4.8,
    reviewCount: 124,
    businessId: 'b1'
  },
  {
    id: '2',
    name: 'The Grand Ballroom',
    description: 'An elegant ballroom with crystal chandeliers and a capacity for 200 guests. Perfect for weddings, corporate events, and galas.',
    location: 'Midtown, Chicago',
    price: 1200,
    category: 'event',
    capacity: 200,
    amenities: ['Catering options', 'Sound system', 'Stage', 'Lighting setup', 'Parking'],
    images: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
    ],
    rating: 4.9,
    reviewCount: 87,
    businessId: 'b2'
  },
  {
    id: '3',
    name: 'Elite Fitness Studio',
    description: 'A state-of-the-art fitness studio with modern equipment, personal trainers, and group class spaces available for booking.',
    location: 'West End, Los Angeles',
    price: 75,
    category: 'fitness',
    capacity: 30,
    amenities: ['Modern equipment', 'Showers', 'Lockers', 'Towel service', 'Nutrition bar'],
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    ],
    rating: 4.7,
    reviewCount: 215,
    businessId: 'b3'
  },
  {
    id: '4',
    name: 'Artisan Coffee House',
    description: 'A cozy cafe with a private back room available for small gatherings, meetings, or intimate events. Known for excellent coffee and pastries.',
    location: 'East Side, San Francisco',
    price: 40,
    category: 'dining',
    capacity: 20,
    amenities: ['Catering available', 'WiFi', 'AV equipment', 'Private entrance', 'Custom menu options'],
    images: [
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80',
      'https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    ],
    rating: 4.6,
    reviewCount: 68,
    businessId: 'b4'
  },
  {
    id: '5',
    name: 'Executive Boardroom',
    description: 'A professional meeting room with high-end furnishings, video conferencing capabilities, and business services. Ideal for important client meetings and presentations.',
    location: 'Financial District, Boston',
    price: 90,
    category: 'meeting',
    capacity: 12,
    amenities: ['Video conferencing', 'Whiteboard', 'LCD display', 'Coffee service', 'Catering options'],
    images: [
      'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    ],
    rating: 4.9,
    reviewCount: 42,
    businessId: 'b5'
  },
  {
    id: '6',
    name: 'Creative Arts Studio',
    description: 'A versatile studio space perfect for photographers, artists, dance instructors, and other creative professionals. Features natural lighting and open space.',
    location: 'Arts District, Austin',
    price: 65,
    category: 'studio',
    capacity: 15,
    amenities: ['Natural lighting', 'Sound system', 'Blank backdrop', 'Props available', 'Changing room'],
    images: [
      'https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1604880946787-3cd9bc0ce199?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1187&q=80'
    ],
    rating: 4.7,
    reviewCount: 53,
    businessId: 'b6'
  },
];

export const getFeaturedSpaces = (): Space[] => {
  return sampleSpaces.filter(space => space.rating >= 4.8);
};

export const getSpacesByCategory = (category: SpaceCategory): Space[] => {
  return sampleSpaces.filter(space => space.category === category);
};

export const getSpaceById = (id: string): Space | undefined => {
  return sampleSpaces.find(space => space.id === id);
};
