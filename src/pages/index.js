import React from 'react'
import Typewriter from 'typewriter-effect'
import styled from 'styled-components'
import {
  FaTwitter,
  FaLinkedin,
  FaXbox,
  FaInstagram,
  FaFacebookSquare,
  FaReddit,
  FaSkype,
  FaHome,
  FaHeart,
} from 'react-icons/fa'
import { MdWork } from 'react-icons/md'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container, Section } from '../styles'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Section>
          <HeroTitle>
            Stets auf der Suche
            <Typewriter
              options={{
                strings: [
                  'nach Einfachheit',
                  'nach Schönheit',
                  'nach Klarheit',
                  'nach Sinnhaftigkeit',
                  'nach der Zukunft',
                ],
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 10,
              }}
            />
          </HeroTitle>
        </Section>
        <CopySection>
          <p css="padding-top: 0;">
            Ich bin stets auf der Suche. Ich suche nach Antworten zu den grossen
            Fragen in kleinen Dingen. Mich interessieren besonders Geschichte,
            Technologie, Minimalismus und Video-Games.
          </p>
          <p>
            Geschichte gibt mir die Möglichkeit zu sehen wo die Reise hingehen
            könnte. Technologie hat immensen Einfluss auf unser aller jetziges
            und zukünftiges Leben. Minimalismus fordert mich "andere" Ziele im
            Leben zu haben und Dankbarkeit zu pflegen. Video-Games sind meine
            "guilty pleasure".
          </p>
        </CopySection>
        <Section>
          <ContactLinks>
            <div css="margin: 0.5em !important;">
              <FaHeart />
              Verheiratet
            </div>
            <div>
              <FaHome />
              Luzern
            </div>
            <a href="https://apptiva.ch">
              <MdWork />
              Apptiva
            </a>
          </ContactLinks>
        </Section>
        <SocialSection>
          <SocialLinks>
            <a href="https://twitter.com/pschonholzer">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/philip-schoenholzer/">
              <FaLinkedin />
            </a>
            <a href="https://join.skype.com/invite/bBtv050ZE58m">
              <FaSkype />
            </a>
            <a href="https://www.reddit.com/user/phischer_h">
              <FaReddit />
            </a>
            <a href="http://live.xbox.com/Profile?Gamertag=CookieJus">
              <FaXbox />
            </a>
            <a href="https://www.instagram.com/phil_sch/">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/philip.schoenholzer">
              <FaFacebookSquare />
            </a>
          </SocialLinks>
        </SocialSection>
      </Container>
    </Layout>
  )
}

export default IndexPage

const HeroTitle = styled.h1`
  font-size: 2em;
  line-height: 1.15;
  margin-bottom: 0;
  padding: 1em 0;
  color: ${p => p.theme.primaryLight};

  @media (min-width: 640px) {
    font-size: 3em;
  }

  .Typewriter {
    color: white;
    .Typewriter__cursor {
      color: ${p => p.theme.primaryLight};
    }
  }
`
const CopySection = styled(Section)`
  font-size: 1.3em;
  padding-top: 0;
  padding-bottom: 3em;

  @media (min-width: 640px) {
    font-size: 1.6em;
  }
`
const SocialSection = styled(Section)`
  font-size: 2em;

  @media (min-width: 640px) {
    font-size: 3em;
  }
`
const IconList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -0.5rem;
  color: hsl(0, 0%, 50%);
  text-align: center;
  a {
    color: inherit;
    text-decoration: underline;
  }
`
const ContactLinks = styled(IconList)`
  font-size: 1.2em;
  font-weight: bold;
  color: ${p => p.theme.primaryLight};

  & > * {
    margin: 0.5em 1em;
  }

  @media (min-width: 640px) {
    font-size: 2em;

    & > * {
      margin: 0.5em 1.5em;
    }
  }

  svg {
    display: block;
    font-size: 2.2em;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 0.2em;
  }
`
const SocialLinks = styled(IconList)`
  & > * {
    margin: 0.15em 0.3em;
  }
`
