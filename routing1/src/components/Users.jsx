import { useContext } from "react"
import {Link} from "react-router-dom"
import { AuthContext } from "./AuthContext"

export const Users= ()=>{
    const {token}=useContext(AuthContext)

   return ( 
       <div>
   {[1,2,3,4].map((e,i)=>(
    <div key={i} style={{margin: "20px"}}>
        <Link to={`/users/${e}`}>User {e}</Link>

    </div>
  ))}
</div>
   )
}