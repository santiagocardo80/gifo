import React, { useState } from "react"
import { useForm } from 'react-hook-form'

import registerService from "../../services/register"

export default function Register() {
  const { handleSubmit, register, errors } = useForm()

  const [registered, setRegistered] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = values => {
    setIsSubmitting(true)
    registerService(values)
      .then(() => {
        setRegistered(true)
        setIsSubmitting(false)
      })
  }

  if (registered) {
    return <h4>
      You've been successfully registered ✅!
    </h4>
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <input
          className={errors.username ? 'error' : ''}
          name="username"
          placeholder="Username"
          ref={register({ required: 'username is required' })}
        />
        {errors.username && <small>username is required.</small>}

        <input
          className={errors.password ? 'error' : ''}
          name="password"
          placeholder="Password"
          ref={register({ required: 'password is required' })}
          type='password'
        />
        {errors.password && <small>password is required.</small>}

        <button className="btn" disabled={isSubmitting}>
          Sign Up
        </button>
      </form>
    </>
  )
}