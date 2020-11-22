import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import logo from "./Amazondotcom.png";
import InputGroup from "./LoginSignup/InputGroup";
import AuthFormStyle from "./StyleComponents/AuthFormStyle";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [missingInfo, setMissingInfo] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  const signIn = (evt) => {
    evt.preventDefault();

    //Firebase code
    if (!email || !password) {
      setMissingInfo(true);
      setErrorMessage("Please Enter Missing Information");
    } else {
      setMissingInfo(false);
      auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
          console.log(auth);
          // if success creates a new user
          if (auth) {
            history.push("/");
          }
        })
        .catch((err) => console.warn(err.message));
    }
  };

  return (
    <AuthFormStyle>
      <Link to="/">
        <img className="loginLogo" src={logo} alt="Amazon Logo" />
      </Link>
      <div className="loginFormContainer">
        <h1>Sign In</h1>
        <form onSubmit={(evt) => signIn(evt)}>
          <InputGroup
            name="signupEmailInput"
            label={"E-mail: "}
            type="email"
            value={email}
            handleChange={(e) => setEmail(e)}
            missing={missingInfo && email === ""}
          />
          <InputGroup
            name="signupPasswordInput"
            label={"Password: "}
            type="password"
            value={password}
            handleChange={(e) => setPassword(e)}
            missing={missingInfo && password === ""}
          />
          <input className="loginBtn" type="submit" value="Login" />
        </form>
        <p>
          By signing-in you agree to Amazon~Clone Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <Link to="/signup">
          <button className="signupBtn">
            Create Your Amazon Clone Account
          </button>
        </Link>
      </div>
    </AuthFormStyle>
  );
}

export default Login;
