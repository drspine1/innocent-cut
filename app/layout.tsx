import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider, BookingProvider } from '@/lib/context'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CartDrawer } from '@/components/cart-drawer'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Innocent-Cut | Premium Barbing Salon',
  description: 'Experience luxury grooming at Innocent-Cut, the premier barbing salon with expert barbers, premium services, and exclusive product line.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Innocent-Cut | Premium Barbing Salon',
    description: 'Experience luxury grooming at Innocent-Cut',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-background text-foreground">
        <CartProvider>
          <BookingProvider>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <CartDrawer />
            <Footer />
          </BookingProvider>
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
