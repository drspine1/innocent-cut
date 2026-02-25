import { motion } from 'framer-motion'

export function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map(i => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          className="h-32 bg-gradient-to-r from-muted via-card to-muted rounded-lg"
        />
      ))}
    </div>
  )
}
