import { Link } from 'gatsby'
import React from 'react'
import { Container } from '../styles'
import styled from 'styled-components'

const Header = ({ siteTitle = '' }) => (
  <HeaderStyle>
    <Container>
      <div>
        <Link to="/">Philip Schönholzer</Link>
      </div>
    </Container>
  </HeaderStyle>
)

export default Header

const HeaderStyle = styled.header`
  position: sticky;
  top: 0;
  padding: 1em 0;
  background: ${p => p.theme.primary};
  z-index: 1;
`
