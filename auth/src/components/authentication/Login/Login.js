import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../../context/AuthContext";
import logo from "../../../assets/RadicalX-Black-Logo 1.png";
import { auth } from "../../../firebase";
import {
  browserLocalPersistence,
  browserSessionPersistence,
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
      auth
        .setPersistence(
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
  };

  return (
    <div className="container">
      <div className="left"></div>

      <div className="right">
        <img className="logoImage" src={logo} alt="Logo" />
        <form className="signin" onSubmit={handleSubmit}>
          <h2 className="logo">Login</h2>
          <div className="form">
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
            {/* <div> */}
            <label className="label2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleChecked}
              />
              Remember Me
            </label>
            {/* </div> */}
            <Link to="/forgotpassword" className="underline">
              <p>Forgot Password?</p>
            </Link>
          </div>
          <button className="button">Login</button>
          <Link to="/signup" className="underline">
            <p>Need an account?</p>
          </Link>
        </form>
      </div>
    </div>
  );
}
