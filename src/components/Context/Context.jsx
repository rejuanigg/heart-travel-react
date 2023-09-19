import { createContext, useState,useContext } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Context.Provider value={{ menuOpen, setMenuOpen }}>
            {children}
        </Context.Provider>
    );
}

export const useMenu = () => {
    return useContext(Context)
};