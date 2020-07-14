import React, { useState, useEffect } from 'react'
import { useLocation } from 'wouter'

import useUser from '../../hooks/useUser'

import './Login.css'

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [_, navigate] = useLocation()
  const { login, isLogged, isLoginLoading, hasLoginError } = useUser()

  useEffect(() => {
    if (isLogged) {
      navigate('/')
      onLogin && onLogin()
    }
  }, [isLogged, navigate, onLogin])

  const handleSubmit = evt => {
    evt.preventDefault()
    login({ username, password })
  }

  return (
    <>
      {isLoginLoading && <strong>Checking credentials...</strong>}
      {!isLoginLoading &&
        <form className='form' onSubmit={handleSubmit}>
          <label>
            username
            <input
              placeholder="username"
              onChange={e => setUsername(e.target.value)}
              value={username}
            />
          </label>

          <label>
            password
            <input
              type="password"
              placeholder="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </label>

          <button className='btn'>Login</button>
        </form>
      }
      {
        hasLoginError && <strong>Invalid credentials</strong>
      }
    </>
  )
}

export default Login
