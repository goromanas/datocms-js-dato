import styled from 'styled-components'
import { media } from '../../styles/media'

export const StyledContainer = styled.div`
  padding: 0 1rem;
  margin: 0 auto;

  ${media.md`
    max-width: 1140px;
    padding: 0;
  `}
`
