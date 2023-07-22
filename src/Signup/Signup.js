import axios from "axios";
import "./Signup.css";
import React, { useState } from "react";

const Signup = ({
  email,
  password,
  mobile,
  name,
  setEmail,
  setPassword,
  setName,
  setMobile,
}) => {
  const API_URL = "http://localhost:8000/signup";

  function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Password length validation
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return false;
    }

    // Uppercase letter validation
    if (!/[A-Z]/.test(password)) {
      alert("Password must contain at least one uppercase letter.");
      return false;
    }

    // Lowercase letter validation
    if (!/[a-z]/.test(password)) {
      alert("Password must contain at least one lowercase letter.");
      return false;
    }

    // Numeric digit validation
    if (!/[0-9]/.test(password)) {
      alert("Password must contain at least one numeric digit.");
      return false;
    }

    // Special character validation
    if (!/[!@#$%^&*]/.test(password)) {
      alert("Password must contain at least one special character (!@#$%^&*).");
      return false;
    }

    // Email format validation using regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    // Password validation
    if (password.trim() === "") {
      alert("Please enter a password.");
      return false;
    }

    // Check if the entered email and password match the hardcoded values

    // If all validations pass, the form will be submitted
    return true;
  }

  const submit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const data = {
      email: email,
      password: password,
      name: name,
      mobile: mobile,
    };
    try {
      let res = await axios.post(API_URL, data);
      alert(res.data);
    } catch {
      alert("Connection to the Server Failed");
    }
  };
  return (
    <div id="SignupPage" style={{ marginTop: "60px" }}>
      <div
        className="row justify-content-center align-item-center"
        style={{ height: "500px", marginTop: "60px" }}
        id="image"
      >
        <div
          className="col-sm-12 col-md-4 text-center"
          style={{
            backgroundColor: "white",
            boxShadow: "0 2px 4px rgba(19, 19, 19, 3)",
            borderRadius: 10,
            marginTop: "80px",
          }}
        >
          <img
            src={require("./Logo.jpg")}
            alt=""
            width="50px"
            style={{ marginTop: 40 }}
          />
          <h4 style={{ marginTop: 15 }}>Sign up</h4>
          <p>Create an online account with the RA</p>
          <form
            onSubmit={submit}
            className="inventorylogin mb-2"
            action="Login.html"
            id="signupForm"
          >
            <div className="px-4">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Name"
                required
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="px-4" style={{ marginTop: 10 }}>
              <input
                className="form-control"
                type="text"
                placeholder="Mobile No."
                pattern="[789][0-9]{9}"
                required
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="px-4" style={{ marginTop: 10 }}>
              <input
                className="form-control"
                type="email"
                placeholder="Email address"
                required
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="px-4" style={{ marginTop: 10 }}>
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                required
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="px-4">
              <button
                type="submit"
                className="btn container-fluid"
                style={{ backgroundColor: "#ffd400", marginTop: "10px" }}
              >
                Create Account
              </button>
            </div>
          </form>
          <form action="Login.html">
            Already have an account?
            <button
              className="btn btn-link mt-0"
              style={{ textDecoration: "none", fontWeight: "bold" }}
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
