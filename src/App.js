import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import { Switch, Route } from "react-router";
import ProjectDetails from "./components/project/ProjectDetails";
import SignedIn from "./components/auth/SignedIn";
import SignedUp from "./components/auth/SignedUp";
import CreateProject from "./components/project/CreateProject";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/projects/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignedIn} />
            <Route path="/signup" component={SignedUp} />
            <Route path="/create" component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
