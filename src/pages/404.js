import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Layout from '../layouts/layout'
import { use404 } from '../graphql/use404'
import Img from 'gatsby-image'
import Container from '../layouts/Container/Container'
import Button from '../components/core/Button/Button'

const StyledContainer = styled(Container)`
  height: 83.9vh;
  max-height: 100%;
  margin-top: 6rem;
  max-width: 30vw;
  text-align: center;
`
const StyledButton = styled(Button)`
  padding: 0.8rem 2rem;
  width: 300px;
  color: ${({ theme }) => theme.colors.white};
  margin: 0 auto;
`
const Title = styled.h1`
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 6px;
  font-size: 1.5rem;
  white-space: nowrap;
`

const Content = styled.div`
  margin: 2rem 0;
  font-size: 1.2rem;
`

const NotFoundPage = () => {
  const { data } = use404()
  return (
    <Layout title={data.title}>
      <StyledContainer>
        <Title>{data.title}</Title>
        <Img fluid={data.image.fluid} />

        <Content>{data.content}</Content>
        <Link to="/">
          <StyledButton title={data.link} />
        </Link>
      </StyledContainer>
    </Layout>
  )
}

export default NotFoundPage
