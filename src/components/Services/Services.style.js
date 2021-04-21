import styled from 'styled-components'
import { default as BackgroundImageLib } from 'gatsby-background-image'
import { media } from '../../styles/media'

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -115px;

  ${media.lg`
    flex-direction: row;
    align-items: stretch;
  `}
`

export const CardWrapperHorizontal = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -115px;

  ${media.lg`
    flex-direction: column;
    align-items: stretch;
  `}
`

export const ServiceSection = styled.section`
  margin-top: ${({ horizontal }) => (horizontal ? '0px' : '14.25rem')};
`

export const BackgroundImage = styled(BackgroundImageLib)`
  position: absolute;
  left: 0;
  right: 0;
  height: 671px;
  background-size: cover;
  background-position: 50% 50%;
  background-attachment: ${({ horizontal }) => (horizontal ? 'fixed' : 'scroll')};
`

export const Title = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 2.5rem;
  letter-spacing: 6px;
  font-weight: 400;
`
