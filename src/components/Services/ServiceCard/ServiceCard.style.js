import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const Card = styled.div`
  width: 350px;
  height: 570px;
  box-shadow: 0px 6px 18px #0000001a;
  padding: 2.75rem 3.125rem;
  background: #fff;
  display: grid;
  grid-template-rows: 25% 15% 50% 10%;
  text-align: center;
`

export const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2.7px;
  text-align: center;
`

export const Price = styled.div`
  letter-spacing: 6px;
  color: ${colors.primary};
  font-size: 2.5rem;
  font-weight: 350;
  text-align: center;
`
export const PriceContainer = styled.div`
  position: relative;
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`
export const Description = styled.div`
  ul {
    list-style-type: none;
  }

  li {
    padding: 0.5rem 0;
  }

  center {
    margin-bottom: 1rem;
  }

  img {
    width: 35px;
    height: auto;
  }
`

export const CTA = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`

export const AdditionalInfo = styled.div`
  color: ${colors.gray};
`
