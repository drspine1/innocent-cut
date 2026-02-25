'use client'

import { useBooking } from '@/lib/context'
import { motion } from 'framer-motion'
import { itemVariants } from '@/lib/animations'

export default function StepFour() {
  const { bookingData, updateBooking } = useBooking()

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">Your Information</h2>
      <p className="text-muted-foreground mb-6">Please provide your contact details</p>

      <motion.div
        variants={itemVariants}
        initial="initial"
        animate="animate"
        className="space-y-4"
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
          <input
            type="text"
            value={bookingData.name || ''}
            onChange={e => updateBooking({ name: e.target.value })}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
          <input
            type="email"
            value={bookingData.email || ''}
            onChange={e => updateBooking({ email: e.target.value })}
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Phone *</label>
          <input
            type="tel"
            value={bookingData.phone || ''}
            onChange={e => updateBooking({ phone: e.target.value })}
            placeholder="(555) 123-4567"
            className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
          />
        </div>
      </motion.div>
    </div>
  )
}
