'use client'

import { services } from '@/lib/data'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animations'
import { GoClock } from 'react-icons/go'
import { FiDollarSign } from 'react-icons/fi'

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card to-background border-b border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive grooming services designed to meet every need, from classic to contemporary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex gap-6">
                  {/* Image */}
                  <div className="relative w-40 h-40 flex-shrink-0 overflow-hidden rounded-lg">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{service.name}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                    </div>

                    {/* Details */}
                    <div className="flex items-center gap-6 mb-4">
                      <div className="flex items-center gap-2">
                        <FiDollarSign className="w-5 h-5 text-accent" />
                        <span className="text-foreground font-semibold">${service.price}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GoClock className="w-5 h-5 text-accent" />
                        <span className="text-foreground font-semibold">{service.duration} min</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link href="/booking">
                      <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
                        Book This Service
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Why Choose Us */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 pt-20 border-t border-border"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Innocent-Cut?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-lg border border-border hover:border-accent transition-colors">
                <div className="text-4xl font-bold text-accent mb-4">✨</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Expert Barbers</h3>
                <p className="text-muted-foreground">
                  Our master barbers bring years of expertise and artistic vision to every cut.
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border hover:border-accent transition-colors">
                <div className="text-4xl font-bold text-accent mb-4">🎯</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">
                  We use only premium products and maintain the highest standards in grooming.
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg border border-border hover:border-accent transition-colors">
                <div className="text-4xl font-bold text-accent mb-4">💎</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Luxury Experience</h3>
                <p className="text-muted-foreground">
                  Every visit is a premium experience designed for ultimate relaxation and satisfaction.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Experience Premium Grooming?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book your appointment today and discover why Innocent-Cut is the premier barbing destination.
            </p>
            <Link href="/booking">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Book an Appointment
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
