import React from 'react'
import { useLocation } from 'wouter'

import useUser from '../../hooks/useUser'

import './Fav.css'

const Fav = ({ id }) => {
  const { isLogged, addFav, favs } = useUser()
  const [_, navigate] = useLocation()

  const isFaved = favs.some(favId => favId === id)

  const handleClick = () => {
    if (!isLogged) return navigate('/login')
    addFav({ id })
  }

  const [label, emoji] = isFaved
    ? ['Remove Gif from favorites', '❌']
    : ['Add Gif to favorites', '❤️']

  return (
    <button className="gf-Fav" onClick={handleClick}>
      <span aria-label={label} role='img'>{emoji}</span>
    </button>
  )
}

export default Fav
