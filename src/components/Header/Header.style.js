import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  transition: 0.1s ease-out height;
  position: relative;
`

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 6px 18px #0000001a;
  transition: 0.3s ease-out height;
`
