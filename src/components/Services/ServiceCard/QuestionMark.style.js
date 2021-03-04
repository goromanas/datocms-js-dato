import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  padding-left: 2px;
  right: 0;
  color: ${colors.gray};
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  border: 1px solid ${colors.gray};
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
`
