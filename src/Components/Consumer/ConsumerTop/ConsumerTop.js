import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//CSS for only Logout button is done. Check for the Login button soon

const ConsumerTop = ({ userData }) => {
  const nav = useNavigate();
  const logout = () => {
    localStorage.setItem("userDetailsSaved", null);
    nav("/Login.html");
  };

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light fixed-top customNav"
        style={{ padding: 0 }}
      >
        <div className="container-fluid customNav">
          <a className="navbar-brand" href="#">
            <img src={require("./Logo.jpg")} /> Ready Assist
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="ConsumerHome.html">
                  Raise an Issue
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="past.html">
                  Past Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="register.html">
                  Register New Vehicle
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="profile.html">
                  Profile
                </Link>
              </li> */}
            </ul>
            <form onSubmit={logout}>
              <button type="submit" className="logout-btn">
                Log Out
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default ConsumerTop;
