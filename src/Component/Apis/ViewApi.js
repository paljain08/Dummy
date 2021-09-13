import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ViewApi() {
  const [api, setApi] = useState({
    apiTitle: "",
    apiMethod: "",
    apiReq: "",
    apiRes: "",
    moName: "",
    apiDes: "",
  });

  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3003/apis/" + id);
    setApi(result.data);
  };

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">API Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">API Title: {api.apiTitle}</li>
        <li className="list-group-item">API Method: {api.apiMethod}</li>
        <li className="list-group-item">API Request: {api.apiReq}</li>
        <li className="list-group-item">API Response: {api.apiRes}</li>
        <li className="list-group-item">API Module: {api.moName}</li>
        <li className="list-group-item">API Desc: {api.apiDes}</li>
      </ul>
    </div>
  );
}

export default ViewApi;
