import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const IconContainer = styled.div`
  margin-bottom: 3rem;
  width: 55px;
  height: 55px;
  border: 1px solid ${colors.dark};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    margin-right: 1rem;
  }

  &:hover {
    border: 1px solid ${colors.primary};
    background-color: ${colors.primary};
  }
`
