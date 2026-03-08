import { BookingForm } from '@/components/booking/booking-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Appointment',
  description: 'Book your appointment at Innocent-Cut. Choose your service, select your preferred barber, and pick a convenient time slot.',
  openGraph: {
    title: 'Book Appointment | Innocent-Cut',
    description: 'Book your appointment at Innocent-Cut.',
  },
}

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-card to-background px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Book Your Appointment</h1>
          <p className="text-xl text-muted-foreground">
            Schedule your premium grooming experience at Innocent-Cut in just a few steps
          </p>
        </div>

        {/* Booking form */}
        <BookingForm />
      </div>
    </div>
  )
}
