import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function AddProject() {
  let history = useHistory();
  const [projectData, setProjectData] = useState({
    projectTitle:"",
    projectDescription:"",
    projectLogo:"",
  });

  const { projectTitle,projectDescription,projectLogo } = projectData;

  function onInputChange(e) {
    setProjectData({ ...projectData, [e.target.name]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/projects", projectData);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Project</h2>
        <form onSubmit={(e) => {onSubmit(e);}}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Project Title"
              name="projectTitle"
              value={projectTitle}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Project Description"
              name="projectDescription"
              value={projectDescription}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Project Logo"
              name="projectLogo"
              value={projectLogo}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <button className="btn btn-primary btn-block">Add Project</button>
        </form>
      </div>
    </div>
    );
}

export default AddProject;
