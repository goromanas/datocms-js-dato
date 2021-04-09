import Layout from '../layouts/layout'
import React from 'react'
import About from '../components/About/About'
import PageWrapper from '../layouts/PageWrapper/PageWrapper'

const AboutPage = () => {
  return (
    <Layout title="Apie mane">
      <PageWrapper>
        <About />
      </PageWrapper>
    </Layout>
  )
}
export default AboutPage
