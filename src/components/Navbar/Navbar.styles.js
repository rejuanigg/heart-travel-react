import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import {AiOutlineMenu, AiOutlineUser} from "react-icons/ai"
import {FaShoppingCart} from "react-icons/fa"

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

export const CartIcon = styled(FaShoppingCart)`
    color: rgba(16,174,240,1);
    font-size: 20px;
    cursor: pointer;
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
    gap: 20px;
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
    cursor: pointer;
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

export const ContentCart = styled.div `
    width: 400px;
    position: absolute;
    background-color: #EAEAEA;
    top: 80px;
    right: 0;
    height: 80%;
    --webkit-box-shadow: -3px 6px 5px 0px rgba(130,130,130,0.65);
    -moz-box-shadow: -3px 6px 5px 0px rgba(130,130,130,0.65);
    box-shadow: -3px 6px 5px 0px rgba(130,130,130,0.65);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    display: none;
`
export const CartTitle = styled.h2 `
    color: black;
`

export const CartItem = styled.div `
    height: 120px;
    width: 90%;
    background-color: red;
    border-radius: 8px;
`

export const CartPrice = styled.div `
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const ContainerPrice = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const InfoPrice = styled.p `

`

export const Price = styled.span `
    font-weight: 700;
`

export const CartButton = styled.button `
    width: 90%;
    height: 40px;
    background-color: red;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
`