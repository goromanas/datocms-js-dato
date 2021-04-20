import styled from 'styled-components'
import Img from 'gatsby-image'

export const PageTitle = styled.h1`
  text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.4);
  font-family: proxima-nova, sans-serif;
  font-size: 1.5rem;
  font-weight: 100;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.colors.dark};
  text-transform: lowercase;
`
export const StyledDot = styled.span`
  text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.4);
  font-family: proxima-nova, sans-serif;
  font-size: 1.5rem;
  font-weight: 100;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
`

export const Image = styled(Img)``

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`
