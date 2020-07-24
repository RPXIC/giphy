import React, { Suspense } from 'react'
import useNearScreen from 'hooks/useNearScreen'
import Spinner from 'components/Spinner/Spinner'

const TrendingSearches = React.lazy(
    () => import('./index')
)

export default () => {
    const { isNearScreen, fromRef } = useNearScreen({ distance: '200px'})

    return(
        <div ref={fromRef}>
            <Suspense fallback={<Spinner/ >}>
                { isNearScreen ? <TrendingSearches /> : <Spinner /> }
            </Suspense>
        </div>
    )
}