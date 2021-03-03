import React from 'react'
import Layout from '../layouts/layout'
import { GlobalStyle } from '../styles/reset'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Testimonials from '../components/Testimonials/Testimonials'

export default function Index() {
  return (
    <>
      <GlobalStyle />
      <Layout title="Pagrindinis">
        <Hero />
        <About />
        <Services />
        <Testimonials />
      </Layout>
    </>
  )
}
