import React from 'react'
import { BorderImg, FooterContainer, FooterLink, FooterLinks, FooterList, FooterLogo, FooterRedSocial, LinkRedSocial } from './Footer.styles'
import {AiFillInstagram, AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare} from 'react-icons/ai'

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterLinks>

            
            <BorderImg>
                <FooterLogo src='https://res.cloudinary.com/doouoldof/image/upload/v1694203800/travel_vq1edp.svg'></FooterLogo>
            </BorderImg>     
                    
            <FooterList>
                <h5>Explorar</h5>
                    <li><FooterLink href="#">Inicio</FooterLink></li>
                    <li><FooterLink href="#">Featured</FooterLink></li>
                    <li><FooterLink href="#">Actividades</FooterLink></li>
                    <li><FooterLink href="#">Paquetes</FooterLink></li>
                    
            </FooterList>

            <FooterList>
                <h5>RGPD</h5>
                    <li><FooterLink href="#">Aviso Legal</FooterLink></li>
                    <li><FooterLink href="#">Política de Privacidad</FooterLink></li>
                    <li><FooterLink href="#">Política de Cookies</FooterLink></li>
            </FooterList>
            
            
        </FooterLinks>
        <FooterRedSocial>
            <LinkRedSocial href="#"><AiFillInstagram color='#eaeaea'/></LinkRedSocial>
            <LinkRedSocial href="#"><AiFillFacebook color='#eaeaea'/></LinkRedSocial>
            <LinkRedSocial href="#"><AiFillLinkedin color='#eaeaea'/></LinkRedSocial>
            <LinkRedSocial href="#"><AiFillTwitterSquare color='#eaeaea'/></LinkRedSocial>            
        </FooterRedSocial>
      </FooterContainer>
    </>
  )
}

export default Footer
