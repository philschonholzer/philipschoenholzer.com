import { Link } from 'gatsby'
import React from 'react'
import { Container } from '../styles'
import styled from 'styled-components'

const Header = ({ siteTitle = '' }) => (
  <HeaderStyle>
    <Container>
      <div>
        <Link to="/">
          Philip
          <br />
          Schönholzer
        </Link>
      </div>
    </Container>
  </HeaderStyle>
)

export default Header

const HeaderStyle = styled.header`
  padding: 1em 0;
  background: ${p => p.theme.primary};
`
