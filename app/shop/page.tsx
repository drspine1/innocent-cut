'use client'

import { products } from '@/lib/data'
import { useCart } from '@/lib/context'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animations'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { useState } from 'react'

export default function ShopPage() {
  const { addToCart } = useCart()
  const [addedProducts, setAddedProducts] = useState<Set<string>>(new Set())

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product, 1)
    setAddedProducts(new Set([...addedProducts, product.id]))
    setTimeout(() => {
      setAddedProducts(prev => {
        const updated = new Set(prev)
        updated.delete(product.id)
        return updated
      })
    }, 2000)
  }

  const filteredProducts = products

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
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">Premium Grooming Products</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Carefully selected products to enhance your grooming routine at home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shop */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Products Grid */}
          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                custom={index}
                className="group bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-xl flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-background">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {product.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{product.description}</p>

                  {/* Price and button */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">${product.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAddToCart(product)}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        addedProducts.has(product.id)
                          ? 'bg-accent/20 text-accent'
                          : 'bg-accent text-accent-foreground hover:bg-accent/90'
                      }`}
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* Add to cart button */}
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/90"
                    variant={addedProducts.has(product.id) ? 'outline' : 'default'}
                  >
                    {addedProducts.has(product.id) ? 'Added to Cart!' : 'Add to Cart'}
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Information section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Why Our Products?</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">
                Hand-selected products that meet our high standards for quality and performance.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="text-5xl mb-4">🧴</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Professional Brands</h3>
              <p className="text-muted-foreground">
                We carry only the best brands trusted by professional barbers worldwide.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Guaranteed Results</h3>
              <p className="text-muted-foreground">
                Our products are proven to deliver exceptional results for all hair types and skin types.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
