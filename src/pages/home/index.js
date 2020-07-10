import React, { useCallback } from 'react'
import { useLocation } from 'wouter'
import { Helmet } from 'react-helmet'

import useGifs from '../../hooks/useGifs'
import GifsList from '../../components/gifslist'
import TrendingGifs from '../../components/trending-gifs'
import SearchForm from '../../components/search-form'

const Home = () => {
  const { gifs } = useGifs()
  const [_path, pushLocation] = useLocation()

  const handleSubmit = useCallback(keyword => {
    // Go to another route
    pushLocation(`/search/${keyword}`)
  }, [pushLocation])

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <SearchForm onSubmit={handleSubmit} />
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Last Search</h3>
          <GifsList gifs={gifs} />
        </div>
        <div className="App-category">
          <TrendingGifs />
        </div>
      </div>
    </>
  )
}

export default Home
