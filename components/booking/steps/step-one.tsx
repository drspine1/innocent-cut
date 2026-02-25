'use client'

import { services } from '@/lib/data'
import { useBooking } from '@/lib/context'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animations'
import { Clock, DollarSign } from 'lucide-react'

export default function StepOne() {
  const { bookingData, updateBooking } = useBooking()

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">Select a Service</h2>
      <p className="text-muted-foreground mb-6">Choose the service that best fits your needs</p>

      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="space-y-3"
      >
        {services.map(service => (
          <motion.button
            key={service.id}
            variants={itemVariants}
            onClick={() => updateBooking({ serviceId: service.id })}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
              bookingData.serviceId === service.id
                ? 'border-accent bg-accent/10'
                : 'border-border hover:border-accent/50'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{service.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
              </div>
              <div className="flex gap-4 ml-4 whitespace-nowrap">
                <div className="flex items-center gap-1 text-accent">
                  <DollarSign className="w-4 h-4" />
                  <span className="font-bold">{service.price}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{service.duration}m</span>
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </motion.div>
    </div>
  )
}
