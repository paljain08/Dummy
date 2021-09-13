import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

function EditModule() {
  let history = useHistory();
  const { id } = useParams();

  const [mod, setModule] = useState({
    modeTitle: "",
    modeDesc: "",
    modePId: "",
  });

  const { modeTitle, modeDesc, modePId } = mod;

  function onInputChange(e) {
    setModule({ ...mod, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put("http://localhost:3003/module/" + id, mod);
    history.push("/ModuleForm");
  };

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3003/module/" + id);
    setModule(result.data);
  };
  return (
    <div class="container">
      <div class="w-75 mx-auto shadow p-5">
        <h2 class="text-center mb-4">Edit Module</h2>
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
          <button class="btn btn-warning btn-block">Update Module</button>
        </form>
      </div>
    </div>
  );
}

export default EditModule;
