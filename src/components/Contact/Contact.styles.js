import styled from 'styled-components';

export const ContactContainer = styled.div`
    height:100vh;
    width: 100%;
    display: flex;
    justify-content: SPACE-BETWEEN;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;   
    }
`

//INFORMACION DE CONTACTO


export const ContactWrapper = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(https://res.cloudinary.com/doouoldof/image/upload/v1695064856/image-14_bwgvvf.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @media (max-width: 1030px) {
        width: 50%;
    }
    @media (max-width: 768px) {
        width: 100%;
        height: 50%s;
    }
`

export const ContactInfoContainer = styled.div`
    background-color: #fffffa;
    height: 60%;
    width: 60%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(216, 238, 254, 0.7);
    @media (max-width: 768px) {
        height: 90%;   
    }
    @media (max-width: 350px) {
        width: 90%;
    }
`

export const ContactTitle = styled.h2`
    color: #094067;
`

export const ContactParagraph = styled.p`
    color: #094067;
`

export const RedSocialLinks = styled.div`
    display: flex;
    gap: 20px;
    font-size: 25px;
`

//FORMULARIO DE CONTACTO


export const ContactFormContainer = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d8eefe;
    @media (max-width: 1030px) {
        width: 50%;
    }
    @media (max-width: 768px) {
        width: 100%;
        
    }
`

export const ContactFormWrapper = styled.div`
    height: 70%;
    width: 80%;
    background-color: rgba(255, 255, 250, 0.7);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        height: 80%;
        padding: 30px;  
    }
`

export const ContactTitleForm = styled.h2`
    margin-top: 30px;
    text-align: center;
    color: #094067;
    @media (max-width: 450px) {
        font-size: 20px;
        width: 100%;
    }
`

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 30px;
    width: 100%;
    @media (max-width: 768px) {
        gap: 10px;
        margin: 0;
    }
`

export const ContactInput = styled.input`
    height: 25px;
    padding: 5px;
    border: 2px solid #5f6c7b;
    border-radius: 5px;
    width: 50%;
    @media (max-width: 768px) {
        width: 80%;   
    }
`

export const ContactTextArea = styled.textarea`
    height: 100px;
    width: 50%;
    border: 2px solid #5f6c7b;
    border-radius: 5px;
    padding: 5px;
    resize: none;
    @media (max-width: 768px) {
        width: 80%;   
    }
`

export const ContactButton = styled.button`
    height: 30px;
    width: 100px;
    border-radius: 5px;
    font-family: 'Sora', sans-serif;
    border: none;
    background-color: #ef4565;
    color: #eaeaea;
    font-weight: 600;
    @media (max-width: 768px) {
        width: 50%;   
    }
`