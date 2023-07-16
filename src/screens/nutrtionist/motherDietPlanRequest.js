import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const MotherDietPlanRequest = () => {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    cause: "",
    document: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/getMotherCustomizeDietPlanReq");
        setRequests(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleUpdateClick = (request) => {
    setSelectedRequest(request);
    setShowModal(true);
    setUpdatedData({
      cause: request.description,
      document: null
    });
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    if (e.target.name === "document") {
      setUpdatedData({
        ...updatedData,
        document: e.target.files[0]
      });
    } else {
      setUpdatedData({
        ...updatedData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleUpdateSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("cause", updatedData.cause);
      formData.append("document", updatedData.document);

      const response = await axios.post("http://localhost:3000/postDocumentCustomizeDietPlan", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      console.log(response.data);
      
      // Rest of the code...
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <section className="HomeAdminPage_page" style={{ backgroundColor: "#dcdcdc", minHeight: "100vh" }}>
        <div className="container-fluid pb-5 pt-3">
          <h4>Baby Diet Plan Requests</h4>
          <div className="text-center mx-5 pt-3">
            <h3 className="heading">Welcome to Baby Cure!</h3>
            <h5 className="para pt-3 pb-4">
              “When the baby is going through growth spurts or mood changes, I use The Wonder Weeks to keep track of
              it all and why he behaves differently.” – Devinda, Momatu team.
            </h5>
          </div>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Weight</th>
                  <th>Cause</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request) => (
                  <tr key={request.id}>
                    <td>{request.name}</td>
                    <td>{request.age}</td>
                    <td>{request.weight}</td>
                    <td>{request.description}</td>
                    <td>
                      <Button variant="primary" onClick={() => handleUpdateClick(request)}>
                        Update
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />

      {/* Update Modal */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Updated Diet Plan</label>
              <input
                type="text"
                className="form-control"
                name="cause"
                value={updatedData.cause}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Upload Document</label>
              <input
                type="file"
                className="form-control"
                name="document"
                onChange={handleInputChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MotherDietPlanRequest;
