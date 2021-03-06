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
import { GlobalStyle } from '../styles/reset'
import { ParallaxProvider } from 'react-scroll-parallax'
import TopElement from './Container/TopElement'

// import Footer from '../components/Footer/Footer'

const Layout = ({ children, title, hideMenu, displayArticlesMenu }) => {
  return (
    <ParallaxProvider>
      <GlobalStyle />
      <TopElement id="page-top" />
      <Header hideMenu={hideMenu} displayArticlesMenu={displayArticlesMenu} />
      <main>{children}</main>
      <Footer />
      <SEO title={title} />
    </ParallaxProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
