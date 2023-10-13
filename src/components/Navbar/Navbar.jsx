import { CartIcon, MenuContainer, LoginLink ,NavbarContainer, NavbarLink, NavbarLinks, UserOptions, UserIcon, MenuIcon, ContentCart, CartItem, CartTitle, CartPrice, InfoPrice, Price, ContainerPrice, CartButton} from "./Navbar.styles"
import logo from "./cartIcon/travel.svg"
import { useMenu } from "../Context/Context"
import { useState, useRef } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const {menuOpen, setMenuOpen} = useMenu();
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [openCart, setOpenCart] = useState(false)
    const cart = useRef(null)

    const toggleCart = () => {
        setOpenCart(prevState => prevState ? false : true)
        cart.current.style.display = openCart ? "flex" : "none"     
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const toggleUserMenu = () => {
        setUserMenuOpen(prevState => !prevState);
    }

    return (
        <NavbarContainer>
            <div>
                <Link to="/">
                    <img src={logo} alt="Logo"/>
                </Link>
            </div>
            <NavbarLinks menuOpen={menuOpen}>
                <NavbarLink to="/"  >Home</NavbarLink>
                <NavbarLink to='/products' >Productos</NavbarLink>
                <NavbarLink to="/aboutUs"  >About Us</NavbarLink>
                <NavbarLink to="/contactUs">Contactanos</NavbarLink>
            </NavbarLinks>
            
            <UserOptions>
                <MenuContainer>
                    <LoginLink href="/#">Login</LoginLink>
                    <UserIcon onClick={toggleUserMenu}/>
                    <CartIcon onClick={toggleCart}/>
                    <ContentCart ref={cart}>
                        <CartTitle>Paquetes seleccionados</CartTitle>
                        <CartItem></CartItem>
                        <CartPrice>
                            
                            

                            <ContainerPrice>
                                <InfoPrice>Total Productos</InfoPrice>
                                <Price>2000</Price>
                            </ContainerPrice>

                            <ContainerPrice>
                                <InfoPrice>Envío</InfoPrice>
                                <Price>120</Price>
                            </ContainerPrice>

                            <CartButton>Comprar</CartButton>                            
                            
                        </CartPrice>
                    </ContentCart>
                </MenuContainer>

                <MenuIcon onClick={toggleMenu}/>
            </UserOptions>

        </NavbarContainer>
    )
}

export default Navbar;
