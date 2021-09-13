import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import APIForm from "./components/APIForm";
import Project from "./components/Project";
import ModuleForm from "./components/ModuleForm";
import UserForm from "./components/UserForm";
import AddApi from "./components/Apis/AddApi";
import AddUser from "./components/Users/AddUser";
import AddModule from "./components/Module/AddModule";
import EditApi from "./components/Apis/EditApi";
import EditUser from "./components/Users/EditUser";
import EditModule from "./components/Module/EditModule";
import ViewApi from "./components/Apis/ViewApi";
import ViewUser from "./components/Users/ViewUser";
import ViewModule from "./components/Module/ViewModule";
import Navbar from "./components/Layout/Navbar";
import AddProject from "./components/Projects/AddProject";
import EditProject from "./components/Projects/EditProject";
import ViewProject from "./components/Projects/ViewProject"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={APIForm} />
          <Route exact path="/ModuleForm" component={ModuleForm} />
          <Route exact path="/Project" component={Project} />
          <Route exact path="/UserForm" component={UserForm} />
          <Route exact path="/Apis/AddApi" component={AddApi} />
          <Route exact path="/Users/AddUser" component={AddUser} />
          <Route exact path="/Module/AddModule" component={AddModule} />
    		  <Route exact path="/Projects/AddProject" component={AddProject}/>
          <Route exact path="/Projects/ViewProject/:id" component={ViewProject}/>
          <Route exact path="/Projects/EditProject/:id" component={EditProject}/>		  
          <Route exact path="/Apis/EditApi/:id" component={EditApi} />
          <Route exact path="/Users/EditUser/:id" component={EditUser} />
          <Route exact path="/Module/EditModule/:id" component={EditModule} />
          <Route exact path="/Apis/ViewApi/:id" component={ViewApi} />
          <Route exact path="/Users/ViewUser/:id" component={ViewUser} />
          <Route exact path="/Module/ViewModule/:id" component={ViewModule} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

