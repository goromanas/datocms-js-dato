/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { GlobalStyle } from '../styles/reset'
import { ParallaxProvider } from 'react-scroll-parallax'
import TopElement from './Container/TopElement'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { useSeo } from '../graphql/useSeo'
import { useTheme } from '../graphql/useTheme'
import { ThemeProvider } from 'styled-components'
import { formatFontSize } from '../libs'

const Layout = ({ children, hideMenu, displayArticlesMenu, slimHeader, home, seo }) => {
  const { site } = useSeo()
  const { theme } = useTheme()
  let localSeo = { ...seo }

  useEffect(() => {
    if ('tags' in localSeo && !localSeo.tags[0].content.includes(site.globalSeo.siteName)) {
      localSeo.tags[0].content = `${localSeo.tags[0].content} | ${site.globalSeo.siteName}`
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!localSeo?.tags) {
    const title = `${site.globalSeo.siteName}`
    localSeo = { tags: [{ content: title, tagName: 'title' }] }
  }

  const localTheme = {
    colors: {
      primary: theme.primary.hex,
      dark: theme.dark.hex,
      gray: '#c0c3c5',
      background: theme.background.hex,
      white: '#fff',
      quoteColor: '#bfc3c5',
    },
    font: {
      size: formatFontSize(theme.contentFontSizePx),
    },
  }
  return (
    <ParallaxProvider>
      <HelmetDatoCms favicon={site.faviconMetaTags} seo={localSeo} />
      <ThemeProvider theme={localTheme}>
        <GlobalStyle />
        <TopElement id="page-top" />
        <Header
          hideMenu={hideMenu}
          displayArticlesMenu={displayArticlesMenu}
          slimHeader={slimHeader}
          home={home}
        />
        <main>{children}</main>
        <Footer />
        {/* <SEO title={title} site={site} /> */}
      </ThemeProvider>
    </ParallaxProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
