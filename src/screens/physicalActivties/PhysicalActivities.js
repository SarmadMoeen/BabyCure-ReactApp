import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import $ from 'jquery';
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const PhysicalActivities = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [durationFilter, setDurationFilter] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);
  
  

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterData = (data) => {
    let filteredData = data;

    // apply duration filter
    if (durationFilter !== "") {
      filteredData = filteredData.filter((activity) => {
        const activityDuration = parseFloat(activity.duration);
        if (activityDuration < parseFloat(durationFilter)) {
          return false;
        }
        return true;
      });
    }

    // apply search filter
    if (searchQuery !== "") {
      filteredData = filteredData.filter((activity) => {
        const title = activity.title.toLowerCase();
        const query = searchQuery.toLowerCase();
        return title.includes(query);
      });
    }

    return filteredData;
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedActivity(null);
  };

  const handleContinueReading = (activity) => {
    setSelectedActivity(activity);
    setShowModal(true);
  };

  useEffect(() => {
    console.log("Selected Activity is:", selectedActivity);
  }, [selectedActivity]);

  $(document).ready(() => {
    $(".navbar .nav-link").on("click", function () {
      $(".navbar").find(".activeNav").removeClass("activeNav");
      $(this).addClass("activeNav");
    });
  });

  useEffect(() => {
    fetch('http://localhost:3000/getPhysicalActivities')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:3000/getPhysicalActivities?review=${selectedValue}`);
      setData(response.data);
    }
    fetchData();
  }, [selectedValue]);

  return (
    <>
      <Header />
      <section className="PhysicalActivies_page" style={{ backgroundColor: "#dcdcdc",minHeight:"100vh" }}>
        <div className="container-fluid pb-5">
          <div className="text-left pb-4 pt-3">
            <h4>Home / Physical Activities</h4>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6 mx-auto">
                  <div className="py-4" style={{ position: "relative" }}>
                    <input
                      type="search"
                      className="form-control py-3 btn btn border-0 search_btn12 rounded-5"
                      placeholder="Search by title"
                      value={searchQuery}
                      onChange={handleSearch}
                    />
                    <label
                      style={{
                        position: "absolute",
                        top: "40px",
                        right: "12px",
                      }}
                    >
                      <i className="fa  fa-search" style={{ fontSize: "20px" }}></i>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex ">
              <div className="mx-2">
                <button
                  className="btn rounded-0 px-4 py-2"
                  style={{
                    backgroundColor: "black",
                    color: 'white',
                    boxShadow: '1px 2px 9px #000',
                    padding: '1em'
                  }}
                >
                  Filter
                </button>
              </div>
              <div className="mx-2" style={{ display: 'flex', alignItems: "center", justifyContent: 'center' }}>
                <select
                  style={{
                    backgroundColor: "black",
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '1px 2px 9px #000',
                    padding: '1em'
                  }}
                  className="form-select py-1 rounded-5"
                  aria-label="Default select example"
                  value={selectedValue}
                  onChange={handleSelectChange}
                >
                  <option value="">All</option>
                  <option value="">No Filters</option>
                  <option value="1">1 Months</option>
                  <option value="6">6 Months</option>
                  <option value="12">12 Months</option>
                  
                </select>
              </div>
            </div>
<div className="container-fluid">
  <div className="row">
    {filterData(data)
      .filter((activity) => {
        if (searchQuery === "") {
          return true;
        } else if (
          activity.title.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      })
      .filter((activity) => {
        if (selectedValue === "" || selectedValue === "No Filters") {
          return true;
        } else if (activity.title.includes(selectedValue)) {
          return true;
        } else {
          return false;
        }
      })
      .map((activity) => (
        <div
          className="col-md-12"
          style={{
            marginTop: "20px",
            padding: "20px",
          }}
          key={activity.id}
        >
          <div
            className="row"
            style={{
              backgroundColor: "#a9a9a9",
              boxShadow: "1px 2px 9px #000",
              padding: "1em",
            }}
          >
            <div className="col-md-4 p-0" style={{ maxWidth: "130px" }}>
              <div
                style={{
                  width: "100%",
                  height: "80%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={activity.imageUrl}
                  alt=""
                  style={{
                    objectFit: "cover",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    boxShadow: "1px 2px 9px #000",
                  }}
                />
              </div>
            </div>
            <div className="col-md-8 p-0">
              <div
                className="p-4 w-100 h-100 text-black"
                style={{ backgroundColor: "#a9a9a9" }}
              >
                <h3>{activity.title}</h3>
                <p style={{ fontSize: "20px" }}>
                  {activity.description.substring(0, 100)}...{" "}
                  
                  <Link onClick={() => handleContinueReading(activity)}>
                              continue reading
                            </Link>
                </p>
                
              </div>
            </div>
          </div>
        </div>
      ))}
  </div>
</div>

          </div>
        </div>
      </section>

      {showModal && selectedActivity && (
        <div className="modal" style={{ display: "block", position: "fixed", top: 0, left: 0, right: 0, bottom: "20px", backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 9999 }}>
          <div className="modal-content" style={{ backgroundColor: "#dcdcdc", width: "90%", margin: "0 auto", overflowY: "auto", padding: "20px", textAlign: "center", maxHeight: "calc(100% - 20px)", wordWrap: "break-word", height: "750px", marginTop: "10px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <img src={selectedActivity.imageUrl} alt="" style={{ borderRadius: "10px", width: "27%", height: "auto", objectFit: "cover", margin: "0 auto", display: "block", marginBottom: "20px" }} />

            <div style={{ backgroundColor: "#a9a9a9", boxShadow: '1px 2px 9px #000', padding: '1em', margin: '20px' }}>
              <h3 style={{ marginBottom: '10px' }}>{selectedActivity.title}</h3>
              <p style={{ marginBottom: '10px' }}>{selectedActivity.description}</p>
            </div>

            <button onClick={handleModalClose} style={{ backgroundColor: "black", color: "white", borderRadius: "5px", width: "180px", margin: "0 auto", marginBottom: "20px" }}>Read Less</button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default PhysicalActivities;
