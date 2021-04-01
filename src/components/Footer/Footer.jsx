import React from 'react'
import { useFooter } from '../../graphql/useFooter'
import { FooterWrapper } from './Footer.style'

const Footer = () => {
  const { footer } = useFooter()
  return (
    <FooterWrapper>
      © {new Date().getFullYear()} {footer.title}
    </FooterWrapper>
  )
}

export default Footer
