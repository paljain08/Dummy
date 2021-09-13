import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand">API Project</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/Project">
                Project
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/ModuleForm">
                Module
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                API
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/UserForm">
                User
              </NavLink>
            </li>
          </ul>
		  <Link className="btn btn-outline-light" to="/Projects/AddProject">
          Add Project
        </Link>
        </div>
        <Link className="btn btn-outline-light" to="/Apis/AddApi">
          Add API
        </Link>
        <Link className="btn btn-outline-light" to="/Users/AddUser">
          Add User
        </Link>
        <Link className="btn btn-outline-light" to="/Module/AddModule">
          Add Module
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
