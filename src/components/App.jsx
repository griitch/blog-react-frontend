import React, { useState, useEffect } from "react";
import Header from "./Header/index.jsx";
import { HashRouter } from "react-router-dom";
import Routes from "./Routes.jsx";
import UserContext from "./userContext.jsx";

export default function App() {
  const [user, setUser] = useState(null);

  const login = (user, jwt) => {
    localStorage.setItem("token", jwt);
    localStorage.setItem("user", user);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("user"))
      setUser(localStorage.getItem("user"));
  }, []);

  return (
    <HashRouter>
      <UserContext.Provider value={{ user, login, logout }}>
        <Header brand="Griitch blog" links={user ? ["logout"] : ["login"]} />
        <Routes />
      </UserContext.Provider>
    </HashRouter>
  );
}
