import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

export const Login=()=>{
    const [form, setForm]=useState({})

    const handleChange=({target:{ name,value}})=>{
        setForm({
            ...form,[name]:value
        }
          )
        }
        
    const {handleToken}=useContext(AuthContext)

    return (
        <div>
            <input type="text" onChange={handleChange } name="email" placeholder="Enter Email" />

            <input type="text"  onChange={handleChange } name="password" placeholder="Enter Password" />

            <button onClick={()=>{handleToken()}}>click here</button>
        </div>
    )
}