import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

function UserForm() {
  const [users, setUsers] = useState([]);
  let history = useHistory();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3003/user");
    setUsers(result.data.reverse());
  };

  const deleteUser = async (id) => {
    if(window.confirm('Are you sure to delete?')){
      await axios.delete("http://localhost:3003/user/"+id)
      loadUser();
      history.push("/UserForm");
    }
    
  };

  return (
    <div class="container">
      <h1>Project User's</h1>
      <table class="table border shadow">
        <thead class="text-light thead-dark bg bg-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Gendre</th>
            <th scope="col">Email</th>
            <th scope="col">Profile Pic URL</th>
            <th scope="col">Project Id</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.userFName}</td>
              <td>{user.userLName}</td>
              <td>{user.userGender}</td>
              <td>{user.userEmail}</td>
              <td>{user.userProfile}</td>
              <td>{user.userPId}</td>

              <td>
                <Link
                  class="btn btn-primary mr-2"
                  to={`/Users/ViewUser/${user.id}`}
                >
                  View
                </Link>
                <Link
                  class="btn btn-outline-primary mr-2"
                  to={`/Users/EditUser/${user.id}`}
                >
                  Edit
                </Link>
                <Link
                  class="btn btn-danger"
                  onClick={() => deleteUser(user.id)}
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

export default UserForm;
