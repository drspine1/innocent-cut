'use client'

import { useBooking } from '@/lib/context'
import { motion } from 'framer-motion'
import { itemVariants } from '@/lib/animations'

export default function StepFive() {
  const { bookingData, updateBooking } = useBooking()

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">Special Requests</h2>
      <p className="text-muted-foreground mb-6">Let us know any preferences or special requirements</p>

      <motion.div
        variants={itemVariants}
        initial="initial"
        animate="animate"
      >
        <textarea
          value={bookingData.specialRequests || ''}
          onChange={e => updateBooking({ specialRequests: e.target.value })}
          placeholder="Tell us about any specific preferences, hair concerns, or other details..."
          className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors resize-none"
          rows={6}
        />
        <p className="text-xs text-muted-foreground mt-2">This field is optional</p>
      </motion.div>
    </div>
  )
}
