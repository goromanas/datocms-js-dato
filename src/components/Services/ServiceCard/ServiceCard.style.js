import styled, { css } from 'styled-components'
import { media } from '../../../styles/media'

const horizontalCard = css`
  width: 100%;
  min-height: 100%;
  height: auto;
  box-shadow: 0px 6px 18px #0000001a;
  padding: 2.75rem 3.125rem;
  background: #fff;
  margin-bottom: 2rem;

  ${media.lg`
    min-height: 400px;
    height: initial;
    margin-bottom: ${({ horizontal }) => (horizontal ? '2rem' : '0')};
  `}
`
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  text-align: center;
  margin-bottom: 2rem;
  height: auto;

  ${media.md`
    display: grid;
    grid-template-columns: 30% 70%;
    height: 200px;
  `}
`

export const Card = styled.div`
  width: 350px;
  height: 570px;
  box-shadow: 0px 6px 18px #0000001a;
  padding: 2.75rem 3.125rem;
  background: #fff;
  display: grid;
  grid-template-rows: 25% 15% 50% 10%;
  text-align: center;
  margin-bottom: 2rem;

  ${media.lg`
    margin-bottom: ${({ horizontal }) => (horizontal ? '2rem' : '0')};
  `}

  ${({ horizontal }) => horizontal && horizontalCard}
`

export const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2.7px;
  text-align: center;
  margin-bottom: ${({ horizontal }) => horizontal && '3rem'};
`

export const Price = styled.div`
  letter-spacing: 6px;
  color: ${({ theme }) => theme.colors.primary};
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
  justify-content: flex-start;
  height: 100%;
`
export const Description = styled.div`
  margin-top: 2rem;
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
  margin: 2rem 0;
  position: relative;
  top: 2rem;
  flex-direction: column-reverse;
  align-items: center;
`

export const AdditionalInfo = styled.div`
  color: ${({ theme, bigger }) => (bigger ? theme.colors.dark : theme.colors.gray)};
  font-size: ${({ bigger }) => (bigger ? '1.06rem' : 'initial')};
  text-align: ${({ bigger }) => (bigger ? 'left' : 'center')};
`
export const LeftColumn = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  padding-bottom: 2rem;

  ${media.md`
    border: 0;
    border-right: 1px solid ${({ theme }) => theme.colors.primary};
    margin: 0;
    padding: 0;
    margin-right: 2rem;
    padding-right: 2rem;
  `}
`
export const DescriptionWrapper = styled.div`
  font-size: 1.05rem;
  text-align: left;

  mark {
    padding: 0;
    color: #33333395;
    background: transparent;
    font-size: 0.875rem;
  }
`
export const RightColumn = styled.div``
