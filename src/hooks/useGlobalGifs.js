import { useContext } from 'react'

import GifsContext from '../context/GifsContext'

export default function () {
  return useContext(GifsContext).gifs
}
