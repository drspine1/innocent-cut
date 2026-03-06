'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { IoMenu, IoClose } from 'react-icons/io5'
import { FiShoppingBag } from 'react-icons/fi'
import { useCart } from '@/lib/context'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { getCartCount, state, toggleCart } = useCart()
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
          <div className="flex items-center space-x-4">
            {/* Cart button */}
            <button
              onClick={toggleCart}
              className="relative p-2 text-foreground hover:text-accent transition-colors"
              aria-label="Shopping cart"
            >
              <FiShoppingBag className="w-6 h-6" />
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
            onClick={toggleCart}
            className="relative text-foreground hover:text-accent transition-colors"
          >
            <FiShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden border-t border-border py-4 space-y-3">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 transition-colors rounded-md ${
                  isActive(link.href)
                    ? 'bg-card/50 text-accent font-semibold'
                    : 'text-foreground hover:bg-card hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/booking" className="block px-4 py-2" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Book Now
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
