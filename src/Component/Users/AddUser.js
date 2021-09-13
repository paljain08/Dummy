import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function AddUser() {
  let history = useHistory();
  const [user, setUser] = useState({
    userFName: "",
    userLName: "",
    userGender: "",
    userEmail: "",
    userProfile: "",
    userPId: "",
  });

  const { userFName, userLName, userGender, userEmail, userProfile, userPId } =
    user;

  function onInputChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/user", user);
    history.push("/UserForm");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add User</h2>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter First Name "
              name="userFName"
              value={userFName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Last Name"
              name="userLName"
              value={userLName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Gender"
              name="userGender"
              value={userGender}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter User Email "
              name="userEmail"
              value={userEmail}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Profile URL"
              name="userProfile"
              value={userProfile}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Project Id"
              name="userPId"
              value={userPId}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
