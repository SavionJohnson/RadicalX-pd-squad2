import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../../context/AuthContext";
import logo from "../../../assets/RadicallX-Black-Logo 1.png";
import { auth } from "../../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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

  const forgotPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        alert("Password reset email sent!");
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
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
        <form className="signin" onSubmit={handleSubmit}>
          <h2 className="title">Login</h2>
          <div className="form">
            {/* <label className="label">Email</label> */}
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="form">
            {/* <label className="label">Password</label> */}
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="content">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>
            {/* This is not a feature on the Figma board and is not part of ClickUp Tasks
            for this week */}
            {/* <Link to="/signup" className="underline">
              <p>Create an account</p>
            </Link> */}
            <button onClick={forgotPassword}>Forgot Password?</button>
          </div>
          <button className="button">Login</button>
        </form>
      </div>
    </div>
  );
}
