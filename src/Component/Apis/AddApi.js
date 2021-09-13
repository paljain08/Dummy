import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function AddApi() {
  let history = useHistory();
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

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/apis", api);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add API</h2>
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
          <button className="btn btn-primary btn-block">Add API</button>
        </form>
      </div>
    </div>
  );
}

export default AddApi;
