import styled from 'styled-components'
import { media } from '../../styles/media'

export const StyledPageWrapper = styled.div`
  padding: 0 1rem;
  margin: 0 auto;
  margin-top: ${({ marginTop }) => (marginTop ? '50px' : 0)};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? '2rem' : 0)};
  min-height: 95vh;

  ${media.md`
    max-width: 1140px;
    padding: 0;
  `}
`
