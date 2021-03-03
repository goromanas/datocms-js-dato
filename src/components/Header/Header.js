import React from 'react'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import { Wrapper } from './Header.style'
import Container from '../../layouts/Container/Container'

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <Menu />
      </Wrapper>
    </Container>
  )
}

export default Header
