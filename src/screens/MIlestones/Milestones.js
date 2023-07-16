import React, { useState, useEffect, useContext } from "react";
import { FaPlusCircle } from "react-icons/fa";
import axios from "axios";
import { BabyContext } from "../../ContextApi/BabyContext";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";

const Milestones = () => {
  const { selectedBabyId, setSelectedBabyId } = useContext(BabyContext);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const babyId = queryParams.get("babyId");

  useEffect(() => {
    if (babyId) {
      setSelectedBabyId(babyId);
    }
  }, [babyId, setSelectedBabyId]);

  console.log('Selected Baby ID at Milestones:', selectedBabyId);

  const [milestoneName, setMileStoneName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [data, setData] = useState([]);

  const handleAddMilestones = () => {
    axios
      .post("http://localhost:3000/milestones", {
        milestoneName,
        description,
        date,
        babyId: selectedBabyId,
      })
      .then((response) => {
        console.log(response.data);
        setData([...data, response.data]); // Add the new milestone to the existing data array
        setMileStoneName(""); // Clear the input fields
        setDescription("");
        setDate("");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  const handleDelete = (_id) => {
    axios
      .delete(`http://localhost:3000/deleteMilestones/${_id}`)
      .then((response) => {
        const updatedData = data.filter((item) => item._id !== _id);
        setData(updatedData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (selectedBabyId) {
      fetch(`http://localhost:3000/getMilestones?babyId=${selectedBabyId}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched data:", data);
          setData(data);
        })
        .catch((error) => console.error(error));
    }
  }, [selectedBabyId]);

  return (
    <>
      <Header />
      <section className="Milestones_page" style={{ backgroundColor: "#dcdcdc", minHeight: "100vh", overflow: "hidden" }}>
        <div className="container pb-5">
          <div className="text-left pb-4 pt-3">
            <h4>Home / Baby / Milestones </h4>
          </div>
          <div style={{ marginTop: "20px" }} className="text-center">
            <h2>Milestones</h2>
            <p>“It’s a Big Deal. Each Milestone is a Big Step.”</p>
          </div>
              <div className="row g-5">
                {data.map((item) => (
                  <div className="col-md-4 mb-4" key={item._id}>
                    <div className="card p-4 rounded-4" style={{ backgroundColor: "#a9a9a9", boxShadow: '1px 2px 9px #000', padding: '1em' }}>
                      <div className="text-center">
                        <img src={item.image} width="90px" alt="" />
                        <h4 className="pt-2">{item.milestoneName}</h4>
                      </div>
                      <div className="text-left">
                        <p>{item.description}</p>
                        <p>Date: {new Date(item.date).toLocaleDateString()}</p>
                      </div>
                      <button onClick={() => handleDelete(item._id)}>Delete Milestone</button>
                    </div>
                  </div>
                ))}
              </div>


          <div className="text-end">
          <FaPlusCircle
              color="black"
              size={50}
              style={{ position: "fixed", bottom: "60px", right: "20px", zIndex: "9999" }}
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            />

          </div>
        </div>
      </section>
      <div className="modal fade pt-5 " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog " style={{ backgroundColor: "#a9a9a9" }}>
          <div className="modal-content">
            <div className="modal-body pt-5 " style={{ backgroundColor: "#a9a9a9" }}>
              <form>
                <div className="row pt-4">
                  <div className="col-md-12">
                    <div>
                      <label className="text-black">Milestone name</label>
                      <input
                        className="form-control text-white"
                        value={milestoneName}
                        onChange={(e) => setMileStoneName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 pt-4">
                    <div>
                      <label className="text-black">Description</label>
                      <input
                        className="form-control text-white"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 pt-4">
                    <div>
                      <label className="text-black">Date</label>
                      <input
                        placeholder="Date of Birth"
                        className="form-control let_baby_search text-black"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 pt-4 text-center">
                    <button
                      onClick={handleAddMilestones}
                      type="button"
                      className="text-bold btn"
                      style={{ backgroundColor: "black", color: "white" }}
                      data-bs-dismiss="modal"
                    >
                      Add Milestone
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Milestones;
