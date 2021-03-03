import React from 'react'
import { useHero } from '../../graphql/useHero'
import Button from '../core/Button/Button'
import { Image, HeroWrapper, Title, Subtitle, Content, CTA } from './Hero.style'

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
          <Button title="Susisiekit" type="outline" />
        </CTA>
      </Content>
    </HeroWrapper>
  )
}

export default Hero
