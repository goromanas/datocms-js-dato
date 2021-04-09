import React from 'react'
import { StyledPageWrapper } from './PageWrapper.style'

const PageWrapper = ({ children, className, id, marginTop }) => (
  <StyledPageWrapper className={className} id={id} marginTop={marginTop}>
    {children}
  </StyledPageWrapper>
)

export default PageWrapper
