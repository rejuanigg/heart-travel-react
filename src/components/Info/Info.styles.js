import styled from 'styled-components';
import {Link} from 'react-router-dom'


export const InfoContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const WelcomeInfo = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;;
    @media (max-width: 1330px) {
        height: 100vh;
    }
`

export const WelcomeImage = styled.img`
    height: 350px;
    width: 100%;

    @media (max-width: 1030px) {
        height: 250px;
    }
`

export const WelcomeTitle = styled.h2`
    font-size: 40px;
    color: #2b2c34;
    margin: 3px;
    @media (max-width: 1030px) {
        margin: 20px;
    }
    @media (max-width: 560px) {
        font-size: 30px;
    }
    @media (max-width: 400px) {
        font-size: 25px;
    }
    @media (max-width: 300px) {
        font-size: 20px;
    }
`

export const WelcomePagraph = styled.p`
    width: 50%;
    text-align: center;
    color: #2b2c34;
    @media (max-width: 768px) {
        width: 80%;
    }
    @media (max-width: 560px) {
        font-size: 15px;
    }
    @media (max-width: 400px) {
        font-size: 12px;
    }
    @media (max-width: 300px) {
        font-size: 10px;
    }
`

export const InfoWrapper = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: ${prop => prop.color};
`

export const PageTitleSpan = styled.span`
    color: ${prop => prop.color};
    font-weight: 600;
`

export const Image = styled.img `
    height: 300px;
    animation: upAndDown 2s ease-in-out infinite;
    @keyframes upAndDown {

            100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(25px);
    }
    }
    @media (max-width: 1030px) {
        height: 200px;
        @keyframes upAndDown {

        100% {
        transform: translateY(0);
        }
        50% {
        transform: translateY(10px);
        }
    }
    }
    @media (max-width: 300px) {
        height: 150px;
    }
`

export const InfoTextContainer = styled.div`
    height: 40%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const InfoTitle = styled.h2`
    color: ${prop => prop.color};
    width: 80%;
    text-align: center;
    
    @media (max-width: 595px) {
        font-size: 20px;
    }
    @media (max-width: 300px) {
        width: 90%;
        font-size: 15px;
    }

`

export const InfoPagraph = styled.p`
    color: ${prop => prop.color};
    text-align: center;
    margin: 0;
    width: 50%;
    @media (max-width: 768px) {
        width: 80%;
    }
    @media (max-width: 595px) {
        font-size: 15px;
    }
    @media (max-width: 450px) {
        font-size: 12px;
    }
    @media (max-width: 300px) {
        width: 90%;
        font-size: 10px;
    }
`

export const ScrollButton = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background-color: ${prop => prop.color};
    cursor: pointer;
    color: ${prop => prop.textColor};
`

export const ButtonShowMore = styled(Link)`
    width: 60%;
    height: 40px;
    border-radius: 10px;
    background-color: #7f5af0;
    color: #fffffa;
    font-size: 20px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`