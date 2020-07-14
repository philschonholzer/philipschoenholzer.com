import React from 'react'
import { Container, IconList, Section } from '../styles'
import styled from 'styled-components'
import { PopupText } from 'react-calendly'
import {
  FaTwitter,
  FaLinkedin,
  FaXbox,
  FaInstagram,
  FaFacebookSquare,
  FaReddit,
  FaSkype,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterStyle>
      <Container>
        <SocialSection>
          <SocialLinks>
            <a
              href="https://twitter.com/pschonholzer"
              aria-label="My Twitter page"
            >
              <FaTwitter focusable="false" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/philip-schoenholzer/"
              aria-label="My LinkedIn page"
            >
              <FaLinkedin focusable="false" aria-hidden="true" />
            </a>
            <a
              href="https://join.skype.com/invite/bBtv050ZE58m"
              aria-label="My Skype name"
            >
              <FaSkype focusable="false" aria-hidden="true" />
            </a>
            <a
              href="https://www.reddit.com/user/phischer_h"
              aria-label="My Reddit profile"
            >
              <FaReddit focusable="false" aria-hidden="true" />
            </a>
            <a
              href="http://live.xbox.com/Profile?Gamertag=CookieJus"
              aria-label="My Xbox gamer tag"
            >
              <FaXbox focusable="false" aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/phil_sch/"
              aria-label="My Instagram page"
            >
              <FaInstagram focusable="false" aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com/philip.schoenholzer"
              aria-label="My Facebook page"
            >
              <FaFacebookSquare focusable="false" aria-hidden="true" />
            </a>
          </SocialLinks>
        </SocialSection>
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
  background: ${p => p.theme.backgroundLight};
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
const SocialSection = styled(Section)`
  font-size: 1.9em;
  padding: 0.6em 0 1em;
  color: ${p => p.theme.textDark};

  @media (min-width: 640px) {
    font-size: 3em;
  }
`
const SocialLinks = styled(IconList)`
  & > * {
    margin: 0.15em 0.3em 0.15em 0.3em;
  }
`
