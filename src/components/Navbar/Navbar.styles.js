import styled from 'styled-components';

export const NavbarContainer = styled.header`
    background-color: #EAEAEA;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    width: 100%;

    img {
        height: 70px;
        margin-left: 10px;
    }

    @media (max-width: 350px) {

        justify-content: space-around;

        padding: 0 0px;

        width: 100vh;
        img {
            height: 50px;
        }


    }
`

export const NavbarLinks = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 30%;
    height: 100%;
    gap: 8px;
    @media (max-width: 350px) {

        display: none;

    }
`

export const NavbarLink = styled.a`
    font-size: 1rem;
    background: linear-gradient(90deg, rgba(159,34,179,1) 0%, rgba(99,47,198,1) 37%, rgba(69,93,213,1) 68%, rgba(16,174,240,1) 99%);    font-weight: 500;
    -webkit-background-clip: text;
    color: transparent;  
    height: 30px;
    width: 60px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: transform 0.1s;
    padding: 0px 4px;

    &:hover {
        background: linear-gradient(90deg, rgba(16,174,240,1) 0%, rgba(69,93,213,1) 17%, rgba(99,47,198,1) 65%, rgba(159,34,179,1) 100%);
        color: #EAEAEA;
        transition: all 0.2s ease-in-out;
    }
`

export const LoginLink = styled(NavbarLink)`
    background: none;
    color: rgba(159,34,179,1);
    border: 1px solid rgba(159,34,179,1);
    margin-right: 10px;

    &:hover {
        background: linear-gradient(90deg, rgba(16,174,240,1) 0%, rgba(69,93,213,1) 17%, rgba(99,47,198,1) 65%, rgba(159,34,179,1) 100%);
        color: #EAEAEA;
        }
`