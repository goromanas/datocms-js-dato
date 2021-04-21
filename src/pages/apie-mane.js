import Layout from '../layouts/layout'
import React from 'react'
import AboutPageElement from '../components/About/AboutPageElement/AboutPageElement'
import PageWrapper from '../layouts/PageWrapper/PageWrapper'
import { useAbout } from '../graphql/useAbout'

const AboutPage = () => {
  const { about } = useAbout()
  return (
    <Layout title="Apie mane" seo={about.seo}>
      {/* <PageWrapper marginBottom dark> */}
      <AboutPageElement about={about} />
      {/* </PageWrapper> */}
    </Layout>
  )
}
export default AboutPage
