import React, { useState } from "react";
import Header from "./Header/index.jsx";
import { HashRouter } from "react-router-dom";
import Routes from "./Routes.jsx";
import UserContext from "./userContext.jsx";

export default function App() {
  const [user, setUser] = useState({});

  const login = (user, jwt) => {
    localStorage.setItem("token", jwt);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser({});
  };

  return (
    <HashRouter>
      <UserContext.Provider value={(user, login, logout)}>
        <Header brand="Griitch blog" links={user ? ["login"] : ["logout"]} />
        <Routes />
      </UserContext.Provider>
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
