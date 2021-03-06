import React from 'react'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import { Wrapper } from './Header.style'
import Container from '../../layouts/Container/Container'

const Header = ({ hideMenu = false, displayArticlesMenu }) => {
  return (
    <header id="header">
      <Container>
        <Wrapper>
          <Logo />
          {!hideMenu && <Menu displayArticlesMenu={displayArticlesMenu} />}
        </Wrapper>
      </Container>
    </header>
  )
}

export default Header
