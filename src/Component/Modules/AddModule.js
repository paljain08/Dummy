import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function AddModule() {
  let history = useHistory();
  const [mod, setModule] = useState({
    modeTitle: "",
    modeDesc: "",
    modePId: "",
  });

  const { modeTitle, modeDesc, modePId } = mod;

  function onInputChange(e) {
    setModule({ ...mod, [e.target.name]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/module", mod);
    history.push("/ModuleForm");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Module</h2>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Module Title "
              name="modeTitle"
              value={modeTitle}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Module Description"
              name="modeDesc"
              value={modeDesc}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Project Id"
              name="modePId"
              value={modePId}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <button className="btn btn-primary btn-block">Add Module</button>
        </form>
      </div>
    </div>
  );
}

export default AddModule;
