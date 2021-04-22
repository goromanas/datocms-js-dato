import styled from 'styled-components'
import Img from 'gatsby-image'
import { default as ButtonLib } from '../core/Button/Button'
import { media } from '../../styles/media'

export const Image = styled(Img)`
  min-height: 400px;
  max-height: 800px;

  ${media.md`
    min-height: initial;
    margin: 0 2rem;
  `}
`

export const HeroWrapper = styled.section`
  position: relative;

  ${media.md`
    top: 35px;
  `}
`
export const Content = styled.div`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;

  ${media.md`
    left: 50%;
    top: 55%;
    transform: translate(0, -50%);
  `}
`

export const Title = styled.h1`
  color: #fff;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 6px;
  font-size: 1.5rem;
  white-space: nowrap;

  ${media.md`
    font-size: 2.5rem;
    white-space: normal;
  `}
`

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.1rem;
  font-weight: 100;
  font-family: 'proxima-nova-light', sans-serif;

  ${media.md`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
  `}
`

export const CTA = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${media.md`
    flex-direction: row;
    margin-top: 4rem;
  `}
`

export const Button = styled(ButtonLib)`
  box-shadow: 0px 6px 18px #0000001a;
  letter-spacing: 2.7px;
  font-size: 0.8rem;

  &:first-child {
    margin-right: 1rem;
  }
`

export const Description = styled.div`
  margin-top: 2rem;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.white};
  max-width: 500px;
  font-family: 'proxima-nova';
  font-weight: 300;
  display: none;

  ${media.md`
    display: block;
  `}
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));

  ${media.md`
    right: 2rem;
    left: 25%;
    background: linear-gradient(to left, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
  `}
`

export const ImageWrapper = styled.div`
  position: relative;
`
