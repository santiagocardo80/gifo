import React, { useState } from 'react'
import { useLocation } from 'wouter'

import useGifs from '../../hooks/useGifs'
import GifsList from '../../components/gifslist'

const Home = () => {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  const { loading, gifs } = useGifs()

  const handleSubmit = evt => {
    evt.preventDefault()
    
    // Go to another route
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword} />
      </form>
      <h3 className="App-title">Last Search</h3>
      <GifsList gifs={gifs} />
    </>
  )
}

export default Home
