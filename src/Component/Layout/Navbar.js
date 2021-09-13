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
              <NavLink className="nav-link" exact to="/Module">
                Module
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                API'S
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/User">
                User
              </NavLink>
            </li>
          </ul>
        </div>
        <Link className="btn btn-outline-light" to="/Apis/AddApi">
          Add API
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

