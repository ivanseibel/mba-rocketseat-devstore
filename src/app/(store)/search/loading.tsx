import { ResultsFor } from '@/app/components/results-for'
import { Skeleton } from '@/app/components/skeleton'
import { Suspense } from 'react'
// import { useSearchParams } from 'next/navigation'

export default function SearchLoading() {
  // const searchParams = useSearchParams()

  // const query = searchParams.get('q')

  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={null}>
        <ResultsFor />
      </Suspense>
      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[480px]" />
        <Skeleton className="h-[480px]" />
        <Skeleton className="h-[480px]" />
      </div>
    </div>
  )
}
