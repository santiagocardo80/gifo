import React, { useEffect, useCallback } from 'react'
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet'

import GifsList from '../../components/gifslist'
import Spinner from '../../components/spinner'
import useGifs from '../../hooks/useGifs'
import useNearScreen from '../../hooks/useNearScreen'

const SearchResults = ({ params: { keyword } }) => {
  const { loading, gifs, setPage } = useGifs({ keyword })
  const { isNearScreen, fromRef } = useNearScreen({ once: false })

  const title = gifs ? `${gifs.length} results of ${keyword}` : ''
  const handleNextPage = () => setPage(prevPage => prevPage + 1)

  const debounceHandleNextPage = useCallback(
    debounce(handleNextPage, 200),
    [],
  )

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [isNearScreen, debounceHandleNextPage])

  return <>
    {
      loading
        ? <Spinner />
        : <>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={title} />
            <meta name="rating" content="General" />
          </Helmet>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <GifsList gifs={gifs} />
          <div id="viewer" ref={fromRef}></div>
        </>
    }
  </>
}

export default SearchResults
