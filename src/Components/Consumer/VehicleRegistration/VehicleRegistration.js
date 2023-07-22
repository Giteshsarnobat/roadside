import React, { useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

const DeleteConfirmation = ({
  showModal,
  hideModal,
  handleDelete,
  item,
  message,
}) => {
  return (
    <Modal show={showModal} onHide={hideModal}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="alert alert-danger">{message}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="default" onClick={hideModal}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => handleDelete(item)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

function VehicleRegistration({ userData, setChange }) {
  const [vehicle, setVehicle] = useState("Select Vehicle Type");
  const [fuel, setFuel] = useState("Fuel Type");
  const [vehNumber, setVehNumber] = useState();
  const [toggle, setToggle] = useState(true);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [itemDelete, setItemDelete] = useState(null);

  const API_URL = "http://localhost:8000/vehicle";
  const API_URL_DELETE = "http://localhost:8000/vehicleDelete";

  // Checks if the value submitted are proper
  const validate = (e) => {
    if (vehicle === "Select Vehicle Type") {
      alert("Please Select the Type of the Vehicle");
      return false;
    }
    if (fuel === "Fuel Type") {
      alert("Please Select the Fuel Type");
      return false;
    }
    let regex = new RegExp(
      /^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/
    );
    if (regex.test(vehNumber) === true) {
      return true;
    } else {
      alert("Enter Valid Indian number Format");
      return false;
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const addData = { vehicle: vehicle, fuel: fuel, vehNumber: vehNumber };
      const data1 = {
        email: userData.user.email,
        password: userData.user.password,
        addData,
      };
      let res = await axios.post(API_URL, data1);
      alert(res.data);
      setChange(true);
    }
  };

  const showModal = () => {
    setToggle(true);
  };

  const hideModal = () => {
    setConfirmDelete(false);
  };

  const handleDeleteRender = (item) => {
    setItemDelete(item);
    setConfirmDelete(true);
  };

  const handleDelete = async (item) => {
    const data1 = {
      email: userData.user.email,
      password: userData.user.password,
      item,
    };
    let res = await axios.post(API_URL_DELETE, data1);
    alert(res.data);
    setChange(true);
    setConfirmDelete(false);
  };

  if (userData) {
    return (
      <div>
        {toggle ? (
          <div
            style={{
              marginTop: "80px",
              minHeight: "70vh",
              width: "100vw",
            }}
            className="row"
          >
            <div className=" parent col-12 col-lg-6 ">
              <div className="child" style={{ marginLeft: "10px" }}>
                <h4 className="text-center">Add Your Vehicle</h4>

                <p className="text-center">Enter Your Vehicle to help better</p>
                <form onSubmit={submit}>
                  <select
                    className="form-select my-4"
                    aria-label="Default select example"
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                  >
                    <option>Select Vehicle Type</option>
                    <option value="Car">Car</option>
                    <option value="Bike">Bike</option>
                  </select>

                  <select
                    className="form-select mb-4"
                    aria-label="Default select example"
                    value={fuel}
                    onChange={(e) => setFuel(e.target.value)}
                  >
                    <option>Fuel Type</option>
                    <option value="CNG">CNG</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                  </select>

                  <input
                    className="form-control mb-4"
                    type="text"
                    placeholder="Vehicle Number"
                    required
                    value={vehNumber}
                    onChange={(e) => setVehNumber(e.target.value)}
                  />

                  <button
                    type="submit"
                    className="btn container-fluid btn-success"
                  >
                    Add your Vehicle
                  </button>
                </form>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              {userData.user.cars.length > 0 ? (
                <div>
                  <h3>Cars</h3>
                  <table
                    className="table table-striped"
                    style={{ textAlign: "center" }}
                  >
                    <thead>
                      <tr>
                        <th>Sr No</th>
                        <th>Car Type</th>
                        <th>Fuel Type</th>
                        <th>Vehicle Number</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userData.user.cars.map((item, index) => (
                        <tr key={item.vehNumber} id="col">
                          <td id="col">{index + 1}</td>
                          <td id="col">{item.vehicle}</td>
                          <td id="col">{item.fuel}</td>
                          <td id="col">{item.vehNumber}</td>
                          <td>
                            <button
                              id="delete-veh-button"
                              style={{ color: "white" }}
                              className="btn btn-bg-success "
                              onClick={() => handleDeleteRender(item)}
                            >
                              <i className="bi bi-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <h3 className="alert alert-danger" style={{ margin: "20px" }}>
                  No Cars Registered
                </h3>
              )}
              {userData.user.bikes.length > 0 ? (
                <div>
                  <h3>Bikes</h3>
                  <table
                    className="table table-striped"
                    style={{ textAlign: "center" }}
                  >
                    <thead>
                      <tr>
                        <th>Sr No</th>
                        <th>Car Type</th>
                        <th>Fuel Type</th>
                        <th>Vehicle Number</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userData.user.bikes.map((item, index) => (
                        <tr key={item.vehNumber} id="col">
                          <td id="col">{index + 1}</td>
                          <td id="col">{item.vehicle}</td>
                          <td id="col">{item.fuel}</td>
                          <td id="col">{item.vehNumber}</td>
                          <td>
                            <button
                              id="delete-veh-button"
                              style={{ color: "white" }}
                              className="btn btn-bg-success "
                              onClick={() => handleDeleteRender(item)}
                            >
                              <i className="bi bi-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <h3 className="alert alert-danger" style={{ margin: "20px" }}>
                  No Bikes Registered
                </h3>
              )}
            </div>
          </div>
        ) : (
          ""
        )}

        {confirmDelete && (
          <DeleteConfirmation
            showModal={setConfirmDelete}
            hideModal={hideModal}
            handleDelete={handleDelete}
            item={itemDelete}
            message="Are you sure you want to delete this vehicle?"
          />
        )}
      </div>
    );
  }
  return null;
}

export default VehicleRegistration;
