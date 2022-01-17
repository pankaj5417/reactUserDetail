

import { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import "./Product.css"
export const Products = ()=>{
    const {id} = useParams()
    const [ product , setProduct]=useState([])

    const {token} =useContext(AuthContext)
    //console.log(id)

    useEffect(()=>{
        getProducts()
    },[])

    const getProduct=()=>{
        fetch(`http://localhost:3002/products/?id=${id}`)
        .then ((d)=> d.json()).then((d)=>{
           // console.log(d)
            setProduct(d)
        })
    }

    const getProducts=()=>{
        fetch(`http://localhost:3002/products`)
        .then ((d)=> d.json()).then((d)=>{
           // console.log(d)
            setProduct(d)
        })
    }
    console.log(product)

    const handleClick=()=>{
        getProduct()
         console.log(product)
    }

    // if(!token){
    //     return <Navigate to={"/login"} />
    // }

    return (
        <div>
              {product.map(d=>(
            <div className="products">
             
              <table>
                  
                      

                
                  <tbody>
                      <tr>
                          <td className="space">{d.name}</td>
                          <td className="space">{d.price}</td>
                          <td className="space"><h5 onClick={()=>{handleClick()}}>More Details</h5></td>
                      </tr>
                  </tbody>
              </table>
            </div>
               ))} 
            
      

    </div>
    )
}