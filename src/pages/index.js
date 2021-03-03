import React from 'react'
import Layout from '../layouts/layout'
import { GlobalStyle } from '../styles/reset'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Services from '../components/Services/Services'

export default function Index() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Hero />
        <About />
        <Services />
      </Layout>
    </>
  )
}
