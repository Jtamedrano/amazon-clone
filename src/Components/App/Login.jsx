import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./Amazondotcom.png";

const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;

  .loginLogo {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    object-fit: contain;
    width: 100px;
  }

  .loginFormContainer {
    display: flex;
    flex-flow: column;
    width: 300px;
    height: fit-content;
    border-radius: 5px;
    border: 1px solid lightgray;
    padding: 20px;

    h1 {
      font-weight: 500;
      margin-bottom: 20px;
    }

    form {
      .inputGroup {
        display: flex;
        flex-flow: column;

        label {
          margin-bottom: 5px;
        }
        input {
          height: 30px;
          margin-bottom: 10px;
          background-color: white;
          width: 98%;
          padding-left: 0.5em;
        }
      }

      .loginBtn {
        background-color: #f0c14b;
        border: 1px solid;
        border-color: #a88734 #9c7e31 #846a29;
        border-radius: 3px;
        width: 100%;
        height: 30px;
        color: #111111;
        margin-bottom: 10px;
      }
    }

    p {
      margin-bottom: 10px;
      font-size: 12px;
    }

    .createAccountBtn {
      border: 1px solid;
      border-color: darkgray;
      border-radius: 3px;
      width: 100%;
      height: 30px;
      color: #111111;
    }
  }
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  const signIn = (evt) => {
    evt.preventDefault();

    //Firebase code
  };

  const register = (evt) => {
    evt.preventDefault();

    //Firebase code
  };

  return (
    <LoginStyle>
      <Link to="/">
        <img className="loginLogo" src={logo} alt="Amazon Logo" />
      </Link>
      <div className="loginFormContainer">
        <h1>Sign In</h1>
        <form onSubmit={(evt) => signIn(evt)}>
          <div className="inputGroup">
            <label htmlFor="loginEmailInput">E-mail: </label>
            <input
              type="email"
              className="loginEmailInput"
              name="loginEmailInput"
              id="loginEmailInput"
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="loginPasswordInput">Password: </label>
            <input
              type="password"
              className="loginPasswordInput"
              name="loginPasswordInput"
              id="loginPasswordInput"
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
            />
          </div>
          <input className="loginBtn" type="submit" value="Login" />
        </form>
        <p>
          By signing-in you agree to Amazon~Clone Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="createAccountBtn" onClick={(evt) => register(evt)}>
          Create Your Amazon Clone Account
        </button>
      </div>
    </LoginStyle>
  );
}

export default Login;
