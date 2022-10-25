import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../../context/AuthContext";
import { auth } from "../../../firebase";
import {
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import eye from "../../../assets/eye.svg";
import eyeSlash from "../../../assets/eye-slash.svg";
import lock from "../../../assets/lock.svg";
import sms from "../../../assets/sms.svg";
import tickSquare from "../../../assets/tickSquare.svg";
import untickedSquare from "../../../assets/untickedSquare.svg";
import logo from "../../../assets/RadicalX-Black-Logo 1.png";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      auth
        .setPersistence(
          isChecked
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

  return (
    <div className="container">
      <div className="left-container"></div>

      <div className="right-container">
        <img className="logo-image" src={logo} alt="Logo" />
        <span className="header-text">Login</span>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-container">
            <img className="input-icon" src={sms} alt="emailIcon" />
            <input
              className="text-input"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="input-container">
            <img className="input-icon" src={lock} alt="pwIcon" />
            <input
              className="text-input"
              type={isRevealPwd ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <img
              className="pwreveal-icon"
              onClick={() => setIsRevealPwd((prevState) => !prevState)}
              src={isRevealPwd ? eye : eyeSlash}
              alt="revealPassword"
            />
          </div>
          <div className="options-container">
            <span
              className="remember-text"
              onClick={() => setIsChecked((prevState) => !prevState)}
            >
              <img
                className="checkbox"
                src={isChecked ? tickSquare : untickedSquare}
                alt="check"
              />
              Remember me
            </span>
            <Link to="/forgotpassword" className="link-text">
              <p>Forgot Password?</p>
            </Link>
          </div>
          <button className="button">Login</button>
        </form>
        <Link to="/signup" className="link-text">
          <p>Need an account?</p>
        </Link>
      </div>
    </div>
  );
}
