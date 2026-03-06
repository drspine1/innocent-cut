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
    image: '/images/service-fade.jpg',
  },
  {
    id: 'premium-cut',
    name: 'Premium Design Cut',
    description: 'Custom design haircut with intricate patterns, detailed fade, and personalized styling consultation.',
    price: 50,
    duration: 45,
    image: '/images/service-design.jpg',
  },
  {
    id: 'beard-trim',
    name: 'Beard Trim & Shape',
    description: 'Professional beard grooming with shaping, trimming, and conditioning for a refined appearance.',
    price: 25,
    duration: 20,
    image: '/images/service-beard.jpg',
  },
  {
    id: 'hot-shave',
    name: 'Hot Shave Experience',
    description: 'Luxurious hot towel shave with premium products, facial massage, and skincare treatment.',
    price: 40,
    duration: 35,
    image: '/images/service-shave.jpg',
  },
  {
    id: 'combo-package',
    name: 'Ultimate Grooming Package',
    description: 'Complete grooming experience: premium cut, beard trim, hot shave, and skincare treatment.',
    price: 100,
    duration: 90,
    image: '/images/service-fade.jpg',
  },
  {
    id: 'line-up',
    name: 'Line-Up & Edge Detail',
    description: 'Precision line-up service with detailed edge work and facial hair detailing.',
    price: 15,
    duration: 15,
    image: '/images/service-kids.jpg',
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
    id: 'pomade',
    name: 'Premium Hair Pomade',
    description: 'Luxurious styling pomade with strong hold and brilliant shine for the perfect finish.',
    price: 32,
    category: 'Hair Care',
    image: '/images/product-pomade.jpg',
  },
  {
    id: 'hair-clay',
    name: 'Matte Hair Clay',
    description: 'Versatile styling clay for texture and natural matte finish. Perfect for contemporary styles.',
    price: 30,
    category: 'Hair Care',
    image: '/images/product-clay.jpg',
  },
  {
    id: 'beard-oil',
    name: 'Premium Beard Oil',
    description: 'Nourishing blend of natural oils that softens and conditions facial hair. Perfect for daily use.',
    price: 28,
    category: 'Beard Care',
    image: '/images/product-beard-oil.jpg',
  },
  {
    id: 'shampoo',
    name: 'Luxury Shampoo',
    description: 'Rich, gentle shampoo formula for all hair types with moisturizing properties.',
    price: 24,
    category: 'Hair Care',
    image: '/images/product-shampoo.jpg',
  },
  {
    id: 'conditioner',
    name: 'Premium Conditioner',
    description: 'Deep conditioning treatment that nourishes and strengthens hair.',
    price: 26,
    category: 'Hair Care',
    image: '/images/product-conditioner.jpg',
  },
  {
    id: 'aftershave-balm',
    name: 'Aftershave Balm',
    description: 'Soothing balm with antiseptic properties. Moisturizes and protects sensitive skin.',
    price: 26,
    category: 'Skincare',
    image: '/images/product-aftershave.jpg',
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
