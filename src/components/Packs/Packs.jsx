import React from 'react'
import {FilterContainer, Filters, Pack, PackPrice, PackTitle, PacksContainer, PacksList, PacksTitle } from './Packs.styles'
import { Button } from '../../styles/Global.styles'

const Packs = () => {
  return (
    <>
      <PacksContainer>
          <PacksTitle>
            <h2>Paquetes de viaje</h2>
          </PacksTitle>
        <FilterContainer>
          <Filters>Naturaleza Y Paisajes</Filters>
          <Filters>Naturaleza Y Paisajes</Filters>
          <Filters>Naturaleza Y Paisajes</Filters>
          <Filters>Naturaleza Y Paisajes</Filters>
          <Filters>Naturaleza Y Paisajes</Filters>
          <Filters>Naturaleza Y Paisajes</Filters>
          <Filters>Naturaleza Y Paisajes</Filters>
          <Filters>Naturaleza Y Paisajes</Filters>
          <Filters>Naturaleza Y Paisajes</Filters>
          <Filters>Naturaleza Y Paisajes</Filters>
          <Filters>Naturaleza Y Paisajes</Filters>
          <Filters>Naturaleza Y Paisajes</Filters>
        </FilterContainer>
        <PacksList>
          <Pack>
            <img src='https://res.cloudinary.com/doouoldof/image/upload/v1693486130/vistas_o8wqfi.jpg' alt='pack' />
            <PackTitle>
                <h3>Tucumán</h3>
                <p>Rafting, Montañas</p>
            </PackTitle>
            <PackPrice>
                <span>$8000</span>
                <Button>Reservar</Button>
            </PackPrice>
          </Pack>
          <Pack>
            <img src='https://res.cloudinary.com/doouoldof/image/upload/v1693486130/vistas_o8wqfi.jpg' alt='pack' />
            <PackTitle>
                <h3>Tucumán</h3>
                <p>Rafting, Montañas</p>
            </PackTitle>
            <PackPrice>
                <span>$8000</span>
                <Button>Reservar</Button>
            </PackPrice>
          </Pack>
          <Pack>
            <img src='https://res.cloudinary.com/doouoldof/image/upload/v1693486130/vistas_o8wqfi.jpg' alt='pack' />
            <PackTitle>
                <h3>Tucumán</h3>
                <p>Rafting, Montañas</p>
            </PackTitle>
            <PackPrice>
                <span>$8000</span>
                <Button>Reservar</Button>
            </PackPrice>
          </Pack>
          <Pack>
            <img src='https://res.cloudinary.com/doouoldof/image/upload/v1693486130/vistas_o8wqfi.jpg' alt='pack' />
            <PackTitle>
                <h3>Tucumán</h3>
                <p>Rafting, Montañas</p>
            </PackTitle>
            <PackPrice>
                <span>$8000</span>
                <Button>Reservar</Button>
            </PackPrice>
          </Pack>
          
          
        </PacksList>
      </PacksContainer>
    </>
  )
}

export default Packs
