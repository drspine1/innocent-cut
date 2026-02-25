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
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleConfirm = () => {
    setShowConfirmation(true)
    setTimeout(() => {
      resetBooking()
      setShowConfirmation(false)
    }, 3000)
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
    return (
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        className="flex flex-col items-center justify-center min-h-screen gap-4"
      >
        <div className="text-6xl">✓</div>
        <h2 className="text-3xl font-bold">Booking Confirmed!</h2>
        <p className="text-muted-foreground">Your appointment has been scheduled successfully.</p>
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
            className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
