import { Carousel as SliderLib } from 'antd'
import styled, { css } from 'styled-components'
import { default as ArrowLeftLib } from './Icons/ArrowLeft'
import { default as ArrowRightLib } from './Icons/ArrowRight'
import { media } from '../../styles/media'

const commonIconStyle = css`
  width: 55px;
  height: 55px;
  border: 1px solid ${({ theme }) => theme.colors.dark};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.1s ease-out border background-color;
  background-color: ${({ theme }) => theme.colors.background};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
  }

  ${media.sm`
    top: 30%;
  `}
`

export const Slider = styled(SliderLib)`
  .slick-slide {
    padding: 0;

    ${media.lg`
      padding: 0 2rem;
      margin: 0;
    `}
  }
`

export const SliderContainer = styled.div`
  width: 96%;
  overflow: hidden;
  height: 600px;
`

export const Wrapper = styled.div`
  height: 600px;
  margin: 0 1rem;
  position: relative;
`

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;
  letter-spacing: 6px;
  color: #06101a;
  margin-bottom: 2.5rem;
`

export const Controls = styled.div`
  display: flex;
  justify-content: center;
`

export const LeftIconContainer = styled.div`
  ${commonIconStyle}
  left: 0;
`
export const RightIconContainer = styled.div`
  ${commonIconStyle}
  right: 0;
`

export const ArrowLeft = styled(ArrowLeftLib)``
export const ArrowRight = styled(ArrowRightLib)``
