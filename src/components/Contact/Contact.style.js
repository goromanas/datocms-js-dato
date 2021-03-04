import styled from 'styled-components'
import Img from 'gatsby-image'

export const Image = styled(Img)`
  width: 60%;
  max-height: 650px;
`
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  min-height: 100vh;
`

export const ContactFormWrapper = styled.div`
  background: #fff;
  height: 600px;
  width: 612px;
  position: absolute;
  left: 0;
  top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h2`
  letter-spacing: 6px;
  color: #06101a;
  text-transform: uppercase;
  font-size: 2.5rem;
  font-weight: 400;
`

export const SocialWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  padding: 1rem 2rem;
  margin-bottom: 3rem;
`

export const ContactItem = styled.div`
  font-family: proxima-nova, sans-serif;
  font-size: 1.1.rem;
  color: #06101a;
  letter-spacing: 0.72px;
  font-weight: 300;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
