import React from 'react'
import { StyledPageWrapper } from './PageWrapper.style'

const PageWrapper = ({ children, className, id, marginTop, marginBottom }) => (
  <StyledPageWrapper
    className={className}
    id={id}
    marginTop={marginTop}
    marginBottom={marginBottom}
  >
    {children}
  </StyledPageWrapper>
)

export default PageWrapper
