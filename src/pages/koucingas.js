import Layout from '../layouts/layout'
import React from 'react'
import CoachingContent from '../components/Coaching/CoachingContent/CoachingContent'
import PageWrapper from '../layouts/PageWrapper/PageWrapper'
import { useCoaching } from '../graphql/useCoaching'

const CoachingPage = () => {
  const { coaching } = useCoaching()
  return (
    <Layout title="Koučingas">
      <PageWrapper marginTop>
        <CoachingContent coaching={coaching} />
      </PageWrapper>
    </Layout>
  )
}
export default CoachingPage
