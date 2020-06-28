import React from 'react'

import useGlobalGifs from '../../hooks/useGlobalGifs'
import Gif from '../../components/gif'

const Details = ({ params: { id } }) => {
  const gifs = useGlobalGifs()
  const gif = gifs.find(singleGif => singleGif.id === id)

  return <Gif {...gif} />
}

export default Details
