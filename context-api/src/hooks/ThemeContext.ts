import { createContext, useContext } from "react";

export const  ThemeContext = createContext({
    theme: 'light',
    toggleTheme: (val:any)=>{}
})

export const  ThemeProvider = ThemeContext.Provider

export const UseTheme = () => {
    return useContext(ThemeContext)
}