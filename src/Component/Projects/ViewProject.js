import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ViewProject() {
  const [pData, setData] = useState({
    projectTitle:"",
    projectDescription:"",
    projectLogo:"",
  });

  const { id } = useParams();
  useEffect(() => {
    loadproject();
  }, []);

  const loadproject = async () => {
    const result = await axios.get("http://localhost:3003/projects" + id);
    setData(result.data);
  };

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">project Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Project Title: {pData.projectTitle}</li>
        <li className="list-group-item">Project Description: {pData.projectDescription}</li>
        <li className="list-group-item">Project Logo: {pData.projectLogo}</li>
      </ul>
    </div>
  );
}

export default ViewProject;
