import React from 'react'

import GifsList from '../../components/gifslist'
import Spinner from '../../components/spinner'
import useGifs from '../../hooks/useGifs'

const SearchResults = ({ params: { keyword } }) => {
  const { loading, gifs } = useGifs({ keyword })

  return <>
    {
      loading ? <Spinner /> : <GifsList gifs={gifs} />
    }
  </>
}

export default SearchResults
