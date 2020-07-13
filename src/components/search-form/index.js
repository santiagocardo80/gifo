import React from 'react'
import { useLocation } from 'wouter'

import useForm from './hook'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

const SearchForm = ({ initialKeyword = '', initialRating = RATINGS[0] }) => {
  const [_, pushLocation] = useLocation()
  const { keyword, rating, changeKeyword, changeRating } = useForm({ initialKeyword, initialRating })

  const onSubmit = ({ keyword }) => {
    if (keyword !== '') {
      // navigate to another route
      pushLocation(`/search/${keyword}/${rating}`)
    }
  }

  const handleChange = evt => changeKeyword({ keyword: evt.target.value })

  const handleSubmit = evt => {
    evt.preventDefault()
    onSubmit({ keyword })
  }

  const handleChangeRating = evt => changeRating({ rating: evt.target.value })

  return (
    <form onSubmit={handleSubmit}>
      <button>Search</button>
      <input placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword} />
      <select value={rating} onChange={handleChangeRating}>
        <option disabled>Rating type</option>
        {
          RATINGS.map(rating => <option key={rating}>{rating}</option>)
        }
      </select>
    </form>
  )
}

export default React.memo(SearchForm)
