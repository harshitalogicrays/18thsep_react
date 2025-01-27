import React, { useContext, useState } from 'react'

const themecon = React.createContext()

const ThemeContext = ({children}) => {
    const [themeMode,setThemeMode] =useState("light")
    const darkTheme = ()=>setThemeMode("dark")
    const lightTheme =  ()=>setThemeMode("light")

    const toggleTheme =(th)=>setThemeMode(th)

    const themeStyles = {
        background : themeMode=="light"?"wheat":"gray",
        color:themeMode=="light"?"black":"white",
        height:'100%'
    }
  return (
    <themecon.Provider value={{themeMode,darkTheme,lightTheme,toggleTheme}}>
        <div style={themeStyles}>
         {children}
        </div>  
    </themecon.Provider>
  )
}
export default ThemeContext
export const useTheme = ()=>useContext(themecon) 