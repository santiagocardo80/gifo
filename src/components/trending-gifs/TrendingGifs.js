import React, { useEffect, useState } from 'react'

import getTrendingGifs from '../../services/getTrendingGifs'
import Category from '../category'

const TrendingGifs = () => {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrendingGifs().then(setTrends)
  }, [])

  return <Category name='Trending' options={trends} />
}

export default TrendingGifs
