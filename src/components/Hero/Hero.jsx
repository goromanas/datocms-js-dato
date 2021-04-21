import { AnchorLink } from 'gatsby-plugin-anchor-links'
import React from 'react'
import {
  Image,
  HeroWrapper,
  Title,
  Subtitle,
  Content,
  CTA,
  Button,
  Description,
  Overlay,
  ImageWrapper,
} from './Hero.style'
import { Parallax } from 'react-scroll-parallax'
import { Link } from 'gatsby'

const Hero = ({ hero }) => {
  return (
    <HeroWrapper>
      <Parallax className="custom-class" y={[-40, 30]}>
        <ImageWrapper>
          <Image
            fluid={hero.heroImage.fluid}
            imgStyle={{
              objectFit: 'cover',
              objectPosition: '0% 0%',
            }}
          />
          {hero.overlay && <Overlay />}
        </ImageWrapper>
      </Parallax>
      <Content>
        <Title>{hero.title}</Title>
        <Subtitle>{hero.subtitle}</Subtitle>
        <Description>{hero.description}</Description>
        <CTA>
          <Link to="/paslaugos">
            <Button title="Paslaugos" />
          </Link>
          <AnchorLink to="/#kontaktai" stripHash>
            <Button title="Susisiekite" type="outline" />
          </AnchorLink>
        </CTA>
      </Content>
    </HeroWrapper>
  )
}

export default Hero
