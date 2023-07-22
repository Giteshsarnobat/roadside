import axios from "axios";
import React, { useState } from "react";
import Services from "../Services/Services";
import { BrowserRouter, Route, Routes, useHistory } from "react-router-dom";

const ConsumerHome = ({ userData, setChange }) => {
  const API_URL = "http://localhost:8000/raise";

  let name1 = "";
  let mobile1 = "";
  let email1 = "";
  try {
    name1 = userData.user.name;
    mobile1 = userData.user.mobile;
    email1 = userData.user.email;
  } catch {}

  const [name, setName] = useState(name1);
  const [mobile, setMobile] = useState(mobile1);
  const [email, setEmail] = useState(email1);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("Mumbai");
  const [imgProb, setImgProb] = useState("");
  const [cars, setCars] = useState(userData.user.cars);
  const [bikes, setBikes] = useState(userData.user.bikes);
  let cars1;
  if (cars.length < 1 && bikes.length < 1) {
    cars1 = cars[0];
  } else if (cars.length > 0) {
    cars1 = cars[0];
  } else {
    cars1 = bikes[0];
  }
  const [car, setCar] = useState(cars1);

  const [bike, setBike] = useState(bikes[0]);

  const submit = async (event) => {
    event.preventDefault();
    if (typeof car === "undefined") {
      alert("Please Select Vehicle");
      return;
    }

    const addData = {
      name: name,
      mobile: mobile,
      email: email,
      location: location,
      vehicle: car,
      description: description,
      file: imgProb,
    };
    const data = { email: email, password: userData.user.password, addData };
    let res = await axios.post(API_URL, data);
    alert(res.data);
    setChange(true);
  };

  return (
    <div
      className="d-flex"
      style={{ marginTop: "80px", width: "100vw", minHeight: "70vh" }}
    >
      <div className="col-12 col-lg-6">
        <h1 style={{ marginLeft: "20px" }}>Welcome {userData.user.name} </h1>
        <form
          onSubmit={submit}
          className="inventorylogin mb-2"
          action="Login.html"
          id="signupForm"
          style={{ marginTop: "50px" }}
        >
          <div className="px-4">
            <label>Name</label>
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
            <label>Mobile Number</label>
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
            <label>Email</label>
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
            <label>Location</label>
            <select
              className="form-select"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="Mumbai">Mumbai</option>
              <option value="Navi-Mumbai">Navi-Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
            </select>
          </div>
          <div className="px-4" style={{ marginTop: 10 }}>
            <label forName="cars" style={{ marginRight: 10 }}>
              Choose Vehicle:{" "}
            </label>
            <select
              name="cars"
              id="cars"
              className="form-select"
              value={typeof car !== undefined ? "" : car.vehNumber}
              onChange={(e) => {
                const selectedCar = cars.find(
                  (item) => item.vehNumber === e.target.value
                );
                if (typeof selectedCar === "undefined") {
                  const selectedCar = bikes.find(
                    (item) => item.vehNumber === e.target.value
                  );
                  setCar(selectedCar);
                } else {
                  setCar(selectedCar);
                }
              }}
            >
              <optgroup label="Cars">
                {cars.length > 0 ? (
                  cars.map((item) => (
                    <option value={item.vehNumber} key={item.vehNumber}>
                      {item.vehNumber}
                    </option>
                  ))
                ) : (
                  <option disabled>No cars available</option>
                )}
              </optgroup>
              <optgroup label="Bikes">
                {bikes.length > 0 ? (
                  bikes.map((item) => (
                    <option value={item.vehNumber} key={item.vehNumber}>
                      {item.vehNumber}
                    </option>
                  ))
                ) : (
                  <option disabled>No bikes available</option>
                )}
              </optgroup>
            </select>
          </div>
          <div className="px-4" style={{ marginTop: 10 }}>
            <label>Please mention your problem</label>
            <textArea
              className="form-control"
              type="text"
              placeholder="Descripton"
              required
              id="password"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          {/* <div className="px-4" style={{ marginTop: 10 }}>
            <input
              className="form-control"
              type="file"
              value={imgProb}
              onChange={(e) => {
                setImgProb(e.target.value);
              }}
            />
          </div> */}

          <div className="px-4 my-2" style={{ textAlignLast: "left" }}></div>
          <div className="px-4">
            <button
              type="submit"
              className="btn container-fluid"
              style={{ backgroundColor: "#ffd400" }}
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsumerHome;
