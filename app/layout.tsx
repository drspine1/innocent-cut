import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider, BookingProvider } from '@/lib/context'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CartDrawer } from '@/components/cart-drawer'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist',
  display: 'swap',
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://innocent-cut.com'),
  title: {
    default: 'Innocent-Cut | Premium Barbing Salon',
    template: '%s | Innocent-Cut'
  },
  description: 'Experience luxury grooming at Innocent-Cut, the premier barbing salon with expert barbers, premium services, and exclusive product line.',
  keywords: ['barber', 'barbershop', 'haircut', 'grooming', 'mens haircut', 'beard trim', 'fade', 'luxury barber'],
  authors: [{ name: 'Innocent-Cut' }],
  creator: 'Innocent-Cut',
  publisher: 'Innocent-Cut',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://innocent-cut.com',
    title: 'Innocent-Cut | Premium Barbing Salon',
    description: 'Experience luxury grooming at Innocent-Cut',
    siteName: 'Innocent-Cut',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Innocent-Cut | Premium Barbing Salon',
    description: 'Experience luxury grooming at Innocent-Cut',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
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
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
