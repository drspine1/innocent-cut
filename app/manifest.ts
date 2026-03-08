import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Innocent-Cut | Premium Barbing Salon',
    short_name: 'Innocent-Cut',
    description: 'Experience luxury grooming at Innocent-Cut, the premier barbing salon',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f0f14',
    theme_color: '#f97316',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
