import React, { useState } from 'react'
import Layout from '../layouts/layout'
import { GlobalStyle } from '../styles/reset'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Testimonials from '../components/Testimonials/Testimonials'
import Contact from '../components/Contact/Contact'
import Separator from '../components/core/Separator/Separator'
import 'antd/dist/antd.css'

export default function Index() {
  const [topic, setTopic] = useState('')
  return (
    <>
      <GlobalStyle />
      <Layout title="Pagrindinis">
        <Hero />
        <About id="apie-mane" />
        <Services id="paslaugos" setTopic={setTopic} />
        <Testimonials id="atsiliepimai" />
        <Separator />
        <Contact id="kontaktai" topic={topic} setTopic={setTopic} />
      </Layout>
    </>
  )
}
