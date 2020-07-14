import React, { useState, useEffect } from 'react'

import getFavsService from '../services/getFavs'

const Context = React.createContext({})

export function UserContextProvider({ children }) {
  const [jwt, setJwt] = useState(() => window.sessionStorage.getItem('jwt'))
  const [favs, setFavs] = useState([])

  useEffect(() => {
    if (!jwt) return setFavs([])
    getFavsService({ jwt })
      .then(setFavs)
      .catch(console.error)

  }, [jwt])

  return <Context.Provider value={{ jwt, setJwt, favs, setFavs }}>
    {children}
  </Context.Provider>
}

export default Context
