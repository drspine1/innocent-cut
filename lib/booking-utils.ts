// Simulated booking data for frontend-only real-time availability
export interface TimeSlot {
  time: string
  available: boolean
  bookedBy?: string
}

export interface DayAvailability {
  date: string
  slots: TimeSlot[]
}

// Generate random booked slots for simulation
const generateRandomBookings = (date: string): TimeSlot[] => {
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

  // Use date as seed for consistent "random" bookings
  const seed = new Date(date).getTime()
  
  return times.map((time, index) => {
    // Simulate 30-40% of slots being booked
    const isBooked = ((seed + index) % 10) < 4
    return {
      time,
      available: !isBooked,
      bookedBy: isBooked ? 'Another customer' : undefined,
    }
  })
}

// Get availability for a specific date
export const getAvailabilityForDate = (date: string, barberId?: string): TimeSlot[] => {
  // In a real app, this would fetch from an API
  // For now, we simulate based on date and barber
  const slots = generateRandomBookings(date)
  
  // If a specific barber is selected, adjust availability
  if (barberId) {
    const barberSeed = parseInt(barberId) || 0
    return slots.map((slot, index) => ({
      ...slot,
      available: slot.available && ((barberSeed + index) % 3) !== 0,
    }))
  }
  
  return slots
}

// Get availability summary for multiple dates
export const getAvailabilitySummary = (startDate: Date, days: number = 7): DayAvailability[] => {
  const summary: DayAvailability[] = []
  
  for (let i = 0; i < days; i++) {
    const date = new Date(startDate)
    date.setDate(date.getDate() + i)
    const dateString = date.toISOString().split('T')[0]
    
    summary.push({
      date: dateString,
      slots: generateRandomBookings(dateString),
    })
  }
  
  return summary
}

// Count available slots for a date
export const getAvailableSlotCount = (date: string, barberId?: string): number => {
  const slots = getAvailabilityForDate(date, barberId)
  return slots.filter(slot => slot.available).length
}

// Check if a specific time slot is available
export const isSlotAvailable = (date: string, time: string, barberId?: string): boolean => {
  const slots = getAvailabilityForDate(date, barberId)
  const slot = slots.find(s => s.time === time)
  return slot?.available ?? false
}

// Simulate booking confirmation
export interface BookingConfirmation {
  confirmationNumber: string
  date: string
  time: string
  serviceName: string
  barberName: string
  customerName: string
  customerEmail: string
  customerPhone: string
  estimatedDuration: number
  price: number
  reminderSent: boolean
}

export const generateBookingConfirmation = (bookingData: any): BookingConfirmation => {
  // Generate a random confirmation number
  const confirmationNumber = `IC-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`
  
  return {
    confirmationNumber,
    date: bookingData.date,
    time: bookingData.time,
    serviceName: bookingData.serviceName || 'Service',
    barberName: bookingData.barberName || 'Barber',
    customerName: bookingData.name,
    customerEmail: bookingData.email,
    customerPhone: bookingData.phone,
    estimatedDuration: bookingData.duration || 60,
    price: bookingData.price || 0,
    reminderSent: true,
  }
}

// Simulate sending confirmation email/SMS
export const sendBookingConfirmation = async (confirmation: BookingConfirmation): Promise<boolean> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // In a real app, this would call an API to send email/SMS
  console.log('📧 Email confirmation sent to:', confirmation.customerEmail)
  console.log('📱 SMS confirmation sent to:', confirmation.customerPhone)
  console.log('🔔 Reminder scheduled for:', confirmation.date, confirmation.time)
  
  return true
}

// Get reminder schedule
export const getReminderSchedule = (bookingDate: string, bookingTime: string) => {
  const appointmentDate = new Date(`${bookingDate} ${bookingTime}`)
  
  return {
    oneDayBefore: new Date(appointmentDate.getTime() - 24 * 60 * 60 * 1000),
    oneHourBefore: new Date(appointmentDate.getTime() - 60 * 60 * 1000),
    fifteenMinutesBefore: new Date(appointmentDate.getTime() - 15 * 60 * 1000),
  }
}
