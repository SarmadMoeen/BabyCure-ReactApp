import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import axios from "axios";

const DoctorConsultancy = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `http://localhost:3000/getDoctorInfo?review=${selectedValue}&price=${selectedPrice}&specialization=${selectedSpecialization}`
      );
      setData(response.data);
    }
    fetchData();
  }, [selectedValue, selectedPrice, selectedSpecialization]);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleSpecializationChange = (event) => {
    setSelectedSpecialization(event.target.value);
  };

  const renderStarRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="fas fa-star text-warning"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star text-warning"></i>);
      }
    }
    return stars;
  };

  return (
    <>
      <Header />

      <section className="DoctorConsultancy_page" style={{ backgroundColor: "#dcdcdc" ,minHeight: "100vh"}}>
        <div className="container pb-5">
          <div className="text-left pb-4 pt-3">
            <h4>Home / Baby / Doctor Consultancy</h4>
          </div>
          <div className="row g-5">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6 mx-auto">
                  <div className="py-4" style={{ position: "relative" }}>
                  <input
                      className='form-control py-3 btn btn border-0 search_btn2 rounded-5'
                      placeholder="Search by name"
                      value={searchQuery}
                      onChange={handleSearch}
                      style={{ backgroundColor: "#a9a9a9" }} // Set background color
                    />
                    <label
                      style={{
                        position: "absolute",
                        top: "40px",
                        right: "12px",
                        color: "black" // Set label color
                      }}
                    >
                      <i className="fa fa-search" style={{ fontSize: "20px" }}></i>
                    </label>  
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className="mx-2">
                <button className="btn rounded-0 px-4 py-2" style={{ backgroundColor: "black",color:"white" }}>
                  Filter
                </button>
              </div>
              <div className="mx-2">
                <select
                  style={{  backgroundColor: "black",color:"white"}}
                  className="form-select py-1 rounded-5"
                  aria-label="Default select example"
                  value={selectedValue}
                  onChange={handleSelectChange}
                >
                  <option value="">Sort by Review</option>
                  <option value="">No Filters</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="mx-2">
                <select
                  style={{  backgroundColor: "black",color:"white" }}
                  className="form-select py-1 rounded-5"
                  aria-label="Default select example"
                  value={selectedPrice}
                  onChange={handlePriceChange}
                >
                  <option value="">Sort by Price</option>
                  <option value="">No Filters</option>
                  <option value="1000">1000</option>
                  <option value="1500">1500</option>
                  <option value="2000">2000</option>
                </select>
              </div>
              <div className="mx-2">
                <select
                  style={{  backgroundColor: "black",color:"white"}}
                  className="form-select py-1 rounded-5"
                  aria-label="Default select example"
                  value={selectedSpecialization}
                  onChange={handleSpecializationChange}
                >
                  <option value="">Sort by Specialization</option>
                  <option value="">Specialization</option>
                  <option value="">No Filters</option>
                  <option value="Child Specialized">Child Specialist</option>
                  <option value="Eye">Eye Specialist</option>
                  <option value="Gestro">Gestrologist</option>
                
                </select>
              </div>
            </div>
          </div>
          <div className="row gy-5" style={{marginTop:"20px"}}>
            {filteredData.map((doctor) => (
              <div className="col-md-6"  key={doctor.id}>
                <div className="card" style={{ backgroundColor: "#a9a9a9" ,boxShadow: '1px 2px 9px #000'}}>
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                    <div className="text-center">
                      <img src={require("../../assets/image/img4.png")} width="90px" alt="" />
                    </div>
                      <div className="ms-3">
                        <h4 className="text-dark">{doctor.name}</h4>
                        <p className="text-dark">{doctor.specialization}</p>
                        <p className="text-dark">Price:{doctor.charges}Rs.</p>
                        <p className="text-dark">
                          Rating: {renderStarRating(doctor.review)}
                        </p>
                        <Link
                          to="/payment"
                          className="btn btn-light"
                          style={{ boxShadow: "1px 2px 9px #000", padding: "1em" }}
                        >
                          Book Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DoctorConsultancy;
