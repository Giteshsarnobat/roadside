import React from "react";
import BatSrc from "./BAT_JUMP.svg";
import FuelSrc from "./fuel-1.svg";
import TowSrc from "./FLAT_TOWING.svg";
import "./home.css";

export const Home = () => {
  return (
    <main>
      <div id="greeting">
        <div id="book-greeting">
          <h1>RoadSide</h1>
          <h1>Assistance</h1>
          <h1>Services</h1>
          <p>24/7 Support</p>
          <form action="Login.html">
            <button type="submit">Book a Service</button>
          </form>
        </div>
        <div id="subscription">
          <h1>Buy a Subscription</h1>
          <h1>According to Your Requirements</h1>
          <h1>Be Worry Free</h1>
          <form action="Signup.html">
            <button type="submit">Register Now</button>
          </form>
        </div>
      </div>
      <div className="text-center" id="main-display1">
        <h1 className="text-center">Our Services</h1>
        <div id="services" className="row m-lg-5 justify-content-around">
          <div className="col-10 col-lg-3 service-card m-lg-4">
            <img src={TowSrc} alt="Tow Truck" />
            <h3>Towing Service</h3>
            <p>
              24/7 towing service to get your car to the nearest repair shop.
            </p>
          </div>
          <div className="col-10 col-lg-3 service-card m-lg-4">
            <img src={BatSrc} alt="Battery Jumpstart" />
            <h3>Battery Jumpstart</h3>
            <p>Get your car battery jumpstarted and back on the road.</p>
          </div>
          <div className="col-10 col-lg-3 service-card m-lg-4">
            <img src={FuelSrc} alt="Fuel Delivery" />
            <h3>Fuel Delivery</h3>
            <p>Emergency fuel delivery to keep you moving.</p>
          </div>
        </div>
        <form action="services1.html">
          <button className="col-5 col-lg-2" id="know-more">
            Click here for more
          </button>
        </form>
      </div>
      <div className="row justify-content-center" id="video-card">
        <iframe
          src="https://www.youtube.com/embed/k7Ex_Kvo6dQ?rel=0&loop=1&controls=0&autoplay=1&mute=1"
          title="Hassle-Free Driving Across India | 24/7 Emergency Support | Bikes, Cars & EVs | ReadyAssist"
          frameBorder={0}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="col-12"
          id="video"
        />
        <div className="row justify-content-center">
          <div className="col-10 col-lg-2 demographics">
            <div>
              <h5>2.5 Million+</h5>
              <p>Vehicles Served</p>
            </div>
            <img src={require("./car.gif")} />
          </div>
          <div className="col-10 col-lg-2 demographics">
            <div>
              <h5>18500+</h5>
              <p>Pincodes Served</p>
            </div>
            <img src={require("./Map.gif")} />
          </div>
          <div className="col-10 col-lg-2 demographics">
            <div>
              <h5>8000+</h5>
              <p>Service Provider</p>
            </div>
            <img src={require("./Service-arm.gif")} />
          </div>
          <div className="col-10 col-lg-2 demographics">
            <div>
              <h5>850k+</h5>
              <p>Satisfied Consumers</p>
            </div>
            <img src={require("./Customers.gif")} />
          </div>
        </div>
      </div>
    </main>
  );
};
