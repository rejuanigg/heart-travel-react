import styled from 'styled-components';

export const PacksContainer = styled.div`
    width: 100%;
    height: calc(100% - 60px);
    display: flex;
    gap: 20px;
    align-items: center;
    background-color: #eaeaea;
    flex-direction: column;
    padding: 60px 0;
`

export const PacksTitle = styled.div`
    width: 90%;
    display: flex;

    & h2 {
        color: rgba(69,80,213,1);
        font-weight: 600;
    }
`

export const FilterContainer = styled.div`
    width: 90%;
    height: 90px;
    background-color: #eaeaea;
    display: grid;
    grid-gap: 2px;
    grid-auto-flow: column;
    grid-auto-columns: 12%;
    overflow-x: auto;
    overscroll-behavior-inline: contain;

    @media screen and (max-width: 350px) {

        grid-auto-columns: 50%;
        
    }

`

export const Filters = styled.a`
    height: 50px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    font-size: 12px;
    color: rgba(69,80,213,1);
    background-color: #fafafa;
    font-weight: 600;
    border: 1px solid rgba(69,80,213,1);
    text-align: center;
`

export const PacksList = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: start;
    justify-content: start;
    background-color: #eaeaea;
    display: grid;
    grid-template-columns: repeat(4, 1fr); 

    @media (max-width: 350px) {

        grid-template-columns: repeat(1, 1fr);
        place-items: center;

    }

`

export const Pack = styled.div`
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: start;
    justify-content: center;
    background-color: #fafafa;
    border-radius: 5px;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.37);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.37);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.37);

    & img {
        max-width: 100%;
        border-radius: 8px;
    }

    @media (max-width: 350px) {

        width: 250px;

}
`

export const PackTitle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    & h3 {
        color: rgba(69,80,213,1);
    }
`

export const PackPrice = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    & span {
        font-weight: 600;
    }
`