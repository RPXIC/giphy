import { useState, useEffect } from 'react'
import { Category } from 'components'
import getTrendingGifs from 'services/getTrendingGifs'

const TrendingSearches = () => {
  const [trends, setTrends] = useState()

  useEffect(() => {
    ;(async () => {
      const gifs = await getTrendingGifs()
      setTrends(gifs)
    })()
  }, [])

  return <Category name='Trendings' options={trends} />
}

export default TrendingSearches
