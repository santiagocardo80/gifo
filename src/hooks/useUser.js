import { useState, useContext, useCallback } from 'react'

import UserContext from '../context/UserContext'
import loginService from '../services/login'
import addFavService from '../services/addFav'

const useUser = () => {
  const { jwt, setJwt, favs, setFavs } = useContext(UserContext)
  const [state, setState] = useState({ loading: false, error: false })

  const login = useCallback(({ username, password }) => {
    setState({ loading: true, error: false })
    loginService({ username, password })
      .then(jwt => {
        window.sessionStorage.setItem('jwt', jwt)
        setState({ loading: false, error: false })
        setJwt(jwt)
      })
      .catch(err => {
        window.sessionStorage.removeItem('jwt')
        setState({ loading: false, error: true })
        console.error(err)
      })
  }, [setJwt])

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('jwt')
    setJwt(null)
  }, [setJwt])

  const addFav = useCallback(({ id }) => {
    addFavService({ id, jwt })
      .then(setFavs)
      .catch(console.error)
  }, [jwt, setFavs])

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    addFav,
    favs
  }
}

export default useUser
