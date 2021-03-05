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

export default function Index() {
  const [topic, setTopic] = useState('')
  const { itemsToHide } = useHideInformation()
  const { hideTestimonials } = itemsToHide

  return (
    <Layout title="Pagrindinis">
      <Hero />
      <About id="apie-mane" />
      <Services id="paslaugos" setTopic={setTopic} />
      {!hideTestimonials && <Testimonials id="atsiliepimai" />}
      <Separator />
      <Contact id="kontaktai" topic={topic} setTopic={setTopic} />
    </Layout>
  )
}
