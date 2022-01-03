import { useRef, useState,useEffect } from "react"
import { TableItem } from "./TableItem"



export const Form=() =>{

    const [page, setPage]=useState(1)

    const [data, setData]=useState()

    const [form, setForm]=useState({
        username:"",
        age:"",
        address:"",
        salary:"",
        department:"",
        checkbox:""
    })

    

    const handleChange= (e)=>{
        console.log(e.target.name)
        console.log(ref.current.files)
        const {name,value}= e.target;

        setForm({
           
            
            ...form, [name]:name==="checkbox"?e.target.checked:value
            
        })
    }
    
    const ref= useRef(null)

    useEffect(()=>{
        getTodo()
    },[page])
       
        const getTodo=()=>{
        fetch(`http://localhost:3001/userDetail?page=${page}&_limit=2 `)
        .then((d)=>d.json()).then((res)=>{
            setData(res)
        })
    }

        const addTodo=()=>{
            const payload=form
                
            

            fetch("http://localhost:3001/userDetail",{
                method:"POST",
                body:JSON.stringify(payload),
                headers:{
                    "content-type":"application/json"

                }
            }).then(()=>{
                getTodo()
            })
        }
      //  console.log(data)
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(data)
       // addTodo()

       // setData(data)
      
        
     
    }
    //console.log(ref.current.files)
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} name="username" type="text" placeholder="enter name" />
            <br />
            <input onChange={handleChange} name="age" type="number" placeholder="enter age" />
            <br />
            <input onChange={handleChange} name="address" type="text" placeholder="enter address" />
            <br />

            <input onChange={handleChange} name="salary" type="number" placeholder="enter salary" />
            <br />
            <select name="Department" id="">
                <option value="computer Science">computer Science</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Electrical">Electrical</option>

            </select>
            <br />
           <label>single
            <input onChange={handleChange} name="checkbox" type="checkbox" />
            </label>
            <label>Married
            <input onChange={handleChange} name="checkbox" type="checkbox" />
            </label>

            <br />
            <input ref={ref} onChange={handleChange} name="image" type="file"></input>
            <br />
            <input onClick={addTodo} type="submit" value="submit" />
            <button disabled={page===1} onClick={()=>setPage(page-1)} >Prev</button>

          <button  onClick={()=>setPage(page+1)} >Next</button> 
        
        </form>

        
        <TableItem form={data} />
        

       </>
    )
}