import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

function ModuleForm() {
  const [modes, setMode] = useState([]);
  let history = useHistory();

  useEffect(() => {
    loadModule();
  }, []);

  const loadModule = async () => {
    const result = await axios.get("http://localhost:3003/module");
    setMode(result.data.reverse());
  };

  const deleteUser = async (id) => {
    if(window.confirm('Are you sure to delete?')){
      await axios.delete("http://localhost:3003/module/"+id)
      loadModule();
      history.push("/ModuleForm");
    }
    history.push("/ModuleForm");
  };

  return (
    <div class="container">
      <h1>Project Modules's</h1>
      <table class="table border shadow">
        <thead class="text-light thead-dark bg bg-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Module Title</th>
            <th scope="col">Module Desc</th>
            <th scope="col">Project Id</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {modes.map((module, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{module.modeTitle}</td>
              <td>{module.modeDesc}</td>
              <td>{module.modePId}</td>

              <td>
                <Link
                  class="btn btn-primary mr-2"
                  to={`/Module/ViewModule/${module.id}`}
                >
                  View
                </Link>
                <Link
                  class="btn btn-outline-primary mr-2"
                  to={`/Module/EditModule/${module.id}`}
                >
                  Edit
                </Link>
                <Link
                  class="btn btn-danger"
                  onClick={() => deleteUser(module.id)}
                >
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

export default ModuleForm;
