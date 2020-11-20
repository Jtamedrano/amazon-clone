import styled from "styled-components";

const AuthFormStyle = styled.div`
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

    .errorMessage {
      text-align: center;
      color: rgb(250, 0, 0);
      background-color: rgb(250, 210, 210);
      border-color: rgb(200, 0, 0);
      border: 1px solid;
      padding: 5px;
      margin-bottom: 10px;
    }

    form {
      .loginBtn,
      .createAccountBtn {
        background-color: #f0c14b;
        border: 1px solid;
        border-color: #a88734 #9c7e31 #846a29;
        border-radius: 3px;
        width: 100%;
        height: 30px;
        color: #111111;
        margin-bottom: 10px;
      }

      .signupDisclosures {
        display: flex;
        align-items: center;
        font-size: 16px;
        margin: 0 auto 10px;

        span {
          flex: 0 1;
          flex-basis: 90%;
        }
      }
    }

    p {
      margin-bottom: 10px;
      font-size: 12px;
    }

    .signupBtn {
      border: 1px solid;
      border-color: darkgray;
      border-radius: 3px;
      width: 100%;
      height: 30px;
      color: #111111;
    }
  }
`;

export default AuthFormStyle;
