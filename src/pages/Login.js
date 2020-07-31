import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";
import loginImg from "../images/login-img1.svg";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="test container1">
      <img src={loginImg} alt="git user" className="geekLogo" />
      <h1 className="heading1">Git Geek</h1>
      <button className="btn1" onClick={loginWithRedirect}>
        Login/ Sign Up
      </button>
    </div>
  );
};

export default Login;
