import { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const UserDetails = ()=>{
    const {userid} = useParams()
    const [ user , setUser]=useState({})

    const {token} =useContext(AuthContext)

    useEffect(()=>{
        fetch(`https://reqres.in/api/users/${userid}`)
        .then ((d)=> d.json()).then((d)=>{
            setUser(d.data)
        })
    },[userid])

    if(!token){
        return <Navigate to={"/login"} />
    }

    return (
        <div>
            <img src={user.avatar} alt="test" />
            <div>
                {user.firstname} {user.lastname}
            </div>
            <div> Contact:{user.email}</div>
      

    </div>
    )
}