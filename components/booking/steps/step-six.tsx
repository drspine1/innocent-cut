'use client'

import { useBooking } from '@/lib/context'
import { services, barbers } from '@/lib/data'
import { motion } from 'framer-motion'
import { itemVariants } from '@/lib/animations'
import { Button } from '@/components/ui/button'
import { Check, Mail, MessageSquare, Bell, Calendar } from 'lucide-react'

export default function StepSix({ onConfirm }: { onConfirm: () => void }) {
  const { bookingData } = useBooking()

  const selectedService = services.find(s => s.id === bookingData.serviceId)
  const selectedBarber =
    bookingData.barberId === 'auto'
      ? { name: 'Best Available Barber' }
      : barbers.find(b => b.id === bookingData.barberId)

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">Confirm Booking</h2>
      <p className="text-muted-foreground mb-6">Review your appointment details</p>

      <motion.div
        variants={itemVariants}
        initial="initial"
        animate="animate"
        className="space-y-4"
      >
        {/* Summary card */}
        <div className="bg-card rounded-lg border border-border p-6 space-y-4">
          {/* Service */}
          {selectedService && (
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <img src={selectedService.image} alt={selectedService.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Service</p>
                <h3 className="text-lg font-semibold text-foreground">{selectedService.name}</h3>
                <p className="text-sm text-accent font-medium">
                  ${selectedService.price} • {selectedService.duration} min
                </p>
              </div>
            </div>
          )}

          <div className="border-t border-border" />

          {/* Barber */}
          {selectedBarber && (
            <div>
              <p className="text-xs text-muted-foreground mb-2">Barber</p>
              <p className="font-semibold text-foreground">{selectedBarber.name}</p>
            </div>
          )}

          {/* Date & Time */}
          {bookingData.date && bookingData.time && (
            <div>
              <p className="text-xs text-muted-foreground mb-2">Date & Time</p>
              <p className="font-semibold text-foreground">
                {new Date(bookingData.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}{' '}
                at {bookingData.time}
              </p>
            </div>
          )}

          <div className="border-t border-border" />

          {/* Contact */}
          <div>
            <p className="text-xs text-muted-foreground mb-2">Contact Information</p>
            <div className="space-y-1">
              <p className="font-semibold text-foreground">{bookingData.name}</p>
              <p className="text-sm text-muted-foreground">{bookingData.email}</p>
              <p className="text-sm text-muted-foreground">{bookingData.phone}</p>
            </div>
          </div>

          {bookingData.specialRequests && (
            <>
              <div className="border-t border-border" />
              <div>
                <p className="text-xs text-muted-foreground mb-2">Special Requests</p>
                <p className="text-sm text-foreground italic">{bookingData.specialRequests}</p>
              </div>
            </>
          )}
        </div>

        {/* Notifications info */}
        <div className="bg-card rounded-lg border border-border p-4">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Bell className="w-4 h-4 text-accent" />
            You'll receive notifications
          </h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3 text-sm">
              <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-foreground font-medium">Email Confirmation</p>
                <p className="text-muted-foreground text-xs">Instant confirmation to {bookingData.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <MessageSquare className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-foreground font-medium">SMS Reminder</p>
                <p className="text-muted-foreground text-xs">Text reminder 24 hours before to {bookingData.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <Calendar className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-foreground font-medium">Calendar Invite</p>
                <p className="text-muted-foreground text-xs">Add to your calendar with one click</p>
              </div>
            </div>
          </div>
        </div>

        {/* Confirmation message */}
        <div className="bg-accent/10 border border-accent rounded-lg p-4 flex gap-3">
          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-foreground">Booking is almost complete!</p>
            <p className="text-sm text-muted-foreground">Click the button below to confirm your appointment and receive notifications</p>
          </div>
        </div>
      </motion.div>

      {/* Confirm button */}
      <Button
        onClick={onConfirm}
        className="w-full mt-6 bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-base font-semibold"
      >
        Confirm Appointment & Send Notifications
      </Button>
    </div>
  )
}

