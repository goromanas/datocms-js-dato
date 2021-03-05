/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header/Header'
import SEO from '../seo'
import Footer from '../components/Footer/Footer'

// import Footer from '../components/Footer/Footer'

const Layout = ({ children, title }) => {
  return (
    <>
      <Header />

      <main>{children}</main>
      {/* <Footer scrollToTop={scrollToTop} /> */}

      <Footer />
      <SEO title={title} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
