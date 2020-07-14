import React, { useState } from 'react'
import { useLocation } from 'wouter'

import useUser from '../../hooks/useUser'
import Modal from '../modal'
import Login from '../login'

import './Fav.css'

const Fav = ({ id }) => {
  const { isLogged, addFav, favs } = useUser()
  const [_, navigate] = useLocation()
  const [showModal, setShowModal] = useState(false)

  const isFaved = favs.some(favId => favId === id)

  const handleClick = () => {
    if (!isLogged) return setShowModal(true)
    addFav({ id })
  }

  const handleClose = () => setShowModal(false)

  const [label, emoji] = isFaved
    ? ['Remove Gif from favorites', '❌']
    : ['Add Gif to favorites', '❤️']

  return (
    <>
      <button className="gf-Fav" onClick={handleClick}>
        <span aria-label={label} role='img'>{emoji}</span>
      </button>
      {
        showModal && <Modal onClose={handleClose}>
          <Login onLogin={handleClose} />
        </Modal>
      }
    </>
  )
}

export default Fav
