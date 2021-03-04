import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  padding-left: 2px;
  right: 0;
  color: ${colors.primary};
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border: 2px solid ${colors.primary};
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
`
