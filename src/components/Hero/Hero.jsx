import React from 'react'
import { useHero } from '../../graphql/useHero'
import { Image } from './Hero.style'

const Hero = () => {
  const data = useHero()
  console.log(data)
  return (
    <div>
      <Image fluid={data.datoCmsHero.heroImage.fluid} />
    </div>
  )
}

export default Hero
