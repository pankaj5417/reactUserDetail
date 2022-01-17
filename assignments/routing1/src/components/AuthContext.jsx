import { createContext, useState } from "react";

export const AuthContext= createContext({auth:"" , toggleAuth:()=>{}})

export const AuthContextProvider = ({children})=>{
  //  const [token, setToken]=useState("");
    const [auth, setAuth]=useState("")
    const toggleAuth=(auth)=>{
        setAuth(auth)
    }
    return <AuthContext.Provider value={{auth, toggleAuth}}>{children}</AuthContext.Provider>
}