import React from 'react'
import { ButtonWrapper } from './Button.style'

const Button = ({ className, title, type }) => {
  return (
    <ButtonWrapper className={className} type={type}>
      {title}
    </ButtonWrapper>
  )
}
export default Button
