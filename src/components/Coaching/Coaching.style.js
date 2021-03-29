import styled, { css } from 'styled-components'
import { colors } from '../../styles/colors'
import { media } from '../../styles/media'
import { default as ButtonLib } from '../core/Button/Button'

const commonContentStyle = css`
  font-family: proxima-nova, sans-serif;
  padding: 0 2rem;

  div {
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 0.45px;
    line-height: 2rem;
    padding-top: 1rem;
  }

  h3 {
    margin-top: 2rem;
  }
  ul {
    margin-top: 1rem;
    list-style: none;
    margin-left: 0;
    padding-left: 1em;
    text-indent: -1em;
  }

  li {
    font-size: 1rem;
    font-weight: 300;
    margin-left: 1rem;

    &::before {
      content: '>';
      color: ${colors.primary};
      font-weight: 500;
      margin-left: -1rem;
      font-size: 1.2rem;
      padding-right: 0.5rem;
    }
  }
`

export const CoachingWrapper = styled.section`
  background: #fff;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  top: 50px;
`

export const Content = styled.div`
  max-width: 550px;
  padding: 2.625rem 0 1rem;
`

export const Title = styled.h1`
  text-transform: uppercase;
  color: ${colors.primary};
  font-weight: 400;
  letter-spacing: 6px;
  text-align: center;
  margin-bottom: 1.75rem;
`

export const Description = styled.div`
  ${commonContentStyle}

  ${media.md`
    padding: 0;
  `}
`
export const ExpandableDescription = styled.div`
  ${commonContentStyle}
  height: ${({ expanded }) => (expanded ? 'initial' : '0px')};
  transform: ${({ expanded }) => (expanded ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: top;
  transition: all 0.1s ease-out;
`
export const Button = styled(ButtonLib)`
  font-size: 0.9rem;
  color: ${colors.primary};
  margin: 2rem auto;

  &:hover {
    color: ${colors.white};
  }
`
