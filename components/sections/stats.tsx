'use client'

import { motion } from 'framer-motion'
import { Users, Award, Clock } from 'lucide-react'
import { containerVariants, itemVariants } from '@/lib/animations'

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: '15+',
      label: 'Expert Barbers',
    },
    {
      icon: Award,
      value: '5000+',
      label: 'Happy Clients',
    },
    {
      icon: Clock,
      value: '10+',
      label: 'Years Experience',
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-3 gap-4 sm:gap-8"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="text-center"
          >
            <stat.icon className="w-8 h-8 sm:w-12 sm:h-12 text-accent mx-auto mb-2 sm:mb-4" />
            <p className="text-2xl sm:text-4xl font-bold text-accent mb-1 sm:mb-2">{stat.value}</p>
            <p className="text-xs sm:text-base text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
