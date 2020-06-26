import React, { useState, useEffect } from 'react'

import './GifsList.css'
import Gif from '../gif/Gif'
import getGifs from '../../services/getGifs'

const GifsList = ({ params: keyword }) => {
  const [gifs, setGifs] = useState([])

  useEffect(() => { getGifs(keyword).then(setGifs) }, [keyword])

  return (
    <div className='ListOfGifs'>
      {
        gifs.map(({ id, title, url }) =>
          <Gif
            key={id}
            id={id}
            title={title}
            url={url}
          />
        ) 
      }
    </div>
  )
}

export default GifsList
