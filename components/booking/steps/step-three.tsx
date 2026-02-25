'use client'

import { useBooking } from '@/lib/context'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animations'

export default function StepThree() {
  const { bookingData, updateBooking } = useBooking()
  const [selectedDate, setSelectedDate] = useState(bookingData.date || '')
  const [selectedTime, setSelectedTime] = useState(bookingData.time || '')

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value
    setSelectedDate(date)
    updateBooking({ date })
  }

  const handleTimeChange = (time: string) => {
    setSelectedTime(time)
    updateBooking({ time })
  }

  const times = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
  ]

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0]

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
        {/* Date picker */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-semibold text-foreground mb-2">Date</label>
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            min={today}
            className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:border-accent focus:outline-none transition-colors"
          />
        </motion.div>

        {/* Time picker */}
        {selectedDate && (
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-foreground mb-3">Time</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {times.map(time => (
                <button
                  key={time}
                  onClick={() => handleTimeChange(time)}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 font-medium ${
                    selectedTime === time
                      ? 'border-accent bg-accent/10 text-foreground'
                      : 'border-border hover:border-accent/50 text-foreground hover:text-accent'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Summary */}
        {selectedDate && selectedTime && (
          <motion.div
            variants={itemVariants}
            className="p-4 rounded-lg bg-card border border-accent/50"
          >
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
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
