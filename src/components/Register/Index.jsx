import React, { useState, useContext } from "react";
import UserContext from "../userContext.jsx";
import { Redirect } from "react-router-dom";
import Form from "./Form.jsx";
import StyledButton from "../Shared/Button.jsx";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);

  const { user } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ username, password }),
    })
      .then((resp) => resp.json())
      .then((res) => {
        if (res.err) {
          setResult(res.message);
        } else {
          setResult(<Redirect to="/login" />);
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
      </div>
      <div>
        <label>Password : </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </div>
      <h4>{result}</h4>
      <StyledButton type="submit">Register</StyledButton>
    </Form>
  );
}

export default RegisterForm;
