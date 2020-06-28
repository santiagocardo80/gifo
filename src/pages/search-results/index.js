import React from 'react'

import GifsList from '../../components/gifslist'
import Spinner from '../../components/spinner'
import useGifs from '../../hooks/useGifs'

const SearchResults = ({ params: { keyword } }) => {
  const { loading, gifs, setPage } = useGifs({ keyword })

  const handleNextPage = () => setPage(prevPage => prevPage + 1)

  return <>
    {
      loading
        ? <Spinner />
        : <>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <GifsList gifs={gifs} />
        </>
    }
    <button onClick={handleNextPage} style={{ margin: '10px auto' }}>Next Page</button>
  </>
}

export default SearchResults
