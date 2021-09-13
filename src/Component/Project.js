import React, { useState ,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Project() {
  const [projectData, setProjectData] = useState([]);

  const loadProject = async () => {
    const result = await axios.get("http://localhost:3003/projects");
    setProjectData(result.data.reverse());
  };
  useEffect(() => {
    loadProject();
  }, []);

  const deleteProject= async id=>{
    if(window.confirm('Are you sure to delete?')){
      await axios.delete("http://localhost:3003/projects/"+id)
      loadProject();
    }
  }
  return (
    <div className="container">
    <h1>Home Page</h1>
    <table className="table border shadow">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Project Title</th>
          <th scope="col">Project Description</th>
          <th scope="col">project Logo</th>
        </tr>
      </thead>
      <tbody>
      {projectData.map((project, index) => (
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{project.projectTitle}</td>
            <td>{project.projectDescription}</td>
            <td>{project.projectLogo}</td>
            <td>
              <Link
                className="btn btn-primary mr-2"
                to={`/Projects/ViewProject/${project.id}`}
              >
                View
              </Link>
              <Link
                className="btn btn-outline-primary mr-2"
                to={`/Projects/EditProject/${project.id}`}
              >
                Edit
              </Link>
              <Link
                className="btn btn-danger" onClick={()=>deleteProject(project.id)}>
                Delete
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default Project;
