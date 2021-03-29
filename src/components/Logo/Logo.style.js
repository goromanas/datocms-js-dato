import styled from 'styled-components'
import { colors } from '../../styles/colors'
import Img from 'gatsby-image'

export const PageTitle = styled.h1`
  text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.4);
  font-family: 'proxima-nova', sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 6px;
  color: ${colors.dark};
`

export const Image = styled(Img)``
