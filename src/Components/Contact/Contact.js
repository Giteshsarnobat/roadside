import { useState } from "react";
import "./Contact.css";
import Mapimage from "./IndiaMap.png";
import axios from "axios";

function Contact() {
  const API_URL = "http://localhost:8000/contact";
  const [selectedButton, setSelectedButton] = useState("Sales");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const validateForm = () => {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const data = { name: name, email: email, phone: phone, message: message };
    if (selectedButton === "Sales") {
      const newData = { data, sales: 1 };
      const res = await axios.post(API_URL, newData);
      alert(res.data);
    } else if (selectedButton === "Support") {
      const newData = { data, sales: 2 };
      const res = await axios.post(API_URL, newData);
      alert(res.data);
    } else if (selectedButton === "Escalations") {
      const newData = { data, sales: 3 };
      const res = await axios.post(API_URL, newData);
      alert(res.data);
    }
  };

  return (
    <>
      <div className="row justify-content-center" id="row">
        {/* <!-- Address --> */}
        <div className="col-12 col-md-6 col-lg-6 p-5">
          <div>
            <h5 className="contact">Contact Us</h5>
            <h1 className="heading">Get In Touch!</h1>

            <h5>Head Office</h5>
            <p>
              C-Dac Raintree Marg, Near Bharati Vidya Peeth, Opposite Of
              Kharghar Railway Station, Sector 7, Cbd Belapur, Mumbai,
              Maharashtra 400614
            </p>
            <h5>Phone</h5>
            <p>+91 - 1234567890</p>
            <h5>Email</h5>
            <p>hello@readyassist.in</p>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div id="parent" className="row justify-content-center">
            {/* <!-- button --> */}
            <div
              className="btn-group col-12"
              role="group"
              aria-label="Basic example"
              id="btn"
            >
              <button
                type="button"
                className={`btn btn-primary ${
                  selectedButton === "Sales" ? "selected" : ""
                }`}
                onClick={() => handleButtonClick("Sales")}
              >
                Sales
              </button>
              <button
                type="button"
                className={`btn btn-primary ${
                  selectedButton === "Support" ? "selected" : ""
                }`}
                onClick={() => handleButtonClick("Support")}
              >
                Support
              </button>
              <button
                type="button"
                className={`btn btn-primary ${
                  selectedButton === "Escalations" ? "selected" : ""
                }`}
                onClick={() => handleButtonClick("Escalations")}
              >
                Escalations
              </button>
            </div>

            {/* <!-- Input --> */}
            <form onSubmit={handleSubmit}>
              <h6
                style={{
                  color: "#bf32db",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                You are connecting with the <b>{selectedButton}</b> Team
              </h6>
              <div id="input">
                <input
                  className="form-control mb-2 bg-light col-12"
                  type="text"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  className="form-control mb-2 bg-light col-12"
                  type="Phone"
                  placeholder="Phone"
                  required
                  pattern="[789][0-9]{9}"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <input
                  className="form-control mb-2 bg-light col-12"
                  type="Email"
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <textarea
                  className="form-control mb-3 bg-light"
                  placeholder="Message"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {/* <!-- <label for="floatingTextarea2">Comments</label> --> */}

                <button className="btn btn-success" id="button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* map image */}

      <div className="row justify-content-center" id="map-content">
        <div className="text-center">
          <div>
            <span>
              Ever since our inception we have been enabling people to
              #AlwaysMoveForward. If you would love to see us serving in your
              region, please drop an email on coverage@readyassist.in
            </span>
          </div>
          <img src={Mapimage} className="col-12 col-md-12" id="map" />
        </div>
      </div>
    </>
  );
}

export default Contact;
