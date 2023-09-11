import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: #EAEAEA;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Sora', sans-serif;
    }
    a{
        text-decoration: none;
    }

    li {
        list-style-type: none;
    }
`

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: #DFE1E6;
`

export const Button = styled.button`
    height: 40px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: none;
    color: #EAEAEA;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    font-family: 'Sora', sans-serif;
    background: linear-gradient(90deg, rgba(58,197,255,1) 0%, rgba(69,80,213,1) 66%);`
