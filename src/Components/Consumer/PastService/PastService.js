import React, { useState } from "react";
import { PDFDocument, StandardFonts } from "pdf-lib";
import { saveAs } from "file-saver";

import "./PastService.css";

const PastService = ({ userData, change, setChange }) => {
  const [requests, setRequests] = useState(userData.user.requests);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [toggle, setToggle] = useState(false);

  const itemsPerPage = 10;

  const generatePDF = async (item) => {
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();

    // Add a new page to the document
    const page = pdfDoc.addPage();

    // Set the font and font size
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    page.setFont(font);
    page.setFontSize(12);

    // Add text to the page

    page.drawText(`Service Number: ${item.servicenumber}`, {
      x: 50,
      y: page.getHeight() - 50,
    });

    page.drawText(`Vehicle Number: ${item.vehicle.vehNumber}`, {
      x: 50,
      y: page.getHeight() - 70,
    });

    page.drawText(`Location: ${item.location}`, {
      x: 50,
      y: page.getHeight() - 90,
    });

    page.drawText(`Date: ${item.date}`, {
      x: 50,
      y: page.getHeight() - 110,
    });

    page.drawText(`Customer Name: ${item.name}`, {
      x: 50,
      y: page.getHeight() - 130,
    });

    page.drawText(`Contact: ${item.mobile}`, {
      x: 50,
      y: page.getHeight() - 150,
    });

    page.drawText(`Email: ${item.email}`, {
      x: 50,
      y: page.getHeight() - 170,
    });

    page.drawText(`Type of Vehicle: ${item.vehicle.vehicle}`, {
      x: 50,
      y: page.getHeight() - 190,
    });

    page.drawText(`Fuel: ${item.vehicle.fuel}`, {
      x: 50,
      y: page.getHeight() - 210,
    });

    page.drawText(`Description: ${item.description}`, {
      x: 50,
      y: page.getHeight() - 250,
    });

    // Serialize the PDF document to a Uint8Array
    const pdfBytes = await pdfDoc.save();

    // Create a Blob from the PDF bytes
    const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });

    // Save the PDF Blob as a file
    saveAs(pdfBlob, "document.pdf");
  };

  const handleDownloadPDF = (item) => {
    // Assuming you have a function to generate the PDF based on the item data
    const pdfData = generatePDF(item);

    // Create a Blob object from the PDF data
    const blob = new Blob([pdfData], { type: "application/pdf" });

    // Create a temporary URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a link element to trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.download = "document.pdf";

    // Simulate a click on the link to start the download
    link.click();

    // Clean up the temporary URL
    URL.revokeObjectURL(url);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(requests.length / itemsPerPage);

  // Calculate the indexes of the current page's items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = requests.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleView = (item) => {
    // Set the selected item and open the pop-up window
    // generatePDF(item);
    setSelectedItem(item);
    setToggle(true);
  };

  const handleCloseModal = () => {
    // Close the pop-up window
    setSelectedItem(null);
    setToggle(false);
  };

  return (
    <div>
      {requests.length > 0 ? (
        <div className="" style={{ marginTop: "80px", width: "100vw" }}>
          {toggle ? (
            <div
              className="row justify-content-center align-item-center my-5"
              style={{ height: 500 }}
              id="image"
            >
              <div
                className="col-sm-12 col-md-4 text-center"
                style={{
                  backgroundColor: "white",
                  boxShadow: "0 2px 4px rgba(19, 19, 19,3)",
                  borderRadius: 10,
                }}
              >
                <h2 className="m-4">Service Details</h2>
                <div className="d-flex m-2 px-4 justify-content-between bg-light">
                  <div className="fw-semibold">Name:</div>
                  <div className="mx-2">{selectedItem.name}</div>
                </div>
                <div className="d-flex m-2 px-4 justify-content-between bg-light">
                  <div className="fw-semibold">Mobile No:</div>
                  <div className="mx-2">{selectedItem.mobile}</div>
                </div>
                <div className="d-flex m-2 px-4 justify-content-between bg-light">
                  <div className="fw-semibold">Email:</div>
                  <div className="mx-2">{selectedItem.email}</div>
                </div>
                <div className="d-flex m-2 px-4 justify-content-between bg-light">
                  <div className="fw-semibold">Location:</div>
                  <div className="mx-2">{selectedItem.location}</div>
                </div>
                <div className="d-flex m-2 px-4 justify-content-between bg-light">
                  <div className="fw-semibold">Type of Vehicle:</div>
                  <div className="mx-2">{selectedItem.vehicle.vehicle}</div>
                </div>
                <div className="d-flex m-2 px-4 justify-content-between bg-light">
                  <div className="fw-semibold">Fuel:</div>
                  <div className="mx-2">{selectedItem.vehicle.fuel}</div>
                </div>
                <div className="d-flex m-2 px-4 justify-content-between bg-light">
                  <div className="fw-semibold">Vehicle NO:</div>
                  <div className="mx-2">{selectedItem.vehicle.vehNumber}</div>
                </div>
                <div className="d-flex m-2 px-4 justify-content-between bg-light">
                  <div className="fw-semibold">Discription:</div>
                  <div className="mx-2">{selectedItem.description}</div>
                </div>
                {/* <div className="d-flex m-2 px-4 justify-content-between bg-light">
              <div className="fw-semibold">File:</div>
              <div className="mx-2">" "</div>
            </div> */}
                <div className="d-flex m-2 px-4 justify-content-between bg-light">
                  <div className="fw-semibold">Service Number:</div>
                  <div className="mx-2">{selectedItem.servicenumber}</div>
                </div>
                <div className="d-flex m-2 px-4 justify-content-between bg-light">
                  <div className="fw-semibold">Date</div>
                  <div className="mx-2">{selectedItem.date}</div>
                </div>
                <div className="px-4" style={{ marginTop: 20 }}>
                  <button
                    type="Submit"
                    className="btn container-fluid bg-warning fw-semibold"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{ marginTop: "80px", width: "100vw", minHeight: "70vh" }}
            >
              <table
                className="table table-striped"
                style={{ textAlign: "center" }}
              >
                <thead className>
                  <tr>
                    <th>Sr No</th>
                    <th>Service Number</th>
                    <th>Vehicle Number</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Action</th>
                    <th>Print</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Render the current page's items */}
                  {requests.toReversed().map((item, index) => (
                    <tr key={item.vehicle} id="col">
                      <td id="col">{index + 1}</td>
                      <td id="col">{item.servicenumber}</td>
                      <td id="col">{item.vehicle.vehNumber}</td>

                      <td id="col">{item.location}</td>
                      <td id="col">{item.date}</td>
                      <td>
                        <button
                          id="view-past-button"
                          style={{ color: "white" }}
                          className="btn btn-bg-success "
                          onClick={() => handleView(item)}
                        >
                          View
                        </button>
                      </td>
                      <td>
                        <button
                          id="view-pdf-button"
                          style={{ color: "white" }}
                          className="btn btn-bg-success "
                          onClick={() => generatePDF(item)}
                        >
                          Print
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : (
        <div style={{ margin: "80px", minHeight: "70vh" }}>
          <h3 className="alert alert-danger">No Requests Raised</h3>
        </div>
      )}
    </div>
  );
};

export default PastService;
