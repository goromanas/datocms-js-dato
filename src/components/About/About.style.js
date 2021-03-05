import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const AboutWrapper = styled.section`
  background: #fff;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  top: -50px;
`

export const Content = styled.div`
  max-width: 550px;
  padding: 5.625rem 0 2rem;
`

export const Title = styled.h1`
  text-transform: uppercase;
  color: ${colors.primary};
  font-weight: 400;
  letter-spacing: 6px;
  text-align: center;
  margin-bottom: 3.75rem;
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
