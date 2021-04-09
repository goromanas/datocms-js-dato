import styled from 'styled-components'
import Img from 'gatsby-image'
import { media } from '../../styles/media'
import { default as ContainerLib } from '../../layouts/Container/Container'

export const AboutWrapper = styled.section`
  margin-top: 20vh;
  min-height: 70vh;

  ${media.md`
    height: 70vh;
  `}
`

export const Container = styled(ContainerLib)`
  box-shadow: 0px 6px 18px #0000001a;
`

export const ContentWrapper = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.white};
  padding: 0;
  align-items: center;
  flex-direction: column;

  ${media.md`
    padding: 0 4rem;
    flex-direction: row;
  `}
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
  padding: 0 1rem;
  p {
    font-family: proxima-nova, sans-serif;
    font-size: ${({ theme }) => theme.font.size};
    font-weight: 300;
    letter-spacing: 0.45px;
    line-height: 2rem;
    padding: 0.5rem 0;
  }
`

export const Image = styled(Img)`
  ${media.md`
    flex: 1;
  `}
`

export const TitleWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 2rem;
`
