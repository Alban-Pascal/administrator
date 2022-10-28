import * as React from "react";
import { useState } from "react";
import Axios from "axios";
import styled from "styled-components";

export default function Login() {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const login = () => {
    Axios.post("http://localhost:9999/routes/login", {
      email: Email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };
  return (
    <Wrapper>
      <h1>Welcolme</h1>
      <form className="card-Loggin">
        <div className="mb-3">
          <label htmlfor="InputEmail" className="form-label">
            Email address
          </label>

          <input
            type="email"
            className="form-control"
            id="InputEmail"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <p>We'll never share your email with anyone else.</p>
        <div className="mb-3">
          <label htmlfor="InputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="InputPassword1"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="button" className="btn btn-secondary" onClick={login}>
          Submit
        </button>
      </form>
      <h1>{loginStatus}</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: auto;
  padding: auto;
  width: 18rem;
  color: black;

  .image {
    width: 21em;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
