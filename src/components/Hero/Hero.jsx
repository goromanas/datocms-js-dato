import React from 'react'
import { useHero } from '../../graphql/useHero'
import { Image, HeroWrapper, Title, Subtitle, Content, CTA, Button } from './Hero.style'

const Hero = () => {
  const { hero } = useHero()

  return (
    <HeroWrapper>
      <Image fluid={hero.heroImage.fluid} />
      <Content>
        <Title>{hero.title}</Title>
        <Subtitle>{hero.subtitle}</Subtitle>
        <CTA>
          <Button title="Paslaugos" />
          <Button title="Susisiekite" type="outline" />
        </CTA>
      </Content>
    </HeroWrapper>
  )
}

export default Hero
