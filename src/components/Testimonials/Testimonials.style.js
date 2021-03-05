import { Carousel as SliderLib } from 'antd'
import styled from 'styled-components'
import { colors } from '../../styles/colors'
import { default as ArrowLeftLib } from './Icons/ArrowLeft'
import { default as ArrowRightLib } from './Icons/ArrowRight'

export const Slider = styled(SliderLib)`
  overflow-y: hidden;
`

export const SliderContainer = styled.div`
  height: 400px;
  width: 100vw;
  overflow-y: hidden;
`

export const Wrapper = styled.div`
  height: 500px;
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

export const IconContainer = styled.div`
  width: 55px;
  height: 55px;
  border: 1px solid ${colors.dark};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.1s ease-out border background-color;

  &:first-child {
    margin-right: 1rem;
  }

  &:hover {
    border: 1px solid ${colors.primary};
    background-color: ${colors.primary};
  }
`

export const ArrowLeft = styled(ArrowLeftLib)``
export const ArrowRight = styled(ArrowRightLib)``
