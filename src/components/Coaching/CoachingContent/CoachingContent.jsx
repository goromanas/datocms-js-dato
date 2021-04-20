import React from 'react'
import { StructuredText } from 'react-datocms'
import { SingleTitle, PageContent } from '../Coaching.style'
import Img from 'gatsby-image'

const CoachingContent = ({ coaching }) => {
  return (
    <PageContent>
      <SingleTitle>{coaching.title}</SingleTitle>
      <StructuredText
        data={coaching.content}
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
    </PageContent>
  )
}

export default CoachingContent
