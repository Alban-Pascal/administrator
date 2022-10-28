import * as React from "react";
import { useState, useEffect } from "react";

import styled from "styled-components";
import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:9999/routes/register",
});

export default function Registration() {
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  useEffect(() => {
    async function getPost() {
      const response = await client.get("/Registration");
      setEmailReg(response.data);
    }
    getPost();
  }, []);

  const register = () => {
    axios
      .post("http://localhost:9999/routes/register", {
        email: emailReg,
        password: passwordReg,
      })
      .then((response) => {
        console.log(response);
      });
  };

  // Axios({
  //   method: "post",
  //   url: "http://localhost:9999/routes/register",
  //   data: {
  //     email: emailReg,
  //     password: passwordReg,
  //   },
  // });
  // };

  return (
    <Wrapper>
      <div>
        <h1>Access for a new partner</h1>
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
                setEmailReg(e.target.value);
              }}
              value={emailReg}
              required
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlfor="InputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="InputPassword1"
              onChange={(e) => {
                setPasswordReg(e.target.value);
              }}
              value={passwordReg}
              required
            />
          </div>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={register}
          >
            Submit
          </button>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: auto;
  padding: auto;
  width: 18rem;
  color: black;
`;
