import React from 'react'
import { GradientImg, HeroContainer, HeroTitleContainer, InfoPage, SubTitle } from './Hero.styles'
import background from './assets/argentinian.svg'
import gradient from './assets/jar.svg'

const Hero = () => {
  return (
    <>
        <HeroContainer>
            <img src={background} alt="" />
            <GradientImg src={gradient}/>
          <InfoPage>
            <HeroTitleContainer>
              <h1>Conocé Argentina con HeartTravel</h1>
              <p>Descubre Argentina, un país de contrastes impactantes. Desde la pasión de Buenos Aires con su tango y arquitectura, hasta las majestuosas montañas de los Andes y los glaciares de la Patagonia. Disfruta de las playas atlánticas, la rica cultura del vino en Mendoza y la asombrosa belleza natural en cada rincón. ¡Una aventura inolvidable te espera en Argentina!</p>
            </HeroTitleContainer>
            <SubTitle>
              <p>Cafayate, Salta</p>
            </SubTitle>
          </InfoPage>
        </HeroContainer>
    </>
  )
}

export default Hero
