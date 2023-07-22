import React from "react";
import "./About.css";
import Aboutimg from "./about-us.png";
import Towing from "./Towing-aboutus.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const about = () => {
  return (
    <div>
      <div className="row" id="aboutus-main">
        <div className="col-12 col-lg-6">
          <h1>About Us</h1>
          <span>
            We provide 24hrs roadside assistance for both Bikes &amp; Cars
            anytime at any nook &amp;
          </span>
          <br />
          <span>
            corner of the country to our Subscribed Customers. We also provide
            on-demand
          </span>
          <br />
          <span>
            support to customers in cities like Bangalore, Hyderabad, Mumbai,
            Pune, Delhi,
          </span>
          <br />
          <span>Gurgaon, Chennai and more.</span>
          <br />
        </div>
        <img src={Aboutimg} className="col-12 col-lg-6" />
      </div>
      <div className="row" id="aboutus-info">
        <div className="col-12 col-lg-6">
          <h5>AT YOUR SERVICE</h5>
          <h1>Road Side Assistance You can count on</h1>
          <img
            src={require("./BikeBreak.jpg")}
            className="col-12 col-lg-6"
            style={{ paddingTop: 20, paddingBottom: 30 }}
          />
          <br />
          <span>
            ReadyAssist is India's leading technology backed roadside assistance
            and vehicle lifecycle management company, providing 24/7 real-time
            breakdown and on-spot repair service across 19000+ pin codes
            covering 700+ districts in India. Powered by a deep-tech platform
            and driven by a Pan-India network of more than 5000+ skilled and
            groomed mechanics, we ensure Reliability &amp; Quality without
            compromising on Speed.
          </span>
          <br />
          <br />
          <span>
            Currently, we provide 24hrs roadside assistance for both Bikes &amp;
            Cars anytime at any nook &amp; corner of the country to our
            Subscribed Customers. We also provide on-demand support to customers
            in cities like Bangalore, Hyderabad, Mumbai, Pune, Delhi, Gurgaon,
            Chennai and more.
          </span>
        </div>
        <div className="col-12 col-lg-6">
          <ul>
            <li>Rated 4.7 Stars in Google</li>
            <li>Largest network of EV trained mechanics</li>
            <li>250+ strong people team</li>
            <li>Serving the purpose through technology</li>
            <li>An ISO 27001:2013 certified company</li>
          </ul>
          <img src={Towing} className="col-12 col-lg-6" />
          <br />
        </div>
      </div>
      <div className="container text-center py-5">
        <h2 className="text">Board Members</h2>
        <p className="text">
          As a diverse company in emergency assistance services , our leaders
          have embraced strong governance, epitomize the company's Purpose,
          Values, and Principles, and bring to bear the practical wisdom and
          seasoned judgment that comes from significant leadership skill and
          experience. The current Board reflects an appropriate mix of skills,
          experience, and qualifications that are relevant to the business and
          governance of the Company and that help further the long-term
          interests of our shareholders. Each Director also has individual
          experiences that allow them to provide practical insight and unique
          perspectives in the boardroom. Collectively, our Directors have led
          global businesses and finance organizations, have founded startups,
          have successfully navigated shifting media and retail landscapes, have
          guided strategic transformations, and have held significant governance
          roles. they have worked in industries as varied as legal, healthcare,
          retail, deep tech, insurance, risk analytics, underwriting,
          entertainment and information technology.
        </p>
        <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
          <div className="col">
            <div className="card board-card">
              <img
                src={require("./Raj.jpg")}
                className="card-img-top board-card-top"
                alt="..."
              />
              <div className="card-body ">
                <h3 className="card-title">Raj Chaudhari</h3>
                <p className="text-muted">
                  Co-Founder &amp; Managing Director - ReadyAssist
                </p>
                <p className="card-text">Board of Directors</p>
              </div>
              <div className="d-flex justify-content-evenly">
                <a
                  href="https://www.linkedin.com/in/raj-chaudhari-522b56177/"
                  target="blank"
                >
                  <i className="bi bi-linkedin" />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                  <i className="bi bi-instagram" />
                </a>
                <a href="mailto:hello@readyassist.in">
                  <i className="bi bi-envelope-check-fill" />
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card board-card">
              <img
                src={require("./gitesh.png")}
                className="card-img-top board-card-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">Gitesh Sarnobat</h3>
                <p className="text-muted">
                  Co-Founder &amp; Managing Director - ReadyAssist
                </p>
                <p className="card-text">Board of Directors</p>
              </div>
              <div className="d-flex justify-content-evenly">
                <a
                  href="https://www.linkedin.com/in/gitesh-sarnobat-66972a184"
                  target="blank"
                >
                  <i className="bi bi-linkedin" />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                  <i className="bi bi-instagram" />
                </a>
                <a href="mailto:hello@readyassist.in">
                  <i className="bi bi-envelope-check-fill" />
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card board-card">
              <img
                src={require("./rohit.jpeg")}
                className="card-img-top board-card-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">Rohit Kolhale</h3>
                <p className="text-muted">
                  Co - Founder &amp; Managing Director - Ready Assist
                </p>
                <p className="card-text">Board of Directors</p>
              </div>
              <div className="d-flex justify-content-evenly">
                <a
                  href="https://www.linkedin.com/in/rohit-kolhale-b27a14205"
                  target="blank"
                >
                  <i className="bi bi-linkedin" />
                </a>

                <a href="https://www.instagram.com/" target="_blank">
                  <i className="bi bi-instagram" />
                </a>
                <a href="mailto:hello@readyassist.in">
                  <i className="bi bi-envelope-check-fill" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
