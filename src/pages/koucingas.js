import Layout from '../layouts/layout'
import React from 'react'
import Coaching from '../components/Coaching/Coaching'
import PageWrapper from '../layouts/PageWrapper/PageWrapper'

const CoachingPage = () => {
  return (
    <Layout title="Koučingas">
      <PageWrapper marginTop>
        <Coaching />
      </PageWrapper>
    </Layout>
  )
}
export default CoachingPage
