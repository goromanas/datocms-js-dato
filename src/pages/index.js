import React, { useState } from 'react'
import Layout from '../layouts/layout'
import Hero from '../components/Hero/Hero'
import Contact from '../components/Contact/Contact'
import Separator from '../components/core/Separator/Separator'
import { useHideInformation } from '../graphql/useHideInformation'
import Coaching from '../components/Coaching/Coaching'
import { useHomepage } from '../graphql/useHomepage'
import Services from '../components/Services/Services'
import About from '../components/About/About'
import Testimonials from '../components/Testimonials/Testimonials'

import 'antd/dist/antd.css'

export default function Index() {
  const [topic, setTopic] = useState('')
  const { itemsToHide } = useHideInformation()
  const { hideTestimonials } = itemsToHide
  const { homepage } = useHomepage()

  return (
    <Layout title="Pagrindinis" home seo={homepage.seo}>
      <Hero hero={homepage.hero[0]} />
      <Coaching id="koucingas" coaching={homepage.coaching[0]} />
      <About id="apie-mane" about={homepage.about[0]} />
      <Services
        id="paslaugos"
        setTopic={setTopic}
        title={homepage.servicesTitle}
        background={homepage.servicesBackground}
        services={homepage.services}
      />
      {!hideTestimonials && <Testimonials id="atsiliepimai" />}
      <Separator />
      <Contact id="kontaktai" topic={topic} setTopic={setTopic} />
    </Layout>
  )
}
