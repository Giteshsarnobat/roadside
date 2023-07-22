import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = ({
  email,
  password,
  setEmail,
  setPassword,
  userData,
  setUserData,
}) => {
  const API_URL = "http://localhost:8000/login"; // Change to local host
  const [remCheck, setRemCheck] = useState(false);
  const nav = useNavigate();
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userDetailsSaved"));
    if (storedData !== null) {
      setEmail(storedData.user.email);
      setPassword(storedData.user.password);
    }
  }, []);

  const validateForm = (e) => {
    e.preventDefault();

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

    // If all validations pass, the form will be submitted
    //document.getElementById("loginform").submit();
    return true;
  };

  const submit = async (e) => {
    e.preventDefault();
    const data = { email: email, password: password };
    try {
      let res = await axios.post(API_URL, data);

      if (res.data.authenticate) {
        alert("Succesful Login");

        setUserData(res.data);
        if (remCheck) {
          if (remCheck) {
            const dataToStore = {
              user: {
                email: email,
                password: password,
              },
            };
            localStorage.setItem(
              "userDetailsSaved",
              JSON.stringify(dataToStore)
            );
          }
        }
        nav("/ConsumerHome.html");
      } else {
        alert("Invalid Login Credentials");
      }
    } catch {
      alert("Connection to the Server Failed");
    }
  };

  return (
    <div id="LoginPage" style={{ marginTop: "60px" }}>
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ height: "650px" }}
        id="image"
      >
        <div
          className="col-sm-12 col-md-4  text-center "
          style={{
            backgroundColor: "white",
            boxShadow: "0 2px 4px rgba(19, 19, 19, 3)",
            borderRadius: "10px",
          }}
        >
          <img
            src={require("./Logo.jpg")}
            alt=""
            width="50px"
            style={{ marginTop: "40px" }}
          />
          <h4 style={{ marginTop: "20px" }}>Login</h4>
          <p className="my-4">Use your email address to continue</p>
          <form
            id="loginform"
            className="inventorylogin mb-2"
            onSubmit={submit}
          >
            <div className="px-4" style={{ marginTop: "30px" }}>
              <input
                className="form-control"
                type="email"
                placeholder="Email address"
                required
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="px-4" style={{ marginTop: "10px" }}>
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                required
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="px-4 my-2" style={{ textAlignLast: "left" }}>
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="remember"
                  onChange={(e) => setRemCheck(!remCheck)}
                />
                Remember me
              </label>
            </div>
            <div className="px-4" style={{ marginTop: "20px" }}>
              <button
                type="submit"
                className="btn container-fluid"
                style={{ backgroundColor: "#ffd400" }}
              >
                Continue
              </button>
            </div>
          </form>
          <form action="Signup.html">
            Don't have an account?
            <button
              className="btn btn-link mt-0"
              style={{ textDecoration: "none", fontWeight: "bold" }}
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
