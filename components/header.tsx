'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { useCart } from '@/lib/context'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import Link from 'next/link'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { getCartCount, toggleCart } = useCart()
  const cartCount = getCartCount()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/barbers', label: 'Our Barbers' },
    { href: '/shop', label: 'Shop' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-accent">Innocent-Cut</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-accent font-semibold'
                    : 'text-foreground hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Theme toggle */}
            <ThemeToggle />

            {/* Cart button */}
            <button
              onClick={toggleCart}
              className="relative p-2 text-foreground hover:text-accent transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-background transform translate-x-1/2 -translate-y-1/2 bg-accent rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Book button */}
            <Link href="/booking">
              <Button className="hidden sm:inline-flex bg-accent text-accent-foreground hover:bg-accent/90">
                Book Now
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Full Screen Overlay */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu */}
            <div className="fixed inset-y-0 right-0 w-full bg-background z-50 md:hidden flex flex-col items-center justify-center text-center animate-in slide-in-from-right duration-300">
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 text-foreground hover:text-accent transition-colors"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Links */}
              <nav className="space-y-6">
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-2xl font-semibold transition-colors ${
                      isActive(link.href)
                        ? 'text-accent'
                        : 'text-foreground hover:text-accent'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/booking" onClick={() => setIsOpen(false)}>
                  <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                    Book Now
                  </Button>
                </Link>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  )
}
