import React, { useState, useEffect } from "react";
import Header from "./Header/Index.jsx";
import { HashRouter } from "react-router-dom";
import Routes from "./Routes.jsx";
import UserContext from "./userContext.jsx";
import { theme } from "./theme.js";
import { ThemeProvider } from "styled-components";

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
    if (localStorage.getItem("token") && localStorage.getItem("user")) {
      fetch("https://afternoon-cliffs-13118.herokuapp.com/login/auth", {
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      })
        .then((resp) => resp.json())
        .then((res) => {
          if (res.error || res.user !== localStorage.getItem("user")) {
            // the jwt is invalid
            setUser(null);
          } else {
            setUser(localStorage.getItem("user"));
          }
        });
    }
  }, []);

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={{ user, login, logout }}>
          <Header
            brand="Griitch blog"
            links={user ? ["logout"] : ["login", "register"]}
          />
          <Routes />
        </UserContext.Provider>
      </ThemeProvider>
    </HashRouter>
  );
}
