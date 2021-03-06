import React from 'react'
import Container from '../layouts/Container/Container'
import Layout from '../layouts/layout'
import Posts from '../components/Posts/Posts'

export default function Articles() {
  return (
    <>
      <Layout title="Straipsniai" displayArticlesMenu slimHeader>
        <Container>
          <Posts />
        </Container>
      </Layout>
    </>
  )
}
