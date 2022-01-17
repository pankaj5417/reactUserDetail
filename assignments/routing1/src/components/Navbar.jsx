import { Link } from "react-router-dom";

export const Navbar=()=>{
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about" style={{margin:"10px"}}>About</Link>
       <Link to="/contactus" style={{margin:"10px"}}>Contact</Link>
       <Link to="/users" style={{margin:"10px"}}>Users</Link>
       <Link to="/login">Login</Link>
       <Link to="/products">Products</Link>


        </div>
    )
}