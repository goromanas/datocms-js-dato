import Layout from '../layouts/layout'
import React from 'react'
import About from '../components/About/About'
import PageWrapper from '../layouts/PageWrapper/PageWrapper'
import { useAbout } from '../graphql/useAbout'

const AboutPage = () => {
  const { about } = useAbout()
  return (
    <Layout title="Apie mane">
      <PageWrapper marginBottom>
        <About about={about} />
      </PageWrapper>
    </Layout>
  )
}
export default AboutPage
