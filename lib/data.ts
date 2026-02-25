export interface Service {
  id: string
  name: string
  description: string
  price: number
  duration: number
  image: string
}

export interface Barber {
  id: string
  name: string
  title: string
  specialty: string
  image: string
  bio: string
  experience: number
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
}

export interface BookingStep {
  id: number
  name: string
}

export const services: Service[] = [
  {
    id: 'classic-cut',
    name: 'Classic Haircut',
    description: 'Precision haircut with traditional fade and line-up. Perfect for maintaining a sharp, polished look.',
    price: 35,
    duration: 30,
    image: 'https://images.unsplash.com/photo-1585747860715-cd4628902d4a?w=400&h=300&fit=crop',
  },
  {
    id: 'premium-cut',
    name: 'Premium Design Cut',
    description: 'Custom design haircut with intricate patterns, detailed fade, and personalized styling consultation.',
    price: 50,
    duration: 45,
    image: 'https://images.unsplash.com/photo-1599210611109-dac3d7b27424?w=400&h=300&fit=crop',
  },
  {
    id: 'beard-trim',
    name: 'Beard Trim & Shape',
    description: 'Professional beard grooming with shaping, trimming, and conditioning for a refined appearance.',
    price: 25,
    duration: 20,
    image: 'https://images.unsplash.com/photo-1607890591518-bab43f265416?w=400&h=300&fit=crop',
  },
  {
    id: 'hot-shave',
    name: 'Hot Shave Experience',
    description: 'Luxurious hot towel shave with premium products, facial massage, and skincare treatment.',
    price: 40,
    duration: 35,
    image: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=400&h=300&fit=crop',
  },
  {
    id: 'combo-package',
    name: 'Ultimate Grooming Package',
    description: 'Complete grooming experience: premium cut, beard trim, hot shave, and skincare treatment.',
    price: 100,
    duration: 90,
    image: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=300&fit=crop',
  },
  {
    id: 'line-up',
    name: 'Line-Up & Edge Detail',
    description: 'Precision line-up service with detailed edge work and facial hair detailing.',
    price: 15,
    duration: 15,
    image: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=300&fit=crop',
  },
]

export const barbers: Barber[] = [
  {
    id: 'marcus',
    name: 'Marcus Johnson',
    title: 'Master Barber',
    specialty: 'Premium Design Cuts',
    image: '/images/barber-marcus.jpg',
    bio: 'With 15 years of experience, Marcus is known for his intricate design work and modern aesthetic. He specializes in custom cuts that perfectly complement each client\'s face shape.',
    experience: 15,
  },
  {
    id: 'david',
    name: 'David Chen',
    title: 'Senior Barber',
    specialty: 'Classic Fades & Beard Work',
    image: '/images/barber-david.jpg',
    bio: 'David brings 12 years of expertise in traditional barbering techniques. His precision with fades and beard sculpting is unmatched in the industry.',
    experience: 12,
  },
  {
    id: 'james',
    name: 'James Williams',
    title: 'Head Barber',
    specialty: 'Hot Shave & Skincare',
    image: '/images/barber-james.jpg',
    bio: 'James is our master of the hot shave experience. With 18 years of dedication, he combines grooming artistry with premium skincare expertise.',
    experience: 18,
  },
]

export const products: Product[] = [
  {
    id: 'beard-oil',
    name: 'Premium Beard Oil',
    description: 'Luxurious blend of argan, jojoba, and sandalwood oil for optimal beard conditioning.',
    price: 28,
    category: 'Beard Care',
    image: 'https://images.unsplash.com/photo-1597318911379-f96d4e2ad5e0?w=300&h=300&fit=crop',
  },
  {
    id: 'hair-pomade',
    name: 'Matte Finish Pomade',
    description: 'Strong hold styling pomade with matte finish. Perfect for textured and designed cuts.',
    price: 32,
    category: 'Hair Styling',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300&h=300&fit=crop',
  },
  {
    id: 'shaving-cream',
    name: 'Luxury Shaving Cream',
    description: 'Rich, creamy shaving formula with moisturizing properties and pleasant fragrance.',
    price: 24,
    category: 'Shaving',
    image: 'https://images.unsplash.com/photo-1552821884-5fefe8c9ef14?w=300&h=300&fit=crop',
  },
  {
    id: 'aftershave-balm',
    name: 'Aftershave Balm',
    description: 'Soothing balm with antiseptic properties. Moisturizes and protects sensitive skin.',
    price: 26,
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop',
  },
  {
    id: 'beard-butter',
    name: 'Beard Butter',
    description: 'Lightweight conditioning butter that softens and tames facial hair. Easy to apply and absorbs quickly.',
    price: 30,
    category: 'Beard Care',
    image: 'https://images.unsplash.com/photo-1597318911379-f96d4e2ad5e0?w=300&h=300&fit=crop',
  },
  {
    id: 'head-wash',
    name: 'Premium Head Wash',
    description: 'Gentle yet effective shampoo for all hair types. Cleanses without stripping natural oils.',
    price: 22,
    category: 'Hair Care',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop',
  },
]

export const bookingSteps: BookingStep[] = [
  { id: 1, name: 'Select Service' },
  { id: 2, name: 'Choose Barber' },
  { id: 3, name: 'Pick Date & Time' },
  { id: 4, name: 'Your Information' },
  { id: 5, name: 'Special Requests' },
  { id: 6, name: 'Confirm Booking' },
]

export const galleryImages = [
  {
    id: 1,
    src: '/images/gallery-1.jpg',
    alt: 'Premium fade haircut',
    title: 'Classic Fade',
  },
  {
    id: 2,
    src: '/images/gallery-2.jpg',
    alt: 'Designer haircut with pattern',
    title: 'Design Cut',
  },
  {
    id: 3,
    src: '/images/gallery-3.jpg',
    alt: 'Textured quiff hairstyle',
    title: 'Textured Quiff',
  },
  {
    id: 4,
    src: '/images/gallery-4.jpg',
    alt: 'Sharp undercut with design',
    title: 'Undercut Design',
  },
  {
    id: 5,
    src: '/images/gallery-5.jpg',
    alt: 'Professional pompadour',
    title: 'Pompadour',
  },
  {
    id: 6,
    src: '/images/gallery-6.jpg',
    alt: 'Clean fade with designs',
    title: 'Fade Design',
  },
  {
    id: 7,
    src: '/images/gallery-7.jpg',
    alt: 'High fade with textured top',
    title: 'High Fade',
  },
  {
    id: 8,
    src: '/images/gallery-8.jpg',
    alt: 'Taper fade haircut',
    title: 'Taper Fade',
  },
  {
    id: 9,
    src: '/images/gallery-9.jpg',
    alt: 'Sharp line design',
    title: 'Line Design',
  },
  {
    id: 10,
    src: '/images/gallery-10.jpg',
    alt: 'Luxury haircut with fade',
    title: 'Premium Fade',
  },
  {
    id: 11,
    src: '/images/gallery-11.jpg',
    alt: 'Styled haircut with product',
    title: 'Styled Cut',
  },
  {
    id: 12,
    src: '/images/gallery-12.jpg',
    alt: 'Creative geometric design',
    title: 'Geometric Design',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Michael Thompson',
    rating: 5,
    comment: 'Absolutely the best barber shop I\'ve ever been to. The attention to detail is incredible.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: 2,
    name: 'Alex Rodriguez',
    rating: 5,
    comment: 'Marcus delivered exactly what I wanted. Professional, friendly, and the results are fantastic.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
  {
    id: 3,
    name: 'Jordan Lee',
    rating: 5,
    comment: 'The hot shave experience is pure luxury. Highly recommend for anyone looking to upgrade their routine.',
    avatar: 'https://images.unsplash.com/photo-1519085360771-9852dc00d837?w=100&h=100&fit=crop',
  },
]
