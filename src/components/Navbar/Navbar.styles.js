import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import {AiOutlineMenu, AiOutlineUser} from "react-icons/ai"

export const NavbarContainer = styled.header`
    background-color: #EAEAEA;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    z-index: 1123876;

    img {
        height: 70px;
        margin-left: 10px;
    }

    @media (max-width: 350px) {

        justify-content: space-around;

        padding: 0 0px;

        img {
            height: 50px;
        }
    }

    @media (max-width: 250px) {

        img {
            height: 40px;
        }

    }
`

export const NavbarLinks = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    height: 100%;
    gap: 8px;

    
    @media (max-width: 768px) {
        flex-direction: column;
        background-color: #EAEAEA;
        width: 100%;
        height: 300px;
        position: absolute;
        top: 80px;
        left: 0;
        z-index: 1;
        justify-content: space-around;
        border-radius: 0px 0px 10px 10px;
        display: ${props => props.menuOpen ? 'flex' : 'none'};
        animation: slide-down 0.5s ease-in-out;
        @keyframes slide-down {
            0% {
                transform: translateY(-100%);
            }
            100% {
                transform: translateY(0%);
            }
        }
    }

    @media (max-width: 350px) {

        display: ${props => props.menuOpen ? 'flex' : 'none'};

    }

`




export const NavbarLink = styled(NavLink)`
    font-size: 1rem;
    background: linear-gradient(90deg, rgba(159,34,179,1) 0%, rgba(99,47,198,1) 37%, rgba(69,93,213,1) 68%, rgba(16,174,240,1) 99%);    font-weight: 500;
    -webkit-background-clip: text;
    color: transparent;  
    height: 30px;
    width: auto;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: transform 0.1s;
    padding: 0px 8px;

    &:hover {
        background: linear-gradient(90deg, rgba(16,174,240,1) 0%, rgba(69,93,213,1) 17%, rgba(99,47,198,1) 65%, rgba(159,34,179,1) 100%);
        color: #EAEAEA;
        transition: all 0.2s ease-in-out;
    }

    &.active {
        background: linear-gradient(90deg, rgba(16,174,240,1) 0%, rgba(69,93,213,1) 17%, rgba(99,47,198,1) 65%, rgba(159,34,179,1) 100%);
        color: #EAEAEA;
        transition: all 0.2s ease-in-out;
    }

        @media (max-width: 768px) {

        font-size: 13px;
        &.active {

            width: 100%;
            height: 60px;

        }

    }


`

export const LoginLink = styled(Link)`
    font-size: 1rem;
    background: linear-gradient(90deg, rgba(159,34,179,1) 0%, rgba(99,47,198,1) 37%, rgba(69,93,213,1) 68%, rgba(16,174,240,1) 99%);    font-weight: 500;
    -webkit-background-clip: text;
    color: transparent;  
    height: 30px;
    width: auto;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: transform 0.1s;
    padding: 0px 8px;

    &:hover {
        background: linear-gradient(90deg, rgba(16,174,240,1) 0%, rgba(69,93,213,1) 17%, rgba(99,47,198,1) 65%, rgba(159,34,179,1) 100%);
        color: #EAEAEA;
        }
`

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const UserOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`

export const UserIcon = styled(AiOutlineUser)`
    font-size: 1.5rem;
    background: linear-gradient(90deg, rgba(159,34,179,1) 0%, rgba(99,47,198,1) 37%, rgba(69,93,213,1) 68%, rgba(16,174,240,1) 99%);    font-weight: 500;
    color: #EAEAEA;
    padding: 5px;
    border-radius: 50%;
`

export const MenuIcon = styled(AiOutlineMenu)`
    font-size: 1.5rem;
    color: #094067;

    @media (min-width: 768px) {

        display: none;

    }
    @media (max-width: 768px) {
        display: block;
    }
`