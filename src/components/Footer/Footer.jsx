import React from 'react'
import { FooterWrapper } from './Footer.style'

const Footer = () => {
  return <FooterWrapper> © {new Date().getFullYear()} All rights reserved.</FooterWrapper>
}

export default Footer
