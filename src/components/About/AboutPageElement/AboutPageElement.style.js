import styled from 'styled-components'
import Img from 'gatsby-image'
import { media } from '../../../styles/media'
import { default as ContainerLib } from '../../../layouts/Container/Container'

export const AboutWrapper = styled.section`
  padding-top: 6rem;
  min-height: 70vh;
  padding-bottom: 4rem;
  /* background: ${({ theme }) => theme.colors.primary}; */

  ${media.md`
    min-height: 70vh;
  `}
`

export const Container = styled(ContainerLib)`
  box-shadow: 0px 6px 18px #0000001a;
  background: ${({ theme }) => theme.colors.white};
`

export const ContentWrapper = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.white};
  padding: 0;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: 3rem;

  ${media.md`
    padding: 0 4rem;
    flex-direction: row;
  `}
`
export const Intro = styled.div`
  display: flex;
  flex-direction: column-reverse;

  ${media.md`
    display: grid;
    grid-template-columns: 50% 50%;
  `}
`

export const IntroContent = styled.div`
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  ${media.md`
  flex: 2;
  `}
`

export const Title = styled.h2`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 400;
  letter-spacing: 6px;
  text-align: center;
  margin-bottom: 1.75rem;
`

export const Description = styled.div`
  padding: 0 1rem 2rem;
  p {
    font-family: proxima-nova, sans-serif;
    font-size: ${({ theme }) => theme.font.size};
    font-weight: 300;
    letter-spacing: 0.45px;
    line-height: 2rem;
    padding: 0.5rem 0;
  }

  strong {
    font-weight: 500;
  }

  ${media.md`
    padding: 0 5rem 2rem;
  `}
`

export const Image = styled(Img)`
  margin-top: 4rem;

  ${media.md`
    flex: 1;
    margin: 0;
  `}
`

export const TitleWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 2rem;
`
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:first-child {
    margin-bottom: 2rem;
  }

  ${media.md`
    display: grid;
    grid-template-columns: 10% 90%;
  `}
`

export const Icon = styled(Img)`
  margin: 2rem 0;

  ${media.md`
    margin-top: 0.5rem 0 0 0;
  `}
`
