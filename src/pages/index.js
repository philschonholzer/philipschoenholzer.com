import React from 'react'
import Typewriter from 'typewriter-effect'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { FaHome, FaHeart } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container, Section, IconList } from '../styles'
import { graphql, useStaticQuery } from 'gatsby'

const IndexPage = () => {
  const avatar = useStaticQuery(graphql`
    query AvatarQuery {
      file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  console.log('avatar', avatar)

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Section>
          <Hero>
            <HeroTitle>
              Stets auf der Suche&nbsp;&nbsp;&nbsp;
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
            <Avatar fixed={avatar.file.childImageSharp.fixed} />
          </Hero>
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
        <ContactSection>
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
        </ContactSection>
      </Container>
    </Layout>
  )
}

export default IndexPage

const Hero = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2em;
`

const HeroTitle = styled.h1`
  font-size: 2em;
  line-height: 1.15;
  margin: 0 auto 0 0;
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

const Avatar = styled(Img)`
  border: 5px solid hsl(262, 0%, 28%);
  border-radius: 50%;
`
const CopySection = styled(Section)`
  font-size: 1.3em;
  padding-top: 0;
  padding-bottom: 3em;

  @media (min-width: 640px) {
    font-size: 1.6em;
  }
`
const ContactSection = styled(Section)`
  font-size: 1.2em;
  padding-bottom: 5em;

  @media (min-width: 640px) {
    font-size: 2em;
  }
`
const ContactLinks = styled(IconList)`
  font-weight: bold;
  color: ${p => p.theme.primaryLight};

  & > * {
    margin: 0.5em 1em;
  }

  @media (min-width: 640px) {
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
