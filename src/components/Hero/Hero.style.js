import styled from 'styled-components'
import Img from 'gatsby-image'

export const Image = styled(Img)`
  max-height: 80vh;
`

export const HeroWrapper = styled.div`
  position: relative;
`
export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translateY(-50%);
`

export const Title = styled.h1`
  color: #fff;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 2.5rem;
`

export const Subtitle = styled.h2`
  color: #bba167;
  font-weight: 300;
`

export const CTA = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
`
