import React from 'react'
import {FilterContainer, Filters, Image, Pack, PackPrice, PackTitle, PacksContainer, PacksList, PacksTitle } from './Packs.styles'
import { Button } from '../../styles/Global.styles'
import Data from '../Data/provincias/data-provincias'
import DataT from '../Data/turismo/data-turismo'

const Packs = () => {
  return (
    <>
      <PacksContainer>
          <PacksTitle>
            <h2>Paquetes de viaje</h2>
          </PacksTitle>
        <FilterContainer>

          {
            DataT?.map((Turismo)=>{
              const {id, title} = Turismo;
              return (
                <Filters key={id}>{title}</Filters>
              )
            })
          }


        </FilterContainer>
        <PacksList>


          {
            Data?.map((Province)=>{
              const {
                id, 
                img, 
                title, 
                desc, 
                approximateAmount,
                departure
              }
                 = Province;
              return (
                <Pack key={id}>
                <Image src={img} alt={title} />
            <PackTitle>
                <h3>{title}</h3>
                <span>Proxima Fecha: {departure}</span>
                <p>{desc}</p>
                
            </PackTitle>
            <PackPrice>
                <span>${approximateAmount}</span>
                <Button style={{width:'50%'}}>Reservar</Button>
            </PackPrice>
           </Pack>
              )
                   
            })
          }
          
        </PacksList>
      </PacksContainer>
    </>
  )
}

export default Packs
