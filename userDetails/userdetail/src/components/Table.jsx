import React, { useState } from "react";

//import CrudIntro from "../crud/crudIntro/crudIntro";
import CrudAdd from "./Form2";
import { CrudIntro } from "./TableIntro";
//import CrudTable from "../crud/crudTable/crudTable";

export const MainCrud = ({props}) => {
  // Project Data
  const projectData = [
    {
      id: 1,
      name: "Skid Steer Loaders",
      description:
        "To advertise the skid steer loaders at 0% financing for 60 months.",
      date: "February 1, 2022"
    },
    {
      id: 2,
      name: "Work Gloves",
      description: "To advertise the work gloves at $15.",
      date: "February 15, 2022"
    },
    {
      id: 3,
      name: "Telehandlers",
      description: "To advertise telehandlers at 0% financing for 24 months.",
      date: "March 15, 2022"
    }
  ];

  const [projects, setProject] = useState(projectData);

  // Add Project
  const addProject = project => {
    project.id = projectData.length + 1;
    setProject([...projects, project]);
  };

  return (
    <div>
     
        <div>

        </div>
        <CrudAdd addProject={addProject} />
       <CrudIntro  projectData={projects} />
      
    </div>
  );
};

