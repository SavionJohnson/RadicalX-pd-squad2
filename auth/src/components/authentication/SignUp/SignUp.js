import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../../context/AuthContext";
import logo from "../../../assets/RadicalX-Black-Logo 1.png";
import "../Login/Login.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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
      <div className="left"></div>

      <div className="right">
        <img className="logoImage" src={logo} alt="Logo" />
        <form className="signin" onSubmit={handleSubmit}>
          <h2 className="logo">Sign Up</h2>
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
          <button className="button">Sign Up</button>
          <Link to="/" className="underline">
            <p>Already have an account?</p>
          </Link>
        </form>
      </div>
    </div>
  );
}
