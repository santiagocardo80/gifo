import React from 'react'
import { Helmet } from 'react-helmet'

import useGifs from '../../hooks/useGifs'
import GifsList from '../../components/gifslist'
import TrendingGifs from '../../components/trending-gifs'
import SearchForm from '../../components/search-form'

const Home = () => {
  const { gifs } = useGifs()

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <header className="o-header">
        <SearchForm />
      </header>
      <div className="App-wrapper">
        <div className="App-main">
          <div className="App-results">
            <h3 className="App-title">Last Search</h3>
            <GifsList gifs={gifs} />
          </div>
          <div className="App-category">
            <TrendingGifs />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
