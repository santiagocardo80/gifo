import React from 'react'

import './GifsList.css'
import Gif from '../gif'

const GifsList = ({ gifs }) => (
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

export default GifsList
