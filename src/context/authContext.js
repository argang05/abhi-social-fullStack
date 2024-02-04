import { createContext, useEffect, useState } from "react";

//Doing the same dark mode thing for user authentication:

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [currentUser , setcurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null);


    const login = () =>{
        //TO DO (Backend)
        //Temporary Dummy function:
        setcurrentUser({
            id: 1 , 
            name: "Ezio", 
            profilePic : "https://64.media.tumblr.com/b1c3ee4a7fbbed72fdcf538809345a11/b2622e7780f91c80-c6/s1280x1920/394a4ad8b4114705aa89bc6c2c61e3bb56339f63.jpg",
        });
    };
    
    useEffect(() =>{
        //JSON.stringify to convert the onject containing user info into string
        //As object cannot be stored inside local storage:
        localStorage.setItem("user" , JSON.stringify(currentUser));
    },[currentUser]);
    

    return(
        <AuthContext.Provider value={{currentUser , login}}>
            {children}
        </AuthContext.Provider>
    );
};