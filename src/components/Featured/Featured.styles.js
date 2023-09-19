import styled from 'styled-components'

export const FeaturedContainer = styled.div`
    width: 100%;
    height: calc(100% - 60px);
    display: flex;
    gap: 50px;
    align-items: center;
    background-color: #eaeaea;
    flex-direction: column;
    padding: 60px 0;
`

export const FeaturedWrapper = styled.div`
    width: 90%;
    height: auto;
    margin: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    place-items: center;
    place-content: center;

    @media screen and (max-width: 350px) {

        grid-template-columns: repeat(1, 1fr);
        place-content: center;
        
    }

    @media screen and (max-width: 1300px) {

        grid-template-columns: repeat(2, 1fr);

    }

    @media screen and (max-width: 769px) {

        grid-template-columns: repeat(1, 1fr);
        
    }
`

export const FeaturedTitle = styled.h2`
    font-size: 2rem;
    color: rgba(69,80,213,1);
    text-align: center;
    & img {
        width: 30px;
        animation: upAndDown 1s ease-in-out infinite;
    }
    @keyframes upAndDown {
     100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(5px);
    }
}
`

export const FeaturedBox = styled.div`
    width: 300px;
    height: 400px;
    background-color: aliceblue;
    border-radius: 5px;
    background-color: #fafafa;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.37);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.37);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.37);
    

    img {
        height: 50%;
        width: 100%;
        object-fit: cover;
        border-radius: 5px  5px 0 0;
    }

    @media screen and (max-width: 350px) {

        width: 90%;
        
    }

    @media(max-width: 280px) {
    
    display: flex;
    flex-direction: column;
}

    
`

export const FeaturedInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    padding: 0 20px;
    h3 {
        font-size: 20px;
    }
    p {
        font-size: 10px;
    }
`

export const FeaturedPrice = styled.div`
    font-size: 1.5rem;
    color: rgba(69,80,213,1);
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content:space-around;
    height: 80px;

    @media screen and (max-width: 350px) {

        & span {
            font-size: 20px;
        }
        
    }

    @media(max-width: 280px) {
    
        flex-direction: column;

    }

`