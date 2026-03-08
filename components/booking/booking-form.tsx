'use client'

import { useState } from 'react'
import { useBooking } from '@/lib/context'
import { services, barbers, bookingSteps } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Check } from 'lucide-react'
import { fadeInUp } from '@/lib/animations'
import StepOne from './steps/step-one'
import StepTwo from './steps/step-two'
import StepThree from './steps/step-three'
import StepFour from './steps/step-four'
import StepFive from './steps/step-five'
import StepSix from './steps/step-six'

export function BookingForm() {
  const { bookingData, updateBooking, currentStep, setCurrentStep, resetBooking } = useBooking()
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleNext = () => {
    if (currentStep < 6 && canProceed()) {
      setCurrentStep(currentStep + 1)
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return !!bookingData.serviceId
      case 2:
        return !!bookingData.barberId
      case 3:
        return !!bookingData.date && !!bookingData.time
      case 4:
        return !!bookingData.name && !!bookingData.email && !!bookingData.phone
      case 5:
        return true // Special requests are optional
      default:
        return false
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleConfirm = async () => {
    // Simulate sending confirmation
    setShowConfirmation(true)
    
    // Simulate API calls for notifications
    console.log('📧 Sending email confirmation to:', bookingData.email)
    console.log('📱 Sending SMS confirmation to:', bookingData.phone)
    console.log('🔔 Scheduling reminders for:', bookingData.date, bookingData.time)
    
    setTimeout(() => {
      resetBooking()
      setShowConfirmation(false)
    }, 8000) // 8 seconds to read confirmation
  }

  const steps = [
    <StepOne key="1" />,
    <StepTwo key="2" />,
    <StepThree key="3" />,
    <StepFour key="4" />,
    <StepFive key="5" />,
    <StepSix key="6" onConfirm={handleConfirm} />,
  ]

  if (showConfirmation) {
    const selectedService = services.find(s => s.id === bookingData.serviceId)
    const confirmationNumber = `IC-${Date.now().toString(36).toUpperCase()}`
    
    return (
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center"
        >
          <Check className="w-10 h-10 text-accent" />
        </motion.div>
        
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Booking Confirmed!</h2>
          <p className="text-muted-foreground mb-4">Your appointment has been scheduled successfully.</p>
          <p className="text-sm text-muted-foreground">
            Confirmation #: <span className="font-mono font-semibold text-accent">{confirmationNumber}</span>
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 max-w-md w-full text-left">
          <h3 className="font-semibold text-foreground mb-4">Appointment Details</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-muted-foreground">Service</p>
              <p className="font-medium text-foreground">{selectedService?.name}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Date & Time</p>
              <p className="font-medium text-foreground">
                {new Date(bookingData.date!).toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                })} at {bookingData.time}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-accent/10 border border-accent rounded-lg p-4 max-w-md w-full">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Check className="w-4 h-4 text-accent" />
            Notifications Sent
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Check className="w-3 h-3 text-green-500" />
              <span>Email confirmation sent to {bookingData.email}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Check className="w-3 h-3 text-green-500" />
              <span>SMS confirmation sent to {bookingData.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Check className="w-3 h-3 text-green-500" />
              <span>Reminder scheduled for 24 hours before</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          Redirecting to home page...
        </p>
      </motion.div>
    )
  }

  return (
    <div className="w-full max-w-2xl">
      {/* Progress bar */}
      <div className="mb-12">
        {/* Step indicators */}
        <div className="flex justify-between mb-8">
          {bookingSteps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center relative flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-all duration-300 ${
                  index + 1 <= currentStep
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-card border border-border text-foreground'
                }`}
              >
                {index + 1 < currentStep ? <Check className="w-5 h-5" /> : index + 1}
              </div>
              <p className="text-xs text-muted-foreground text-center hidden sm:block">{step.name}</p>

              {/* Connector line */}
              {index + 1 < bookingSteps.length && (
                <div
                  className={`absolute top-5 left-1/2 w-full h-0.5 transition-all duration-300 ${
                    index + 1 < currentStep ? 'bg-accent' : 'bg-border'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-card rounded-full overflow-hidden">
          <motion.div
            animate={{ width: `${(currentStep / 6) * 100}%` }}
            transition={{ duration: 0.3 }}
            className="h-full bg-accent"
          />
        </div>
      </div>

      {/* Step content */}
      <motion.div
        key={currentStep}
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        exit="exit"
        className="mb-8"
      >
        {steps[currentStep - 1]}
      </motion.div>

      {/* Navigation buttons */}
      <div className="flex gap-4 justify-between">
        <Button
          onClick={handlePrevious}
          disabled={currentStep === 1}
          variant="outline"
          className="gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>

        {currentStep < 6 && (
          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
