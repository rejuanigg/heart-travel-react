import styled from 'styled-components';

export const HeroContainer = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;

    & img {
        height: 80%;
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

export const GradientImg = styled.img`
    display: flex;
    justify-content: center;
`

export const InfoPage = styled.div `
    position: relative;
    display: flex;
    justify-content: space-between;
    color: #EAEAEA;
    width: 80%;
    margin: 40px;
    gap: 90px;


    
    @media screen and (max-width: 350px) {
        flex-direction: column;
        padding: 60px 0;

}

    @media (max-width: 600px) {

        flex-direction: column;
        gap: 0;

}

`

export const HeroTitleContainer = styled.div `
    color: #EAEAEA;
    width: 40%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    & h1 {
        font-family: 'Lobster', cursive;
        font-size: 60px;
        width: 120%;

    }

    & p {
        font-size: 15px;
        width: 80%;
        font-weight: 600;
    }

    @media (max-width: 1189px) {

        width: 50%;    

    }

    @media (max-width: 952px) {

        width: 80%;

        & h1 {
            font-size: 60px;
        }

        & p {

            font-size: 13px;
        }

    }

    @media (max-width: 670px) {

        & h1 {
            font-size: 50px;
        } 

        & p {

            font-size: 12px;
        }

}

    @media (max-width: 430px) {
    
        & h1 {
            font-size: 40px;
        }

        & p {
            font-size: 10px;
            width: 100%;
        }

    }



    @media screen and (max-width: 350px) {

        width: 100%;
        justify-content: center;

        & h1 {
            font-size: 40px;
            margin: 0;
            width: 30%;
        }

        & p {
            font-size: 10px;
        }
}


    @media (max-width: 250px) {
        
        & h1 { 
            font-size: 30px;  

        }

        & p {
            font-size: 8px;
        }

}
`

export const SubTitle = styled.div `

margin: 0 20px 0 0;

    @media screen and (max-width: 350px) {
        font-size: 12px; ;
    }
    @media (max-width: 600px) {

        font-size: 15px;

    }

    @media (max-width: 600px) {

        font-weight: 600;

}
`