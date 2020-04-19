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
            <a href="https://twitter.com/pschonholzer">
              <FaTwitter />
              <span class="visually-hidden">Twitter</span>
            </a>
            <a href="https://www.linkedin.com/in/philip-schoenholzer/">
              <FaLinkedin />
              <span class="visually-hidden">LinkedIn</span>
            </a>
            <a href="https://join.skype.com/invite/bBtv050ZE58m">
              <FaSkype />
              <span class="visually-hidden">Skype</span>
            </a>
            <a href="https://www.reddit.com/user/phischer_h">
              <FaReddit />
              <span class="visually-hidden">Reddit</span>
            </a>
            <a href="http://live.xbox.com/Profile?Gamertag=CookieJus">
              <FaXbox />
              <span class="visually-hidden">Xbox</span>
            </a>
            <a href="https://www.instagram.com/phil_sch/">
              <FaInstagram />
              <span class="visually-hidden">Instagram</span>
            </a>
            <a href="https://www.facebook.com/philip.schoenholzer">
              <FaFacebookSquare />
              <span class="visually-hidden">Facebook</span>
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
const SocialSection = styled(Section)`
  font-size: 1.9em;
  padding: 0.6em 0 1em;

  @media (min-width: 640px) {
    font-size: 3em;
  }
`
const SocialLinks = styled(IconList)`
  .visually-hidden {
    display: block;
    font-size: 6px;
    visibility: hidden;
  }
  & > * {
    margin: 0.15em 0.3em -0.2em 0.3em;
  }
`
