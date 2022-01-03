import { useState } from "react";
import { Form } from "./Form";

export const TableItem=({form})=>{
   // console.log("form",form[0].username)
    const [table, setTable]=useState(form)
//let tabledata=JSON.stringify(form)
   // form.map((r)=>console.log(r.username))

    //setTable(form)
    /*
    const userdetail={
        username:username,
        age:age,
        address:address
    }
    */
   
    
//console.log("table",table)
   // const tableRows =(() => {
        return (

            <div>

          
                <table>
                    <tbody>
                { form?form.map((d)=>( 
                    <tr>
      <td>{d.username}</td>
<td>{d.address}</td>
<td>{d.salary}</td>
<td>{d.department}</td>
<td>{d.image}</td>

<td>{ d.checkbox}</td>
</tr>

                )):""}
           
</tbody>
</table>

 </div>
        );
     // });

      
}
