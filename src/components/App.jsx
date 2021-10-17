import React from "react";
import Header from "./Header/index.jsx";
import { HashRouter, Switch } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <Header brand="Griitch blog" links={["login"]} />
      <Switch></Switch>
    </HashRouter>
  );
}

/*
this will be the front end of the blog, and a refresher on reactjs

start by coding the rest api first

ideas : 
- use context for current user
- only 2 routes : "/" and "/blog/:id"
- everyone can view and read blogs, only authentified users can comment


*/
