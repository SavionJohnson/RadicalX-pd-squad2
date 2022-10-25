import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../../context/AuthContext";
import eye from "../../../assets/eye.svg";
import eyeSlash from "../../../assets/eye-slash.svg";
import lock from "../../../assets/lock.svg";
import sms from "../../../assets/sms.svg";
import logo from "../../../assets/RadicalX-Black-Logo 1.png";
import "../Login/Login.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const navigate = useNavigate();
  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      console.log("New User Created & Signed in!");
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
        <span className="header-text">Sign Up</span>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-container">
            <img className="input-icon" src={sms} alt="emailIcon" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="text-input"
              type="email"
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
          <button className="button">Sign Up</button>
          <Link to="/" className="link-text">
            <p>Already have an account?</p>
          </Link>
        </form>
      </div>
    </div>
  );
}
