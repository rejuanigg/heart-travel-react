import styled from 'styled-components';

export const HeroContainer = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;

    & img {
        height: 600px;
        width: 90%;
        position: absolute;
        object-fit: cover;
        margin: 20px;
    }

    @media (max-width: 350px) {

        & img {
            width: 100%;
            height: 80%;
            margin: 0;
        }

    }
`

export const InfoPage = styled.div `
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: start;
    color: #EAEAEA;
    width: 80%;
    margin: 40px;

    @media screen and (max-width: 350px) {
        flex-direction: column;
        padding: 100px 0;
}

`

export const HeroTitleContainer = styled.div `
    color: #EAEAEA;
    width: 40%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & h1 {
        font-family: 'Lobster', cursive;
        font-size: 100px;

    }

    & p {
        font-size: 15px;
    }

    @media screen and (max-width: 350px) {

        width: 100%;
        justify-content: center;

        & h1 {
            font-size: 60px;
            margin: 0;
        }

        & p {
            font-size: 10px;
        }
}

`

export const SubTitle = styled.div `
    @media screen and (max-width: 350px) {

        font-size: 12px; ;
    }
`