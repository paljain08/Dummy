import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ViewUser() {
  const [user, setUser] = useState({
    userFName: "",
    userLName: "",
    userGender: "",
    userEmail: "",
    userProfile: "",
    userPId: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3003/user/" + id);
    setUser(result.data);
  };

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/UserForm">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">User First Name: {user.userFName}</li>
        <li className="list-group-item">User Last Name: {user.userLName}</li>
        <li className="list-group-item">User Gender: {user.userGender}</li>
        <li className="list-group-item">User Email: {user.userEmail}</li>
        <li className="list-group-item">User Profile: {user.userProfile}</li>
        <li className="list-group-item">Project: {user.userPId}</li>
      </ul>
    </div>
  );
}

export default ViewUser;
