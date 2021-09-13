import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import APIForm from "./components/APIForm";
import Project from "./components/Project";
import Module from "./components/Module";
import User from "./components/User";
import AddApi from "./components/Apis/AddApi";
import EditApi from "./components/Apis/EditApi";
import ViewApi from "./components/Apis/ViewApi";
import Navbar from "./components/Layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={APIForm} />
          <Route exact path="/Module" component={Module} />
          <Route exact path="/Project" component={Project} />
          <Route exact path="/User" component={User} />
          <Route exact path="/Apis/AddApi" component={AddApi} />
          <Route exact path="/Apis/EditApi/:id" component={EditApi} />
          <Route exact path="/Apis/EditApi/:id" component={EditApi} />
          <Route exact path="/Apis/ViewApi/:id" component={ViewApi} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
