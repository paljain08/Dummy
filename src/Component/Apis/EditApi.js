import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

function EditApi() {
  let history = useHistory();
  const { id } = useParams();

  const [api, setApi] = useState({
    apiTitle: "",
    apiMethod: "",
    apiReq: "",
    apiRes: "",
    moName: "",
    apiDes: "",
  });

  const { apiTitle, apiMethod, apiReq, apiRes, moName, apiDes } = api;

  function onInputChange(e) {
    setApi({ ...api, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put("http://localhost:3003/apis/" + id, api);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3003/apis/" + id);
    setApi(result.data);
  };
  return (
    <div class="container">
      <div class="w-75 mx-auto shadow p-5">
        <h2 class="text-center mb-4">Update API</h2>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter API Title "
              name="apiTitle"
              value={apiTitle}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter API Method"
              name="apiMethod"
              value={apiMethod}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter API Request Method"
              name="apiReq"
              value={apiReq}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter API Response Method "
              name="apiRes"
              value={apiRes}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Module Name"
              name="moName"
              value={moName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter API Description"
              name="apiDes"
              value={apiDes}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button class="btn btn-warning btn-block">Update API</button>
        </form>
      </div>
    </div>
  );
}

export default EditApi;
