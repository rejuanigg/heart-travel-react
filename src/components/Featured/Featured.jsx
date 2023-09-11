import React from 'react'
import { FeaturedBox, FeaturedContainer, FeaturedInfo, FeaturedPrice, FeaturedTitle, FeaturedWrapper } from './Featured.styles'
import { Button, Line } from '../../styles/Global.styles'

const Featured = () => {
  return (
    <>
      <FeaturedContainer>
        <FeaturedTitle>Featured 
            <img src="https://res.cloudinary.com/doouoldof/image/upload/v1693928324/fire_pj67zh.png" alt="" />
            </FeaturedTitle>
            <FeaturedWrapper>
                
                
                <FeaturedBox>
                    <img src="https://res.cloudinary.com/doouoldof/image/upload/v1693491399/altacatamarca-programas-002-n_nfxi75.jpg" alt="" /> 
                    <FeaturedInfo>
                        <h3>Catamarca</h3>
                        <p>Lorem ipsum dolor sit endi nostrum, deleniti dolore reprehende.</p>
                    </FeaturedInfo>
                    <Line/>
                    <FeaturedPrice>
                        <span>$ 1500</span>
                        <Button style={{width:'100px'}}>Reservar</Button>
                    </FeaturedPrice>    
                </FeaturedBox>
                
        
        
            </FeaturedWrapper>
      </FeaturedContainer>
    </>
  )
}

export default Featured
