import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

function EditUser() {
  let history = useHistory();
  const { id } = useParams();
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

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put("http://localhost:3003/user/" + id, user);
    history.push("/UserForm");
  };

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3003/user/" + id);
    setUser(result.data);
  };
  return (
    <div class="container">
      <div class="w-75 mx-auto shadow p-5">
        <h2 class="text-center mb-4">Update User</h2>
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
          <button class="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
