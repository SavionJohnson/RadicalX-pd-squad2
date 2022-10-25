import { auth } from "../../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/RadicalX-Black-Logo 1.png";
import sms from "../../../assets/sms.svg";
import "./Login.css";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const passwordReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        alert("Password reset email sent!");
        console.log("Password reset email sent!");
        // ..
        navigate("/");
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
      <div className="left-container"></div>

      <div className="right-container">
        <img className="logo-image" src={logo} alt="Logo" />
        <div className="form">
          <span className="header-text">Forgot Password</span>
          <div className="input-container">
            <img className="input-icon" src={sms} alt="emailIcon" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="text-input"
              type="email"
              placeholder="Email"
            />
          </div>
          <button className="button" onClick={passwordReset}>
            Send Reset Email
          </button>
        </div>
      </div>
    </div>
  );
}
