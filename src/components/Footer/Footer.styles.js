import styled from 'styled-components';

export const FooterContainer = styled.footer`
    width: 100%;
    height: 400px;
`

export const FooterLinks = styled.div`
    height: 60%;
    width: 100%;
    background-color: rgba(69,80,213,1);
    display: flex;
    justify-content: center;
    align-items: center;
     
    `

export const FooterList = styled.ul`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media screen and (max-width: 350px) {
        width: 60%;
    }

    @media (max-width: 250px) {
        
        & h5 {
            font-size: 12px;
        }

    }
`

export const BorderImg = styled.div`
    background-color: #eaeaea;
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 30px;

    @media screen and (max-width: 350px) {

        display: none;
}

`

export const FooterLogo = styled.img`
    height: 60px;

    @media screen and (max-width: 350px) {

        display: none;
}

`

export const FooterLink = styled.a`
    color: #eaeaea;
    font-size: 12px;

    @media screen and (max-width: 350px) {

        font-size: 12px;
        
    }


    @media (max-width: 250px) {
        
        font-size: 8px;   

    }
    
`

export const FooterRedSocial = styled.div`
    width: 100%;
    height: 40%;
    background-color: #171717;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const LinkRedSocial = styled.a`
    font-size: 30px;
`