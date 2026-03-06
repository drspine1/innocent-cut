'use client'

import { barbers } from '@/lib/data'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animations'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { MdEmojiEvents, MdBusinessCenter } from 'react-icons/md'
import { FaStar } from 'react-icons/fa'

export default function BarbersPage() {
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
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">Meet Our Barbers</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering exceptional grooming and personal care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Barbers Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {barbers.map((barber, index) => (
              <motion.div
                key={barber.id}
                variants={itemVariants}
                custom={index}
                className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden bg-card">
                  <img
                    src={barber.image}
                    alt={barber.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all" />

                  {/* Overlay content on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <p className="text-white/80 text-sm mb-3">{barber.bio}</p>
                    <Link href="/booking">
                      <Button
                        size="sm"
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                      >
                        Book with {barber.name.split(' ')[0]}
                      </Button>
                    </Link>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{barber.name}</h3>
                  <p className="text-accent font-semibold mb-3">{barber.title}</p>

                  {/* Specialties and experience */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-3">
                      <MdBusinessCenter className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground">Specialty</p>
                        <p className="text-foreground font-medium">{barber.specialty}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MdEmojiEvents className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground">Experience</p>
                        <p className="text-foreground font-medium">{barber.experience} Years</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <FaStar className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground">Rating</p>
                        <p className="text-foreground font-medium">5.0 - Highly Rated</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">What Sets Our Barbers Apart</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our team combines traditional barbering techniques with modern trends to deliver exceptional results.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="p-8 bg-background rounded-lg border border-border">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Certified Training</h3>
              <p className="text-muted-foreground">
                All our barbers are certified and regularly attend training sessions to stay updated with latest techniques.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 bg-background rounded-lg border border-border">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Premium Tools</h3>
              <p className="text-muted-foreground">
                We invest in the best equipment and materials to ensure precision and comfort during every service.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 bg-background rounded-lg border border-border">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Personal Attention</h3>
              <p className="text-muted-foreground">
                Each client receives personalized consultation to ensure we deliver exactly what you're looking for.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Experience Excellence?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book an appointment with one of our master barbers today.
            </p>
            <Link href="/booking">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Book Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
