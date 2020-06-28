import React, { Suspense } from 'react'

import useNearScreen from '../../hooks/useNearScreen'
import Spinner from '../spinner/index'

const TrendingGifs = React.lazy(() => import('./TrendingGifs'))

const LazyTrending = () => {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '100px' })

  return <div ref={fromRef}>
    <Suspense fallback={<Spinner />}>
      {
        isNearScreen ? <TrendingGifs /> : <Spinner />
      }
    </Suspense>
  </div>
}

export default LazyTrending
