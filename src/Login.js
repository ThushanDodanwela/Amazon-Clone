import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.production.min";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alr="logo"
        />
      </Link>

      <div className="login__Container">
        <h1> Sign-in</h1>

        <form className="login__form">
          <h5>Email : </h5>
          <input type="email" value={email} />

          <h5>Password : </h5>
          <input type="password" value={password} />

          <button className="login__Signin">Sign In</button>
        </form>

        <p>
          {" "}
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>

        <button className="login__Register">
          {" "}
          Create Your Amazon Account{" "}
        </button>
      </div>
    </div>
  );
}

export default Login;
