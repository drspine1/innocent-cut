'use client'

import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Innocent-Cut</h3>
            <p className="text-muted-foreground text-sm">
              Premium barbing salon dedicated to delivering exceptional grooming experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/barbers" className="text-muted-foreground hover:text-accent transition-colors">
                  Our Barbers
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-accent transition-colors">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-muted-foreground">Classic Haircut</span>
              </li>
              <li>
                <span className="text-muted-foreground">Premium Design Cut</span>
              </li>
              <li>
                <span className="text-muted-foreground">Beard Trim & Shape</span>
              </li>
              <li>
                <span className="text-muted-foreground">Hot Shave Experience</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>123 Premium Avenue</p>
              <p>New York, NY 10001</p>
              <p className="text-accent font-medium">(555) 123-4567</p>
              <p>info@innocent-cut.com</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 Innocent-Cut. All rights reserved.
            </p>

            {/* Social links */}
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
