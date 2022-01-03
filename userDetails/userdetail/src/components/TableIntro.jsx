import { useState } from "react"

export const CrudIntro=(props)=>{
    //const [data, setData]=useState([props.projectData])
  // const data = Array.from(props.projectData);
console.log(props.projectData)
//console.log("data",JSON.stringify(props))
//console.log((data.map(d=>(d.name))))
    return (
        <>
       {props.projectData.map(d=>
        <div>
         {d.name}  
        </div>
        )}
        </>
    )
}