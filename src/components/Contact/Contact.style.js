import styled from 'styled-components'
import Img from 'gatsby-image'
import { media } from '../../styles/media'

export const Image = styled(Img)`
  width: 100%;

  ${media.md`
    width: 850px;
    max-height: 650px;
  `}
`
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  min-height: 105vh;

  ${media.md`
    min-height: 88vh;
  `}
`

export const ContactFormWrapper = styled.div`
  background: #fff;
  width: 100%;
  position: static;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  margin-bottom: 2rem;

  ${media.md`
    position: absolute;
    width: 612px;
    height: 600px;
    left: 0;
    padding-bottom: 0;
    margin-bottom: 0;
  `}
`

export const Title = styled.h2`
  letter-spacing: 6px;
  color: #06101a;
  text-transform: uppercase;
  font-size: 2.5rem;
  font-weight: 400;
`

export const SocialWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  text-align: center;
  padding: 1rem 2rem;
  margin-bottom: 2rem;

  ${media.md`
    grid-template-columns: 50% 50%;
    margin-bottom: 3rem;
  `}
`

export const ContactItem = styled.div`
  font-family: proxima-nova, sans-serif;
  font-size: 1.1.rem;
  color: #06101a;
  letter-spacing: 0.72px;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  ${media.md`
    margin-bottom: 0;
  `}
`

export const SocialLink = styled.div`
  padding-left: 0.5rem;
`
