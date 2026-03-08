import { LoadingSkeleton } from '@/components/loading-skeleton'

export default function Loading() {
  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <LoadingSkeleton />
      </div>
    </div>
  )
}
