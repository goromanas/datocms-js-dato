import styled from 'styled-components'
import { media } from '../../styles/media'
import { colors } from '../../styles/colors'
import Burger from './Mobile/Burger'

export const MenuWrapper = styled.div`
  display: flex;
  text-transform: uppercase;
  font-size: 0.9rem;
`
export const MenuItem = styled.div`
  padding: 0 1rem;
  letter-spacing: 2.7px;
  font-style: normal;

  &:last-child {
    padding: 0;
  }
`

export const MobileMenuItem = styled.div`
  padding: 0 1rem;
  letter-spacing: 2.7px;
  font-style: normal;
  margin-bottom: 1rem;
  font-size: 1.5rem;

  &:last-child {
    padding: 0;
  }
`

export const StyledBurger = styled(Burger)`
  position: absolute;
  top: 0;
  right: 1.5rem;
  display: flex;

  ${media.md`
    display: none;
  `}
`

export const MainWrapper = styled.div`
  display: none;

  ${media.md`
    display: flex;
  `}
`

export const MobileWrapper = styled.div`
  display: block;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: ${({ menuOpen }) => (menuOpen ? '' : 'translateX(110%)')};
  opacity: ${({ menuOpen }) => (menuOpen ? '1 ' : '0')};
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

  ${media.md`
      transform: translateX(110%);
      opacity: 0;
  `}
`
