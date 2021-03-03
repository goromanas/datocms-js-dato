import React from 'react'
import { ButtonWrapper } from './Button.style'

const Button = ({ className, title, type, color, onClick }) => {
  return (
    <ButtonWrapper className={className} type={type} color={color} onClick={onClick}>
      {title}
    </ButtonWrapper>
  )
}
export default Button
