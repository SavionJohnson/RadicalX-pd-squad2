import { auth } from "../../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import logo from "../../../assets/RadicalX-Black-Logo 1.png";
import { useNavigate } from "react-router-dom";
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
      <div className="left"></div>

      <div className="right">
        <img className="logoImage" src={logo} alt="Logo" />
        <div className="signin">
          <h2 className="logo">Forgot Password</h2>
          <div className="form">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="input"
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
