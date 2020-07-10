import { useState, useEffect } from 'react'

import useGifs from './useGifs'
import getSingleGif from '../services/getSingleGif'

const useSingleGif = ({ id }) => {
  const { gifs } = useGifs()
  const gifFromCache = gifs.find(singleGif => singleGif.id === id)

  const [gif, setGif] = useState(gifFromCache)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (!gif) {
      setIsLoading(true)
      getSingleGif({ id })
        .then(singleGif => {
          setGif(singleGif)
          setIsLoading(false)
        })
        .catch(err => {
          setIsLoading(false)
          setIsError(true)
        })
    }
  }, [gif, id])

  return { gif, isLoading, isError }
}

export default useSingleGif
