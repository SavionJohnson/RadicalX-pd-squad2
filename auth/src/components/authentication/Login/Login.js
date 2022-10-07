import React, { useState } from "react";
import { /*Link,*/ useNavigate } from "react-router-dom";
import { UserAuth } from "../../../context/AuthContext";
import logo from "../../../assets/RadicallX-Black-Logo 1.png";
import { auth } from "../../../firebase";
import {
  browserLocalPersistence,
  browserSessionPersistence,
  sendPasswordResetEmail,
  setPersistence,
} from "firebase/auth";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      console.log("Signed in!");
      navigate("/dashboard");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
      alert(e.message);
    }
  };

  const handleChecked = () => {
    // Box is checked because google default is to persist and remember user
    setRememberMe(!rememberMe);
    setPersistence(
      rememberMe
        ? (auth, browserLocalPersistence)
        : (auth, browserSessionPersistence)
    )
      .then(() => {
        // Session: Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorCode, errorMessage);
      });
  };

  const forgotPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        alert("Password reset email sent!");
        // ..
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(errorMessage);
        // ..
      });
  };

  return (
    <div className="container">
      <div className="left"></div>

      <div className="right">
        <form className="signin" onSubmit={handleSubmit}>
          <img className="logoImage" src={logo} alt="Logo" />
          <div className="form">
            <h2 className="title">Login</h2>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="form">
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="content">
            <div>
              <label className="checkText">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleChecked}
                />
                Remember Me
              </label>
            </div>
            {/* This is not a feature on the Figma board and is not part of ClickUp Tasks
            for this week */}
            {/* <Link to="/signup" className="underline">
              <p>Create an account</p>
            </Link> */}
            <button className="pwText" onClick={forgotPassword}>
              Forgot Password?
            </button>
          </div>
          <button className="button">Login</button>
        </form>
      </div>
    </div>
  );
}
