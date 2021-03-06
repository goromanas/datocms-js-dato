import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const Wrapper = styled.div`
  margin-top: 3rem;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  align-items: center;
  transition: transform 0.3s ease-out;
  color: ${({ active }) => (active ? colors.dark : '#acacac')};
  transform: ${({ active }) => active && 'scale(1.1);'};
`
export const Content = styled.div`
  margin: 1.8rem 0;
  font-weight: 300;
  font-family: proxima-nova, sans-serif;
`

export const Author = styled.div`
  text-transform: uppercase;
`
