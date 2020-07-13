import React from 'react'
import { Button, Link } from './styles'

const ButtonComponent = ({ children, href, size = 'small' }) => href
  ? <Link size={size} href={href}>{children}</Link>
  : <Button size={size}>{children}</Button>

export default ButtonComponent
