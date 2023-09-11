import { LoginLink, NavbarContainer, NavbarLink, NavbarLinks} from "./Navbar.styles"
import {BiLogIn} from "react-icons/bi"
import logo from "./cartIcon/travel.svg"
import {FaBars} from "react-icons/fa"


const Navbar = () => {
    return (
        <NavbarContainer>
            <div>
                <a href="/#">
                    <img src={logo}/>
                </a>
            </div>
            <NavbarLinks>
                <NavbarLink href="/#">Home</NavbarLink>
                <NavbarLink href="/#">Mapa</NavbarLink>
                <NavbarLink href="/#">FAQ</NavbarLink>
            </NavbarLinks>
            
            <div>
                <LoginLink href="/#">Login<BiLogIn/></LoginLink>
            </div>

                {/* <FaBars/> */}


        </NavbarContainer>
    )
}

export default Navbar