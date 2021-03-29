import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const Wrapper = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 400px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  align-items: center;
  transition: transform 0.3s ease-out;
  color: ${({ active }) => (active ? colors.dark : '#acacac')};
  transform: ${({ active }) => active && 'scale(1.05);'};
`
export const Content = styled.div`
  margin: 1.8rem 0;
  font-weight: 300;
  font-family: proxima-nova, sans-serif;
`

export const Author = styled.div`
  font-weight: 500;
`
