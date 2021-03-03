import React from 'react'
import { StyledContainer } from './Container.style'

const Container = ({ children, className, id }) => (
  <StyledContainer className={className} id={id}>
    {children}
  </StyledContainer>
)

export default Container
