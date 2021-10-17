import React from "react";
import { Switch, Route } from "react-router-dom";
import BlogsList from "./BlogsList/index.jsx";

function Routes() {
  return (
    <Switch>
      <Route path="/login"></Route>

      <Route path="blog/:id"></Route>

      <Route path="/">
        <BlogsList />
      </Route>
    </Switch>
  );
}

export default Routes;
