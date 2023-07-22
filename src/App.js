import "./App.css";
import { Login } from "./Components/Login/Login";
import { Top } from "./Components/Top/Top";
import { Home } from "./Components/Home/Home";
import { BrowserRouter, Route, Routes, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Signup from "./Signup/Signup";
import About from "./Components/About/About";
import ConsumerHome from "./Components/Consumer/ConsumerHome";
import ConsumerTop from "./Components/Consumer/ConsumerTop/ConsumerTop";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";
import VehicleRegisteration from "./Components/Consumer/VehicleRegistration/VehicleRegistration";
import ConfirmationAlertWrapper from "./ConfirmationAlertWrapper";
import axios from "axios";
import PastService from "./Components/Consumer/PastService/PastService";

function ProtectedRoute({ children, userData }) {
  if (userData) {
    return children;
  }
  return <h1 style={{ marginTop: "80px" }}>Kindly Login First</h1>;
}

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [userData, setUserData] = useState(null);
  const [change, setChange] = useState(false);
  const API_URL = "http://localhost:8000/login";

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post(API_URL, {
        email: email,
        password: password,
      });
      setUserData(res.data);
    };
    if (change) {
      fetchData();
      setChange(false);
    }
  }, [change]);

  

  return (
    <div className="App">
      {!userData ? <Top /> : <ConsumerTop userData={userData} />}
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route
          path="/Login.html"
          element={
            <Login
              email={email}
              password={password}
              name={name}
              mobile={mobile}
              setEmail={setEmail}
              setPassword={setPassword}
              setName={setName}
              setMobile={setMobile}
              userData={userData}
              setUserData={setUserData}
            />
          }
        />
        <Route
          path="/Signup.html"
          element={
            <Signup
              email={email}
              password={password}
              name={name}
              mobile={mobile}
              setEmail={setEmail}
              setPassword={setPassword}
              setName={setName}
              setMobile={setMobile}
            />
          }
        />
        <Route path="/about.html" element={<About userData={userData} />} />
        <Route path="/contact.html" element={<Contact />} />
        <Route path="/services1.html" element={<Services />} />
        <Route
          path="ConsumerHome.html"
          element={
            <ProtectedRoute
              children={
                <ConsumerHome
                  userData={userData}
                  change={change}
                  setChange={setChange}
                />
              }
              userData={userData}
            ></ProtectedRoute>
          }
        />
        <Route
          path="past.html"
          element={
            <ProtectedRoute
              children={
                <PastService
                  userData={userData}
                  change={change}
                  setChange={setChange}
                />
              }
              userData={userData}
            ></ProtectedRoute>
          }
        />
        <Route
          path="register.html"
          element={
            <ProtectedRoute
              children={
                <VehicleRegisteration
                  userData={userData}
                  change={change}
                  setChange={setChange}
                />
              }
              userData={userData}
            ></ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={<h1 style={{ marginTop: "80px" }}>No Such Page</h1>}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
