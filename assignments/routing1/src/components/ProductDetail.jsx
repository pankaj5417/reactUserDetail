import {Link} from "react-router-dom"

export const ProductDetail=()=>{

    return (
        <div>
           {[1,2,3,4].map((e,i)=>(
    <div key={i} style={{margin: "20px"}}>
        <Link to={`/products/${e}`}>products {e}</Link>

    </div>
  ))}
        </div>
    )
}