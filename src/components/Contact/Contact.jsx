import React from 'react'
import {ContactTitleForm ,RedSocialLinks ,ContactContainer, ContactFormContainer, ContactInfoContainer, ContactParagraph, ContactTitle, ContactWrapper, ContactFormWrapper, ContactForm, ContactInput, ContactButton, ContactTextArea } from './Contact.styles'
import {AiFillInstagram, AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare} from 'react-icons/ai'


const Contact = () => {
  return (
    <>
      <ContactContainer>
        <ContactWrapper>

          <ContactInfoContainer>
            <ContactTitle>Hola</ContactTitle>
            <ContactParagraph>¿Tienes alguna duda?</ContactParagraph>
          <RedSocialLinks>
            <AiFillInstagram color='#ef4565'/>
            <AiFillFacebook color='#ef4565'/>
            <AiFillLinkedin color='#ef4565'/>
            <AiFillTwitterSquare color='#ef4565'/>
          </RedSocialLinks>
          </ContactInfoContainer>

        </ContactWrapper>
        <ContactFormContainer>
            <ContactFormWrapper>
              <ContactTitleForm>Formulario de contacto</ContactTitleForm>
              <ContactForm>
                <ContactInput type="text" placeholder='Nombre'/>
                <ContactInput type="text" placeholder='Apellido'/>
                <ContactInput type="text" placeholder='Correo'/>
                <ContactInput type="text" placeholder='Teléfono'/>
                <ContactTextArea placeholder='Mensaje'/>
                <ContactButton>Enviar</ContactButton>
              </ContactForm>
            </ContactFormWrapper>
        </ContactFormContainer>
      </ContactContainer>
    </>
  )
}

export default Contact
