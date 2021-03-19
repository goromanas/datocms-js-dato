import styled from 'styled-components'
import Img from 'gatsby-image'
import { default as ButtonLib } from '../core/Button/Button'
import { colors } from '../../styles/colors'

export const Image = styled(Img)`
  margin: 0 2rem;
`

export const HeroWrapper = styled.section`
  position: relative;
  top: 35px;
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
  letter-spacing: 6px;
  font-size: 2.5rem;
`

export const Subtitle = styled.h2`
  color: ${colors.primary};
  font-size: 1.5rem;
  font-weight: 100;
  font-family: 'proxima-nova-light', sans-serif;
`

export const CTA = styled.div`
  margin-top: 4rem;
  display: flex;
`

export const Button = styled(ButtonLib)`
  box-shadow: 0px 6px 18px #0000001a;
  letter-spacing: 2.7px;

  &:first-child {
    margin-right: 1rem;
  }
`

export const Description = styled.div`
  margin-top: 2rem;
  font-size: 1.125rem;
  color: ${colors.white};
  max-width: 500px;
  font-family: 'proxima-nova';
  font-weight: 300;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
  bottom: 0;
  left: 25%;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
`

export const ImageWrapper = styled.div`
  position: relative;
`
