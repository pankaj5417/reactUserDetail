import React, { useEffect, useState } from "react";

//import "../crudAdd/crud-add.scss";
//import "../../button.scss";
//import { MainCrud } from "./Table";

 const CrudAdd = props => {
  // Set the initial state of the form

  const [page, setPage]=useState(1)
  const initialFormState = {
   id:"",
    projectname: "",
    description: "",
    date: ""
  };
  useEffect(()=>{
    setProject(initialFormState);
},[page])

  const [project, setProject] = useState(initialFormState);

  // Update state within the form
  const handleInputChange = e => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });

    //console.log(project);
  };

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
        //  if (!project.name ) return;
         // console.log(project)

          props.addProject(project);
          setProject(initialFormState);
        }}
      >
        <input
        name="projectname"
          type="text"
          placeholder="Name..."
          id="name"
         
          onChange={handleInputChange}
        />
        <input
    onChange={handleInputChange}

        name="description"
          type="text"
          placeholder="Description..."
          id="description"
          
        />
        <input onChange={handleInputChange} name="date" type="date" placeholder="Date..." id="date" />
        <input type="submit" value="submit" />
      </form>
      <button className="btn btn-primary">Add Project</button>
      <button disabled={page===1} onClick={()=>setPage(page-1)} >Prev</button>

      <button  onClick={()=>setPage(page+1)} >Next</button> 
    </div>
  );
};

export default CrudAdd
