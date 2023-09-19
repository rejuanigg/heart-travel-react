import React from 'react'
import { 
  InfoContainer, 
  InfoWrapper, 
  Image, 
  InfoTextContainer, 
  InfoTitle, 
  InfoPagraph, 
  WelcomeInfo,
  WelcomeTitle,
  WelcomePagraph,
  WelcomeImage,
  ScrollButton,
  ButtonShowMore,
  PageTitleSpan,
} from './Info.styles'
import {AiOutlineArrowDown} from 'react-icons/ai'


const scrollToSection = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: 'smooth' });
};

const Info = () => {
  return (
    
    <InfoContainer>

      <WelcomeInfo>
        <WelcomeImage src='https://res.cloudinary.com/doouoldof/image/upload/v1694203800/travel_vq1edp.svg'/>
        <WelcomeTitle >
            Acerca de Nosotros
        </WelcomeTitle>
        <WelcomePagraph>
            ¡Bienvenido a <PageTitleSpan color='#7f5af0'>HeartTravel</PageTitleSpan>, tu guía personal para descubrir los tesoros de Argentina! Nos apasiona el turismo y nos dedicamos a brindarte experiencias que perduren en tu corazón, permitiéndote explorar cada rincón de este fascinante país.
        </WelcomePagraph>
        <ScrollButton onClick={() => scrollToSection('seccion1')} textColor='#fffffe' color='#6246ea'>
          <AiOutlineArrowDown />
        </ScrollButton>
      </WelcomeInfo>


      <InfoWrapper color='#d8eefe' id='seccion1'>
        <Image src="https://res.cloudinary.com/doouoldof/image/upload/v1694982709/1_s16hbn.png" alt='SI'/>
          <InfoTextContainer>
          <InfoTitle color='#094067'>
            Viaja a Cualquier Rincón de la Argentina
          </InfoTitle>
          <InfoPagraph color='#5f6c7b' >
          En <PageTitleSpan color='#ef4565'>HeartTravel</PageTitleSpan>, creemos que cada rincón de Argentina tiene su propia magia y belleza. Desde los picos majestuosos de la Cordillera de los Andes hasta las playas doradas del Atlántico, te invitamos a sumergirte en la diversidad que este país tiene para ofrecer.
          </InfoPagraph>
          </InfoTextContainer>
        <ScrollButton onClick={() => scrollToSection('seccion2')} textColor='#fffffe' color='#ef4565'>
          <AiOutlineArrowDown />
        </ScrollButton>
      </InfoWrapper>

      <InfoWrapper color='#16161a' id='seccion2'>
        <Image src="https://res.cloudinary.com/doouoldof/image/upload/v1694982710/4_tlxq4o.png" alt='SI'/>
        <InfoTextContainer>
          <InfoTitle color='#7f5af0'>
            Alojamiento Incluido en tu Paquete
          </InfoTitle>
          <InfoPagraph color='#fffffe' >
          En <PageTitleSpan color='#7f5af0'>HeartTravel</PageTitleSpan> queremos que tu experiencia sea completamente libre de preocupaciones. Por eso, en cada paquete de <PageTitleSpan color='#7f5af0'>HeartTravel</PageTitleSpan>, el alojamiento está cuidadosamente seleccionado y está incluido en el precio. Ya sea un encantador bed and breakfast o un lujoso hotel boutique, nos aseguramos de que tu estancia sea cómoda y memorable.
          </InfoPagraph>
        </InfoTextContainer>
        <ScrollButton onClick={() => scrollToSection('seccion3')} textColor='#fffffe' color='#6246ea'>
        <AiOutlineArrowDown />
        </ScrollButton>
      </InfoWrapper>

      <InfoWrapper color='#d8eefe' id='seccion3'>
      <Image src="https://res.cloudinary.com/doouoldof/image/upload/v1694982710/2_tx2bsr.png" alt='SI'/>
        <InfoTextContainer>
          <InfoTitle color='#094067'>
            Elige a Dónde Viajar desde tu Teléfono
          </InfoTitle>
          <InfoPagraph color='#5f6c7b'>
            Entendemos la importancia de la flexibilidad y la comodidad al planificar un viaje. Con la plataforma intuitiva de <PageTitleSpan color='#ef4565'>HeartTravel</PageTitleSpan>, puedes explorar nuestros destinos y paquetes desde la palma de tu mano. Planificar tu aventura nunca ha sido tan fácil y accesible.
          </InfoPagraph>
        </InfoTextContainer>
        <ScrollButton onClick={() => scrollToSection('seccion4')} textColor='#fffffe' color='#ef4565'>
        <AiOutlineArrowDown/>
        </ScrollButton>
      </InfoWrapper>

      <InfoWrapper color='#16161a' id='seccion4'>
        <Image src="https://res.cloudinary.com/doouoldof/image/upload/v1694982710/3_phwpeg.png" alt='SI'/>
        <InfoTextContainer>
          <InfoTitle color='#7f5af0'>
           Tu Equipaje Seguro con Nosotros
          </InfoTitle>
          <InfoPagraph color='#fffffe'>
           La seguridad de tus pertenencias es nuestra prioridad. En <PageTitleSpan color='#7f5af0'>HeartTravel</PageTitleSpan>, tratamos tus maletas con el mismo cuidado y cariño que tú lo harías. Puedes confiar en nosotros para que tus pertenencias lleguen a destino en perfecto estado y a tiempo para tu próxima aventura.
          </InfoPagraph>
        </InfoTextContainer>
        <ButtonShowMore to="/products">Ver Más</ButtonShowMore>
      </InfoWrapper>
      

    </InfoContainer>
  )
}

export default Info;
