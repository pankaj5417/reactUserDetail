import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { Cart } from "./cart"


export const Navbar=()=>{

    const {theme}= useContext(ThemeContext)

    return (
        <div>
            Theme is: {theme} in navbar 
            <Cart />
        </div>
    )
}
