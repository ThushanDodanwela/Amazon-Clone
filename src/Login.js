import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    //firebase login

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history("/");
      })
      .catch((error) => alert(error.message));
  };

  const Register = (e) => {
    e.preventDefault();

    //Firebase register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);

        if (auth) {
          history("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

      <div className="login__Container">
        <h1> Sign-in</h1>

        <form className="login__form">
          <h5>Email : </h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password : </h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="login__Signin">
            Sign In
          </button>
        </form>

        <p>
          {" "}
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>

        <button type="submit" onClick={Register} className="login__Register">
          {" "}
          Create Your Amazon Account{" "}
        </button>
      </div>
    </div>
  );
}

export default Login;
