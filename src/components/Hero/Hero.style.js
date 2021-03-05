import styled from 'styled-components'
import Img from 'gatsby-image'
import { default as ButtonLib } from '../core/Button/Button'

export const Image = styled(Img)`
  max-height: 80vh;
`

export const HeroWrapper = styled.section`
  position: relative;
`
export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
`

export const Title = styled.h1`
  color: #fff;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 2.5rem;
`

export const Subtitle = styled.h2`
  color: #fff;
  font-size: 2rem;
  font-weight: 300;
`

export const CTA = styled.div`
  margin-top: 4rem;
  display: flex;
`

export const Button = styled(ButtonLib)`
  box-shadow: 0px 6px 18px #0000001a;

  &:first-child {
    margin-right: 1rem;
  }
`
