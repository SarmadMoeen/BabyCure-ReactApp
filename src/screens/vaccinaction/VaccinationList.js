import React from "react";
import { Link, NavLink } from "react-router-dom";
import $ from 'jquery'
import { useState } from "react";
import axios from "axios";
import Vaccinaction from "./Vaccinaction";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useContext } from "react";
import { BabyContext } from "../../ContextApi/BabyContext";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const VaccinationList = () => {
  const { selectedBabyId, setSelectedBabyId } = useContext(BabyContext);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const babyId = queryParams.get('babyId');

  useEffect(() => {
    if (babyId) {
      setSelectedBabyId(babyId);
    }
  }, [babyId, setSelectedBabyId]);

  console.log('Selected Baby ID At Vacc List:', selectedBabyId);

  const [selectedVaccine, setSelectedVaccine] = useState(null);
  const [date, setDate] = useState("");
  const [choice, setChoice] = useState("");

  const handleVaccineSelect = (vaccine) => {
    setSelectedVaccine(vaccine);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    if (selectedVaccine && date && choice) {
      const payload = {
        babyId: selectedBabyId, // Add the babyId field
        key: selectedVaccine.key,
        vaccname: selectedVaccine.vaccname,
        date: date,
      };
  
      if (choice === "Upcoming") {
        axios
          .post("http://localhost:3000/vaccinations", payload)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      } else if (choice === "Done") {
        axios
          .post("http://localhost:3000/doneVaccinations", payload)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      }
  
      setSelectedVaccine(null);
      setDate("");
      setChoice("");
    }
  };
  

  const data = [
    { 'key': '1', 'vaccname': 'BCG', 'space': '' },
    { 'key': '2', 'vaccname': 'OPV-0', 'space': '' },
    { 'key': '3', 'vaccname': 'Hep-B', 'space': '' },
    { 'key': '4', 'vaccname': 'OPV-I', 'space': '' },
    { 'key': '5', 'vaccname': 'Pneumococcal-I', 'space': '' },
    { 'key': '6', 'vaccname': 'Rotavirus-I', 'space': '' },
    { 'key': '7', 'vaccname': 'Pentavalent-I', 'space': '' },
    { 'key': '8', 'vaccname': 'OPV-II', 'space': '' },
    { 'key': '9', 'vaccname': 'Pneumococcal-II', 'space': '' },
    { 'key': '10', 'vaccname': 'Rotavirus-II', 'space': '' },
    { 'key': '11', 'vaccname': 'Pentavalent-II', 'space': '' },
    { 'key': '12', 'vaccname': 'OPV-III', 'space': '' },
    { 'key': '13', 'vaccname': 'Pneumococcal-III', 'space': '' },
    { 'key': '14', 'vaccname': 'IPV-I', 'space': '' },
    { 'key': '15', 'vaccname': 'Pentavalent-III', 'space': '' },
    { 'key': '16', 'vaccname': 'MR-I', 'space': '' },
    { 'key': '17', 'vaccname': 'Typhoid', 'space': '' },
  ]

  $(".navbar .nav-link").on("click", function () {
    $(".navbar").find(".activeNav").removeClass("activeNav");
    $(this).addClass("activeNav");
  });

  return (
    <div>
      <Header />
      <section className="" style={{ backgroundColor: "#dcdcdc" }}>
        <div className="container pb-5">
          <h5 className="pt-3"> Home / Baby / Vaccination / Vaccination List </h5>
          <div className="row">
            <div className="col-md-5 mx-auto">
              <div className="py-4" style={{ position: "relative" }}>
                <input
                  type="search"
                  className="form-control py-3 btn btn border-0 search_btn rounded-5"
                />
                <label
                  style={{ position: "absolute", top: "40px", right: "12px" }}
                >
                  <i className="fa  fa-search" style={{ fontSize: "20px" }}></i>
                </label>
              </div>
            </div>

            <div className="col-md-10 mx-auto">
              <form onSubmit={handleFormSubmit}>
                <ul
                  className="list-group p-4 mb-4 rounded-4"
                  style={{
                    backgroundColor: "#a9a9a9",
                    listStyle: "none",
                    lineHeight: "10px",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: '1px 2px 9px #000',
                    padding: '1em'
                  }}
                >
                  {data.map((item) => (
                    <li
                      key={item.key}
                      style={{
                        marginBottom: "10px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                      onClick={() => handleVaccineSelect(item)}
                    >
                      <span style={{ marginRight: "10px" }}>{item.vaccname}</span>
                      <input
                        placeholder="Date of Birth"
                        className="form-control let_baby_search text-black"
                        type="date"
                        value={selectedVaccine && selectedVaccine.key === item.key ? date : ""}
                        onChange={(e) => setDate(e.target.value)}
                        style={{ width: "150px" }}
                      />
                      <select
                        className="form-control"
                        value={selectedVaccine && selectedVaccine.key === item.key ? choice : ""}
                        onChange={(e) => setChoice(e.target.value)}
                        style={{ width: "120px" }}
                      >
                        <option value="">Select</option>
                        <option value="Upcoming">Upcoming</option>
                        <option value="Done">Done</option>
                      </select>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <Link to="/vaccination" ><button onClick={handleFormSubmit} type="submit" className="btn btn-primary rounded-4">
                    Add Vaccinaction
                  </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default VaccinationList;
