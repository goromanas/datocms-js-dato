import styled from 'styled-components'
import Img from 'gatsby-image'
import { colors } from '../../styles/colors'
import { default as ContainerLib } from '../../layouts/Container/Container'

export const AboutWrapper = styled.section`
  margin-top: 20vh;
  height: 70vh;
`

export const Container = styled(ContainerLib)`
  box-shadow: 0px 6px 18px #0000001a;
`

export const ContentWrapper = styled.div`
  display: flex;
  background: #fff;
  padding: 0 2rem;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`

export const Title = styled.h2`
  text-transform: uppercase;
  color: ${colors.primary};
  font-weight: 400;
  letter-spacing: 6px;
  text-align: center;
  margin-bottom: 1.75rem;
`

export const Description = styled.div`
  p {
    font-family: proxima-nova, sans-serif;
    font-weight: 300;
    letter-spacing: 0.45px;
    line-height: 2rem;
    padding: 1rem 0;
  }
`

export const Image = styled(Img)`
  flex: 1;
`

export const TitleWrapper = styled.div`
  background: #fff;
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 2rem;
`
