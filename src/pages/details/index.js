import React from 'react'
import { Redirect } from 'wouter'
import { Helmet } from 'react-helmet'

import useSingleGif from '../../hooks/useSingleGif'
import Gif from '../../components/gif'
import Spinner from '../../components/spinner'

const Details = ({ params: { id } }) => {
  const { gif, isLoading, isError } = useSingleGif({ id })
  const title = gif ? gif.title : ''

  if (isError) return <Redirect to='/404' />
  if (!gif) return null

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <Spinner />
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>{title} | Giffy</title>
      </Helmet>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </>
  )
}

export default Details
