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
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { useSeo } from '../graphql/useSeo'

// import Footer from '../components/Footer/Footer'

const Layout = ({ children, title, hideMenu, displayArticlesMenu, slimHeader }) => {
  const { site } = useSeo()
  return (
    <ParallaxProvider>
      <HelmetDatoCms favicon={site.faviconMetaTags} />
      <GlobalStyle />
      <TopElement id="page-top" />
      <Header
        hideMenu={hideMenu}
        displayArticlesMenu={displayArticlesMenu}
        slimHeader={slimHeader}
      />
      <main>{children}</main>
      <Footer />
      <SEO title={title} site={site} />
    </ParallaxProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
