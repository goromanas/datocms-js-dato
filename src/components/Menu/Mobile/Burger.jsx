import React from 'react'
import { StyledBurger } from './Burger.style'
import { colors } from '../../../styles/colors'

const Burger = ({ className, onClick, menuOpen }) => (
  <StyledBurger className={className} onClick={onClick} open={menuOpen} colors={colors}>
    <div />
    <div />
    <div />
  </StyledBurger>
)

export default Burger
