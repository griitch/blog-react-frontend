import React from "react";
import { Switch, Route } from "react-router-dom";
import BlogsList from "./BlogsList/Index.jsx";
import BlogPost from "./BlogPost/Index.jsx";
import Login from "./Login/Index.jsx";
import Logout from "./Logout/Index.jsx";
import RegisterForm from "./Register/Index.jsx";

function Routes() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>

      <Route path="/logout">
        <Logout />
      </Route>
      <Route path="/register">
        <RegisterForm />
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
