import React from "react";
import { Switch, Route } from "react-router-dom";
import BlogsList from "./BlogsList/index.jsx";
import BlogPost from "./BlogPost/Index.jsx";
import Login from "./Login/Index.jsx";
import Logout from "./Logout/Index.jsx";

function Routes() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>

      <Route path="/logout">
        <Logout />
      </Route>

      <Route path="/posts/:id">
        <BlogPost />
      </Route>

      <Route path="/">
        <BlogsList />
      </Route>
    </Switch>
  );
}

export default Routes;
