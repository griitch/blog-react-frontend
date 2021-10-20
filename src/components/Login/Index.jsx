import React, { useState, useContext } from "react";
import UserContext from "../userContext.jsx";
import { Redirect } from "react-router-dom";
import Form from "./Form.jsx";
import StyledButton from "../Shared/Button.jsx";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { user, login } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://afternoon-cliffs-13118.herokuapp.com/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ username, password }),
    })
      .then((resp) => resp.json())
      .then((res) => {
        if (res.error) {
          setError(res.message);
        } else {
          login(res.username, res.token);
        }
      });
  };

  return user ? (
    <Redirect to="/" />
  ) : (
    <Form onSubmit={handleSubmit}>
      <div>
        <label>Username : </label>
        <input
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
      </div>
      <div>
        <label>Password : </label>
        <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </div>
      <h4>{error}</h4>
      <StyledButton type="submit">Submit</StyledButton>
    </Form>
  );
}

export default Login;
