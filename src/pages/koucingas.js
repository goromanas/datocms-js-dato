import Layout from '../layouts/layout'
import React from 'react'
import CoachingContent from '../components/Coaching/CoachingContent/CoachingContent'
import PageWrapper from '../layouts/PageWrapper/PageWrapper'
import { useCoaching } from '../graphql/useCoaching'
import Container from '../layouts/Container/Container'

const CoachingPage = () => {
  const { coaching } = useCoaching()
  return (
    <Layout title="Koučingas" seo={coaching.seo}>
      <PageWrapper marginTop>
        <Container>
          <CoachingContent coaching={coaching} />
        </Container>
      </PageWrapper>
    </Layout>
  )
}
export default CoachingPage
