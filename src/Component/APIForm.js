import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

function APIForm() {
  const [users, setUsers] = useState([]);
  let history = useHistory();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3003/apis");
    setUsers(result.data.reverse());
  };

  const deleteUser = async (id) => {
    if(window.confirm('Are you sure to delete?')){
      await axios.delete("http://localhost:3003/apis/"+id)
      loadUser();
      history.push("/");
    }
  };

  return (
    <div class="container">
      <h1>Project API's</h1>
      <table class="table border shadow">
        <thead class="text-light thead-dark bg bg-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">API Title</th>
            <th scope="col">API Method</th>
            <th scope="col">Request Method</th>
            <th scope="col">Response Method</th>
            <th scope="col">Module Name</th>
            <th scope="col">API Desc</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.apiTitle}</td>
              <td>{user.apiMethod}</td>
              <td>{user.apiReq}</td>
              <td>{user.apiRes}</td>
              <td>{user.moName}</td>
              <td>{user.apiDes}</td>

              <td>
                <Link
                  class="btn btn-primary mr-2"
                  to={`/Apis/ViewApi/${user.id}`}
                >
                  View
                </Link>
                <Link
                  class="btn btn-outline-primary mr-2"
                  to={`/Apis/EditApi/${user.id}`}
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

export default APIForm;
