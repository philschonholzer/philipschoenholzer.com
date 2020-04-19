import React from 'react'
import { Container } from '../styles'
import styled from 'styled-components'
import { PopupText } from 'react-calendly'

const Footer = () => {
  return (
    <FooterStyle>
      <Container>
        <Row>
          <p>© 1978 - {new Date().getFullYear()}, Philip Schönholzer</p>
          <CalendlyButton>
            <PopupText
              text="Termin mit mir vereinbaren"
              url="https://calendly.com/philip-schoenholzer/30min"
            />
          </CalendlyButton>
        </Row>
      </Container>
    </FooterStyle>
  )
}

export default Footer

const FooterStyle = styled.footer`
  padding: 1em 0;
  background: hsl(0, 0%, 30%);
`
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  margin: -0.5em;

  & > * {
    margin: 0.5em;
  }
`
const CalendlyButton = styled.div`
  font-size: 0.8em;
  a {
    display: block;
    padding: 0.5em 1.5em;
    border: 2px solid ${p => p.theme.primaryLight};
    border-radius: 4px;
  }
`
