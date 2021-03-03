import React from 'react'
import { useHero } from '../../graphql/useHero'
import Button from '../core/Button/Button'
import { Image, HeroWrapper, Title, Subtitle, Content, CTA } from './Hero.style'

const Hero = () => {
  const { datoCmsHero } = useHero()
  console.log(datoCmsHero)
  return (
    <HeroWrapper>
      <Image fluid={datoCmsHero.heroImage.fluid} />
      <Content>
        <Title>{datoCmsHero.title}</Title>
        <Subtitle>{datoCmsHero.subtitle}</Subtitle>
        <CTA>
          <Button title="Paslaugos" />
          <Button title="Susisiekit" type="outline" />
        </CTA>
      </Content>
    </HeroWrapper>
  )
}

export default Hero
