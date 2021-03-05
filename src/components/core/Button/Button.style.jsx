import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const ButtonWrapper = styled.div`
  /* padding: 0.5rem 1rem; */
  background-color: ${({ type }) => (type === 'outline' ? 'inherit' : colors.primary)};
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
  transition: 0.2s ease-out filter;

  &:hover {
    filter: brightness(1.1);
  }
`
