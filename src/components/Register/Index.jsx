import React, { useState, useContext } from "react";
import UserContext from "../userContext.jsx";
import { Redirect } from "react-router-dom";
import Form from "./Form.jsx";
import StyledButton from "../Shared/Button.jsx";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [result, setResult] = useState(null);
  const [email, setEmail] = useState("");

  const { user } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      setResult("Passwords don't match");
      return;
    }

    fetch("https://afternoon-cliffs-13118.herokuapp.com/users", {
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
        <label>Username</label>
        <input
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
      </div>
      <div>
        <label>Email</label>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
      </div>
      <div>
        <label>Password</label>
        <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </div>
      <div>
        <label>Confirm password</label>
        <input
          required
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          type="password"
        />
      </div>
      <h4>{result}</h4>
      <StyledButton type="submit">Register</StyledButton>
    </Form>
  );
}

export default RegisterForm;
