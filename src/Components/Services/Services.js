import callimage from "./24-7.jpg";
import carimage from "./starting-2.svg";
import "./Services.css";
function Services() {
  return (
    <>
      {/* card */}
      <div
        className="row justify-content-center"
        id="parent"
        style={{ marginTop: "80px" }}
      >
        <div className="col-md-9 col-sm-12">
          <div className="row">
            <div className="card-group">
              <div className="card" style={{ borderRadius: "10px" }}>
                <img
                  src="https://readyassist.in/assets/images/services/BAT_JUMP.svg"
                  className="card-img-top p-2 pb-0"
                  alt="..."
                />
                <div className="card-body mt-0 pt-0 text-center">
                  <h5 className="card-title">Battery Jumpstart</h5>
                  <p className="card-text">Get JumpStart from professionals</p>
                </div>
                <div className="card-footer">
                  <a href="/signup.html" className="btn btn-dark">
                    Book Service
                  </a>
                </div>
              </div>

              <div className="card" style={{ borderRadius: "10px" }}>
                <img
                  src="https://readyassist.in/assets/images/services/fuel-1.svg"
                  className="card-img-top p-2 pb-0"
                  alt="..."
                />
                <div className="card-body mt-0 pt-0 text-center">
                  <h5 className="card-title">Fuel-Delivery</h5>
                  <p className="card-text">Petrol/Diesel delivered faster</p>
                </div>
                <div className="card-footer">
                  <a href="/signup.html" className="btn btn-dark">
                    Book Service
                  </a>
                </div>
              </div>

              <div className="card" style={{ borderRadius: "10px" }}>
                <img
                  src="https://readyassist.in/assets/images/services/FLAT_TOWING.svg"
                  className="card-img-top p-2 pb-0"
                  alt="..."
                />
                <div className="card-body mt-0 pt-0 text-center">
                  <h5 className="card-title">Towing</h5>
                  <p className="card-text">Car and Bike Towing service</p>
                </div>
                <div className="card-footer">
                  <a href="/signup.html" className="btn btn-dark">
                    Book Service
                  </a>
                </div>
              </div>

              <div className="card" style={{ borderRadius: "10px" }}>
                <img
                  src="https://readyassist.in/assets/images/services/General%20Service-3.svg"
                  className="card-img-top p-2 pb-0"
                  alt="..."
                />
                <div className="card-body mt-0 pt-0 text-center">
                  <h5 className="card-title">General Services</h5>
                  <p className="card-text">
                    Full bike service at your doorstep
                  </p>
                </div>
                <div className="card-footer">
                  <a href="/signup.html" className="btn btn-dark">
                    Book service
                  </a>
                </div>
              </div>
            </div>

            <div className="card-group">
              <div className="card" style={{ borderRadius: "10px" }}>
                <img
                  src="https://readyassist.in/assets/images/services/punctures-3.svg"
                  className="card-img-top p-2 pb-0"
                  alt="..."
                />
                <div className="card-body mt-0 pt-0 text-center">
                  <h5 className="card-title">Flat-Tyre</h5>
                  <p className="card-text">Tube or Tubeless puncture repair</p>
                </div>
                <div className="card-footer">
                  <a href="/signup.html" className="btn btn-dark">
                    Book Service
                  </a>
                </div>
              </div>

              <div className="card" style={{ borderRadius: "10px" }}>
                <img
                  src="https://readyassist.in/assets/images/services/KEY_LOCK.svg"
                  className="card-img-top p-2 pb-0"
                  alt="..."
                />
                <div className="card-body mt-0 pt-0 text-center">
                  <h5 className="card-title">Key-Unlock-Assistance</h5>
                  <p className="card-text">One stop unlock Assistance</p>
                </div>
                <div className="card-footer">
                  <a href="/signup.html" className="btn btn-dark">
                    Book Service
                  </a>
                </div>
              </div>

              <div className="card" style={{ borderRadius: "10px" }}>
                <img
                  src={carimage}
                  className="card-img-top p-2 pb-0"
                  alt="..."
                />
                <div className="card-body mt-0 pt-0 text-center">
                  <h5 className="card-title">Starting Problem</h5>
                  <p className="card-text">Make your vehicle moving</p>
                </div>
                <div className="card-footer">
                  <a href="/signup.html" className="btn btn-dark">
                    Book Service
                  </a>
                </div>
              </div>

              <div className="card" style={{ borderRadius: "10px" }}>
                <img
                  src={callimage}
                  className="card-img-top p-2 pb-0"
                  alt="..."
                />
                <div className="card-body mt-0 pt-0 text-center">
                  <h5 className="card-title">24/7 Help</h5>
                  <p className="card-text">On Call Road Side Assistance</p>
                </div>
                <div className="card-footer">
                  <a href="/signup.html" className="btn btn-dark">
                    Book Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
