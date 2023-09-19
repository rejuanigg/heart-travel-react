import React from 'react'
import { CategoriesContainer, CategoriesGrid, CategoriesTitle, CategoriesWrapper } from './Categories.styles'
import DataT from '../Data/turismo/data-turismo'

const Categories = () => {
  return (
    <>
        <CategoriesContainer>
          <CategoriesTitle>¿Que tipo de actividad buscas?</CategoriesTitle>

            <CategoriesGrid>

              {
                DataT?.map((Turismo)=>{
                  const {id, title, img} = Turismo;
                  return (
                    <CategoriesWrapper key={id} img={img}>
                      <h2>{title}</h2>
                    </CategoriesWrapper>
                  )
                })
              }



              {/* <CategoriesWrapper img='https://res.cloudinary.com/doouoldof/image/upload/v1693761790/11_x3zv9u.jpg'>
                <h2>Naturaleza y Paisajes</h2>
              </CategoriesWrapper> */}

          
            </CategoriesGrid>

        </CategoriesContainer>
    </>
  )
}

export default Categories
