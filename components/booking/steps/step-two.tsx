'use client'

import { barbers } from '@/lib/data'
import { useBooking } from '@/lib/context'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animations'

export default function StepTwo() {
  const { bookingData, updateBooking } = useBooking()

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">Choose Your Barber</h2>
      <p className="text-muted-foreground mb-6">Select a barber or let us assign the best fit</p>

      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="space-y-4"
      >
        {barbers.map(barber => (
          <motion.button
            key={barber.id}
            variants={itemVariants}
            onClick={() => updateBooking({ barberId: barber.id })}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:border-accent/50 ${
              bookingData.barberId === barber.id ? 'border-accent bg-accent/10' : 'border-border'
            }`}
          >
            <div className="flex gap-4">
              <img
                src={barber.image}
                alt={barber.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{barber.name}</h3>
                <p className="text-sm text-accent font-medium">{barber.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{barber.specialty}</p>
                <p className="text-xs text-muted-foreground mt-1">{barber.experience} years experience</p>
              </div>
            </div>
          </motion.button>
        ))}

        {/* Random assignment option */}
        <motion.button
          variants={itemVariants}
          onClick={() => updateBooking({ barberId: 'auto' })}
          className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:border-accent/50 ${
            bookingData.barberId === 'auto' ? 'border-accent bg-accent/10' : 'border-border'
          }`}
        >
          <h3 className="font-semibold text-foreground">Let Us Choose</h3>
          <p className="text-sm text-muted-foreground">Our team will assign the best available barber</p>
        </motion.button>
      </motion.div>
    </div>
  )
}
