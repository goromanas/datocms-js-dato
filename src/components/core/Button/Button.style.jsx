import styled from 'styled-components'
import { media } from '../../../styles/media'

export const ButtonWrapper = styled.button`
  background-color: ${({ type, theme }) =>
    type === 'outline' ? 'transparent' : theme.colors.primary};
  color: ${({ type, color, theme }) => (type === 'outline' || color ? '#fff' : theme.colors.dark)};
  border: ${({ type, theme }) =>
    type === 'outline' ? `solid 1px ${theme.colors.primary}` : 'none'};
  padding: 0.8rem 1.2rem;
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
    background-color: ${({ theme }) => theme.colors.primary};
  }

  ${media.md`
    width: 180px;
    height: 55px;
  `}
`
