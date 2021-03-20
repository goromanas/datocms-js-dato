import React, { useState, useEffect } from 'react'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import { Wrapper, HeaderContainer } from './Header.style'
import Container from '../../layouts/Container/Container'
import { isMobileDevice } from '../../libs'

const Header = ({ hideMenu = false, displayArticlesMenu, slimHeader }) => {
  const [scrolled, setScrolled] = useState(false)
  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 50 && !isMobileDevice()) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })
  let headerHeight
  if (slimHeader) {
    headerHeight = '40px'
  } else {
    headerHeight = scrolled ? '40px' : '50px'
  }

  return (
    <HeaderContainer id="header" height={headerHeight}>
      <Container>
        <Wrapper height={headerHeight}>
          <Logo />
          {!hideMenu && <Menu displayArticlesMenu={displayArticlesMenu} />}
        </Wrapper>
      </Container>
    </HeaderContainer>
  )
}

export default Header
