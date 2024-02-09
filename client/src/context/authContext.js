import axios from "axios";
import { createContext, useEffect, useState } from "react";

//Doing the same dark mode thing for user authentication:

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [currentUser , setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);


    const login = async (inputs) =>{
        const resp = await axios.post("http://localhost:8800/api/auth/login" , inputs , {
            withCredentials: true,
        });

        setCurrentUser(resp.data);
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