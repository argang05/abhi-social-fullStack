import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({children}) =>{
    //If first visit to website set darkmode to false:
    //Using JSON.parse() to return a boolean instead of string:
    const [darkMode , setDarkMode] = useState(
        JSON.parse(localStorage.getItem("darkMode")) || false);


    //Function to toggle onn and off the darkmode:
    const toggle = () => {
        setDarkMode(!darkMode);
    };
    
    //UseEffect to set darkmode value:
    useEffect(() =>{
        localStorage.setItem("darkMode" , darkMode);
    },[darkMode]);
    

    //Returning the darkmode value and toggling functionality along with the target children of root div:
    return(
        <DarkModeContext.Provider value={{darkMode , toggle}}>
            {children}
        </DarkModeContext.Provider>
    );
};