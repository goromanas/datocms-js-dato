import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ height }) => height};
  transition: 0.1s ease-out height;
`

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  /* height: ${({ height }) => height}; */
  /* height: 120px; */
  z-index: 20;
  background: ${colors.background};
  box-shadow: 0px 6px 18px #0000001a;
  transition: 0.3s ease-out height;
`
