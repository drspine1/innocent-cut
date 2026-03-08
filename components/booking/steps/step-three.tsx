'use client'

import { useBooking } from '@/lib/context'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animations'
import { getAvailabilityForDate, getAvailableSlotCount } from '@/lib/booking-utils'
import { Calendar, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react'

export default function StepThree() {
  const { bookingData, updateBooking } = useBooking()
  const [selectedDate, setSelectedDate] = useState(bookingData.date || '')
  const [selectedTime, setSelectedTime] = useState(bookingData.time || '')
  const [availableSlots, setAvailableSlots] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // Update availability when date or barber changes
  useEffect(() => {
    if (selectedDate) {
      setIsLoading(true)
      // Simulate API call delay
      setTimeout(() => {
        const slots = getAvailabilityForDate(selectedDate, bookingData.barberId)
        setAvailableSlots(slots)
        setIsLoading(false)
      }, 300)
    }
  }, [selectedDate, bookingData.barberId])

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value
    setSelectedDate(date)
    setSelectedTime('') // Reset time when date changes
    updateBooking({ date, time: '' })
  }

  const handleTimeChange = (time: string, available: boolean) => {
    if (!available) return
    setSelectedTime(time)
    updateBooking({ time })
  }

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0]
  
  // Get next 7 days for quick selection
  const getNextDays = () => {
    const days = []
    for (let i = 0; i < 7; i++) {
      const date = new Date()
      date.setDate(date.getDate() + i)
      const dateString = date.toISOString().split('T')[0]
      const availableCount = getAvailableSlotCount(dateString, bookingData.barberId)
      days.push({
        date: dateString,
        label: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : date.toLocaleDateString('en-US', { weekday: 'short' }),
        day: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' }),
        availableCount,
      })
    }
    return days
  }

  const nextDays = getNextDays()

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">Pick Date & Time</h2>
      <p className="text-muted-foreground mb-6">Choose your preferred appointment date and time</p>

      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="space-y-6"
      >
        {/* Quick date selection */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Quick Select
          </label>
          <div className="grid grid-cols-7 gap-2">
            {nextDays.map((day) => (
              <button
                key={day.date}
                onClick={() => {
                  setSelectedDate(day.date)
                  setSelectedTime('')
                  updateBooking({ date: day.date, time: '' })
                }}
                className={`p-2 rounded-lg border-2 transition-all duration-200 ${
                  selectedDate === day.date
                    ? 'border-accent bg-accent/10'
                    : 'border-border hover:border-accent/50'
                }`}
              >
                <div className="text-xs text-muted-foreground">{day.label}</div>
                <div className="text-lg font-bold text-foreground">{day.day}</div>
                <div className="text-xs text-muted-foreground">{day.month}</div>
                <div className={`text-xs mt-1 ${day.availableCount > 5 ? 'text-green-500' : day.availableCount > 0 ? 'text-yellow-500' : 'text-red-500'}`}>
                  {day.availableCount} slots
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Date picker */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-semibold text-foreground mb-2">Or pick a specific date</label>
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            min={today}
            className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:border-accent focus:outline-none transition-colors"
          />
        </motion.div>

        {/* Time picker with availability */}
        {selectedDate && (
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Available Time Slots
              {isLoading && <span className="text-xs text-muted-foreground">(Loading...)</span>}
            </label>
            
            {/* Availability legend */}
            <div className="flex gap-4 mb-3 text-xs">
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span className="text-muted-foreground">Available</span>
              </div>
              <div className="flex items-center gap-1">
                <XCircle className="w-3 h-3 text-red-500" />
                <span className="text-muted-foreground">Booked</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {availableSlots.map((slot) => (
                <button
                  key={slot.time}
                  onClick={() => handleTimeChange(slot.time, slot.available)}
                  disabled={!slot.available}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 font-medium relative ${
                    selectedTime === slot.time
                      ? 'border-accent bg-accent/10 text-foreground'
                      : slot.available
                      ? 'border-border hover:border-accent/50 text-foreground hover:text-accent'
                      : 'border-border bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{slot.time}</span>
                    {slot.available ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-500" />
                    )}
                  </div>
                  {!slot.available && (
                    <div className="text-xs text-muted-foreground mt-1">Booked</div>
                  )}
                </button>
              ))}
            </div>

            {/* Availability summary */}
            <div className="mt-4 p-3 rounded-lg bg-card border border-border flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-accent mt-0.5" />
              <div className="text-sm">
                <p className="text-foreground font-medium">
                  {availableSlots.filter(s => s.available).length} of {availableSlots.length} slots available
                </p>
                <p className="text-muted-foreground text-xs mt-1">
                  Availability updates in real-time. Book now to secure your spot!
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Summary */}
        {selectedDate && selectedTime && (
          <motion.div
            variants={itemVariants}
            className="p-4 rounded-lg bg-accent/10 border border-accent"
          >
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Selected appointment</p>
                <p className="text-lg font-semibold text-accent">
                  {new Date(selectedDate).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}{' '}
                  at {selectedTime}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

