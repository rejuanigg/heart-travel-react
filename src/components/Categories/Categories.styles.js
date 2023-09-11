import styled from 'styled-components';

export const CategoriesContainer = styled.div`
    width: 100%;
    height: calc(100% - 60px);
    display: flex;
    gap: 100px;
    align-items: center;
    background-color: #EAEAEA;
    flex-direction: column;
    padding: 60px 0;
`

export const CategoriesTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: rgba(69,80,213,1);
    font-weight: 600;
    width: 90%;
    display: flex;
    justify-content: start;
    
`

export const CategoriesGrid = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
    place-items: center;

    @media screen and (max-width: 350px) {

        grid-template-columns: repeat(1, 1fr);

}

`

export const CategoriesWrapper = styled.div`
    width: 250px;
    height: 120px;
    border-radius: 8px;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.37);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.37);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.37);
    display: flex;
    justify-content: center;
    align-items: center;
    
    
    & img {
        position: relative;
        object-fit: cover;
        min-height: 120px;
        min-width: 250px;
        border-radius: 6px;
        filter: brightness(80%);
        
    }

    & h2 {
        position: absolute;
        z-index: 2;
        color: #EAEAEA;
        transition: transform 0.3s;
        font-size: 18px;
    }
    &:hover { 
        cursor: pointer;
        & img {
            filter: brightness(80%) blur(1px);
        }
        & h2 {
            transition: all 0.3s ease-in-out;
            transform: scale(1.2);
        }
    }
`