import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthFormStyle from "./StyleComponents/AuthFormStyle";
import logo from "./Amazondotcom.png";
import InputGroup from "./LoginSignup/InputGroup";
import { auth } from "../../firebase";

function Signup() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [missingInfo, setMissingInfo] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const signupHandler = (evt) => {
    evt.preventDefault();
    // begin testing for all possible fails
    if (!email || !password || !confPass) {
      setMissingInfo(true);
      setErrorMessage("Please Enter Missing Information");
    } else if (email && !password && !confPass) {
      setMissingInfo(true);
      setErrorMessage("Please Enter Password");
    } else if (email && password !== confPass) {
      setMissingInfo(true);
      setErrorMessage("Passwords don't match");
    } else if (!agreeTerms) {
      setMissingInfo(true);
      setErrorMessage("Please agree to the Terms & Conditions");
    } else {
      setMissingInfo(false);
      auth
        .createUserWithEmailAndPassword(email, password)
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
        {missingInfo && <div className="errorMessage">{errorMessage}</div>}
        <form onSubmit={(evt) => signupHandler(evt)}>
          <InputGroup
            name="signupEmailInput"
            label={"E-mail: "}
            type="email"
            value={email}
            handleChange={(e) => setEmail(e)}
            missing={missingInfo && email === ""}
            autoType={"email"}
          />
          <InputGroup
            name="signupPasswordInput"
            label={"Password: "}
            type="password"
            value={password}
            handleChange={(e) => setPassword(e)}
            missing={missingInfo && password === ""}
            autoType={"new-password"}
          />
          <InputGroup
            name="signupConfirmPasswordInput"
            label={"Confirm Password: "}
            type="password"
            value={confPass}
            handleChange={(e) => setConfPass(e)}
            missingInfo={missingInfo}
            missing={missingInfo && (confPass === "" || password !== confPass)}
            autoType={"off"}
          />
          <div className="signupDisclosures">
            <span>I have read and agreed to the Terms and Conditions. </span>
            <input
              type="checkbox"
              name="signupAgree"
              id="signupAgree"
              className="signupAgree"
              checked={agreeTerms}
              onChange={(e) => {
                let updateValue = agreeTerms ? false : true;
                setAgreeTerms(updateValue);
              }}
            />
          </div>

          <input
            className="createAccountBtn"
            type="submit"
            value="Create Account"
          />
        </form>
        <p>
          By signing-up you agree to Amazon~Clone Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <Link to="/login">
          <button className="signupBtn">
            Already have an account? Login Here
          </button>
        </Link>
      </div>
    </AuthFormStyle>
  );
}

export default Signup;
