import React, { Suspense } from 'react'
import Spinner from 'components/Spinner/Spinner'
import useNearScreen from 'hooks/useNearScreen'

const LazyTrendingSearches = React.lazy(() => import('./index'))

const TrendingSearches = () => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '200px' })

  return (
    <div ref={fromRef}>
      <Suspense fallback={<Spinner />}>{isNearScreen ? <LazyTrendingSearches /> : null}</Suspense>
    </div>
  )
}

export default TrendingSearches
