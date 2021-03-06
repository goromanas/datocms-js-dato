import { AnchorLink } from 'gatsby-plugin-anchor-links'
import React from 'react'
import { useHero } from '../../graphql/useHero'
import { Image, HeroWrapper, Title, Subtitle, Content, CTA, Button } from './Hero.style'
import { Parallax } from 'react-scroll-parallax'

const Hero = () => {
  const { hero } = useHero()

  return (
    <HeroWrapper>
      <Parallax className="custom-class" y={[-30, 30]}>
        <Image fluid={hero.heroImage.fluid} />
      </Parallax>
      <Content>
        <Title>{hero.title}</Title>
        <Subtitle>{hero.subtitle}</Subtitle>
        <CTA>
          <AnchorLink to="/#paslaugos" stripHash>
            <Button title="Paslaugos" />
          </AnchorLink>
          <AnchorLink to="/#kontaktai" stripHash>
            <Button title="Susisiekite" type="outline" />
          </AnchorLink>
        </CTA>
      </Content>
    </HeroWrapper>
  )
}

export default Hero
