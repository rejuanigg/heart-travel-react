import { MenuContainer, LoginLink ,NavbarContainer, NavbarLink, NavbarLinks, UserOptions, UserIcon, MenuIcon} from "./Navbar.styles"
import logo from "./cartIcon/travel.svg"
import { useMenu } from "../Context/Context"
import { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const {menuOpen, setMenuOpen} = useMenu();
    const [userMenuOpen, setUserMenuOpen] = useState(false);

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
                    
                </MenuContainer>

                <MenuIcon onClick={toggleMenu}/>
            </UserOptions>

        </NavbarContainer>
    )
}

export default Navbar;
