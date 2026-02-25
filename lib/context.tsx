'use client'

import React, { createContext, useContext, useReducer, ReactNode } from 'react'
import { Product } from './data'

export interface CartItem extends Product {
  quantity: number
}

export interface BookingData {
  serviceId?: string
  barberId?: string
  date?: string
  time?: string
  name?: string
  email?: string
  phone?: string
  specialRequests?: string
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
}

interface CartContextType {
  state: CartState
  addToCart: (product: Product, quantity: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  toggleCart: () => void
  clearCart: () => void
  getTotal: () => number
  getCartCount: () => number
}

interface BookingContextType {
  bookingData: BookingData
  updateBooking: (data: Partial<BookingData>) => void
  resetBooking: () => void
  currentStep: number
  setCurrentStep: (step: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)
const BookingContext = createContext<BookingContextType | undefined>(undefined)

const cartReducer = (
  state: CartState,
  action: any
): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.product.id)
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.product.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload.product, quantity: action.payload.quantity }],
      }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      }
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      }
    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen,
      }
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      }
    default:
      return state
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
  })

  const addToCart = (product: Product, quantity: number) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, quantity } })
  }

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId })
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } })
    }
  }

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const getTotal = () => {
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getCartCount = () => {
    return state.items.reduce((count, item) => count + item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        state,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleCart,
        clearCart,
        getTotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookingData, setBookingData] = React.useState<BookingData>({})
  const [currentStep, setCurrentStep] = React.useState(1)

  const updateBooking = (data: Partial<BookingData>) => {
    setBookingData(prev => ({ ...prev, ...data }))
  }

  const resetBooking = () => {
    setBookingData({})
    setCurrentStep(1)
  }

  return (
    <BookingContext.Provider
      value={{
        bookingData,
        updateBooking,
        resetBooking,
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const context = useContext(BookingContext)
  if (!context) {
    throw new Error('useBooking must be used within BookingProvider')
  }
  return context
}
