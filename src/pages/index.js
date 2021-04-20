import React, { useState } from 'react'
import Layout from '../layouts/layout'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Testimonials from '../components/Testimonials/Testimonials'
import Contact from '../components/Contact/Contact'
import Separator from '../components/core/Separator/Separator'
import 'antd/dist/antd.css'
import { useHideInformation } from '../graphql/useHideInformation'
import Coaching from '../components/Coaching/Coaching'
import { useHomepage } from '../graphql/useHomepage'

export default function Index() {
  const [topic, setTopic] = useState('')
  const { itemsToHide } = useHideInformation()
  const { hideTestimonials } = itemsToHide
  const { homepage } = useHomepage()
  console.log(homepage)

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
