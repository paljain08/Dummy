import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ViewModule() {
  const [mod, setModule] = useState({
    modeTitle: "",
    modeDesc: "",
    modePId: "",
  });

  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3003/module/" + id);
    setModule(result.data);
  };

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/ModuleForm">
        back to Home
      </Link>
      <h1 className="display-4">Module Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Module Title: {mod.modeTitle}</li>
        <li className="list-group-item">Module Desc: {mod.modeDesc}</li>
        <li className="list-group-item">Project Id: {mod.modePId}</li>
      </ul>
    </div>
  );
}

export default ViewModule;
