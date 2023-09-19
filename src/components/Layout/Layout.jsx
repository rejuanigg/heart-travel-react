import { LayoutContainer, LayoutContent } from "./Layout.styles"
import Navbar from "../Navbar/Navbar"

const Layout = ({children}) => {
    return (
        <LayoutContainer>
            <Navbar/>
            <LayoutContent>{children}</LayoutContent>
        </LayoutContainer>
    )
    
}

export default Layout