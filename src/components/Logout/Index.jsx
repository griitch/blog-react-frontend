import { Redirect } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import UserContext from "../userContext.jsx";

function Logout() {
  const { logout } = useContext(UserContext);

  useEffect(() => {
    logout();
  }, []);

  return <Redirect to="/" />;
}

export default Logout;
