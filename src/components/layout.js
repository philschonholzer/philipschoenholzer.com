import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import Header from './header'
import { theme, GlobalStyle } from '../styles'
import Footer from './footer'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default Layout
