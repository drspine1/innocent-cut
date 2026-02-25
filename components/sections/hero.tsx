'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeInUp, containerVariants, itemVariants } from '@/lib/animations'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/hero.jpg)',
          filter: 'brightness(0.4)',
        }}
      />
      
      {/* Background decoration overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-accent/10 -top-40 -right-40 blur-3xl" />
        <div className="absolute w-96 h-96 rounded-full bg-accent/5 -bottom-40 -left-40 blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6"
        >
          <span className="text-foreground">Experience Premium</span>{' '}
          <span className="text-accent">Grooming</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance"
        >
          Discover the art of luxury barbering at Innocent-Cut. Where precision meets perfection.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/booking">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
              Book an Appointment
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="outline" className="border-border hover:bg-card w-full sm:w-auto">
              Explore Services
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-accent">15+</p>
            <p className="text-muted-foreground mt-2">Expert Barbers</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-accent">5000+</p>
            <p className="text-muted-foreground mt-2">Happy Clients</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-accent">10+</p>
            <p className="text-muted-foreground mt-2">Years Experience</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
