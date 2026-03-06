'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/lib/context'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { IoChevronBack } from 'react-icons/io5'
import { MdCheckCircle } from 'react-icons/md'

export default function CheckoutPage() {
  const router = useRouter()
  const { state, getTotalPrice, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSuccess(true)
    clearCart()

    // Redirect after 3 seconds
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }

  if (isSuccess) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-background px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            <MdCheckCircle className="w-24 h-24 text-accent mx-auto mb-6" />
          </motion.div>

          <h1 className="text-4xl font-bold text-foreground mb-4">Order Confirmed!</h1>
          <p className="text-lg text-muted-foreground mb-2">
            Thank you for your purchase. Your order has been successfully processed.
          </p>
          <p className="text-muted-foreground mb-8">
            A confirmation email has been sent to {formData.email}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Continue Shopping
              </Button>
            </Link>
          </motion.div>

          <p className="text-muted-foreground text-sm mt-6">
            Redirecting you back home in 3 seconds...
          </p>
        </motion.div>
      </section>
    )
  }

  return (
    <>
      {/* Header */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card to-background border-b border-border">
        <div className="max-w-6xl mx-auto">
          <Link href="/shop" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-4">
            <IoChevronBack className="w-4 h-4" />
            Back to Shop
          </Link>
          <h1 className="text-4xl font-bold text-foreground">Checkout</h1>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Shipping Information */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Shipping Information</h2>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <input
                      type="text"
                      name="address"
                      placeholder="Street Address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                      <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="Zip Code"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                {/* Payment Information */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Payment Information</h2>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="cardName"
                      placeholder="Cardholder Name"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card Number"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="cardExpiry"
                        placeholder="MM/YY"
                        value={formData.cardExpiry}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                      <input
                        type="text"
                        name="cardCVC"
                        placeholder="CVC"
                        value={formData.cardCVC}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting || state.items.length === 0}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-3 text-lg"
                >
                  {isSubmitting ? 'Processing...' : `Complete Purchase - $${getTotalPrice().toFixed(2)}`}
                </Button>
              </form>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="bg-card border border-border rounded-lg p-6 sticky top-24 h-fit">
                <h2 className="text-2xl font-bold text-foreground mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                  {state.items.map(item => (
                    <div key={item.product.id} className="flex justify-between items-start pb-4 border-b border-border">
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{item.product.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-bold text-accent">${(item.product.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 border-t border-border pt-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>FREE</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Tax</span>
                    <span>Calculated</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-foreground border-t border-border pt-3">
                    <span>Total</span>
                    <span className="text-accent">${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>

                <Link href="/shop" className="block mt-6">
                  <Button variant="outline" className="w-full border-border text-foreground hover:bg-card">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
