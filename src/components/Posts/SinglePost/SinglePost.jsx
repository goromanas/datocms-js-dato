import React, { useState } from 'react'
import { StructuredText } from 'react-datocms'
import Img from 'gatsby-image'
import { PostBody, Wrapper } from './SinglePost.style'
import Layout from '../../../layouts/layout'
import Container from '../../../layouts/Container/Container'
import PostTitle from './PostTitle/PostTitle'
import BackToTop from '../../core/BackToTop/BackToTop'
import { getCurrentPath } from '../../../libs'
import Contact from '../../Contact/Contact'

const SinglePost = ({ content, title, coverImage, date }) => {
  const [topic, setTopic] = useState('')
  return (
    <Layout displayArticlesMenu>
      <Wrapper>
        <Container>
          <PostTitle title={title} coverImage={coverImage} date={date} />
          <PostBody>
            <StructuredText
              data={content}
              renderBlock={({ record }) => {
                if (record.__typename === 'DatoCmsImageBlock') {
                  return <Img fluid={record.image.fluid} />
                }

                return (
                  <>
                    <p>Don't know how to render a block!</p>
                    <pre>{JSON.stringify(record, null, 2)}</pre>
                  </>
                )
              }}
            />
          </PostBody>
        </Container>
      </Wrapper>
      <Contact hideBackToTop setTopic={setTopic} topic={topic} />
      <BackToTop element={`${getCurrentPath()}#header`} />
    </Layout>
  )
}

export default SinglePost
