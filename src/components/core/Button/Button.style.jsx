import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const ButtonWrapper = styled.div`
  background-color: ${({ type }) => (type === 'outline' ? 'transparent' : colors.primary)};
  color: ${({ type, color }) => (type === 'outline' || color ? '#fff' : colors.dark)};
  border: ${({ type }) => (type === 'outline' ? `solid 1px ${colors.primary}` : 'none')};
  width: 180px;
  height: 55px;
  font-weight: 400;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  cursor: pointer;
  position: relative;
  transition: 0.2s ease-out all;

  &:hover {
    filter: brightness(1.1);
    background-color: ${colors.primary};
  }
`
