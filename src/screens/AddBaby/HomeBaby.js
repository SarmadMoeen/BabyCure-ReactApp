import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import $ from 'jquery';
import { BabyContext } from "../../ContextApi/BabyContext";
import axios from "axios";
import Milestones from "../MIlestones/Milestones";

const HomeBaby = () => {

  const { selectedBabyId, selectedBabyDob } = useContext(BabyContext);
  const [babyAge, setBabyAge] = useState(0);

  const [upcomingVaccination, setUpcomingVaccination] = useState(null);
  const [doneVaccination, setDoneVaccination] = useState(null);
  const [milestone, setMilestone] = useState(null);
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    // Fetch upcoming vaccination data here based on selectedBabyId
    // Replace 'YOUR_UPCOMING_VACCINE_API_ENDPOINT' with the actual API endpoint
    axios.get(`http://localhost:3000/getVaccinations?babyId=${selectedBabyId}`)
      .then(response => {
        // Assuming your API returns data in the following format:
        const upcomingData = response.data;
        // Set the upcoming vaccination data in the state
        setUpcomingVaccination(upcomingData);
      })
      .catch(error => {
        // Handle error if the API request fails
        console.error("Error fetching upcoming vaccination data:", error);
      });

    // Fetch done vaccination data here based on selectedBabyId
    // Replace 'YOUR_DONE_VACCINE_API_ENDPOINT' with the actual API endpoint
    axios.get(`http://localhost:3000/getDoneVaccinations?babyId=${selectedBabyId}`)
      .then(response => {
        // Assuming your API returns data in the following format:
        const doneData = response.data;
        // Set the done vaccination data in the state
        setDoneVaccination(doneData);
      })
      .catch(error => {
        // Handle error if the API request fails
        console.error("Error fetching done vaccination data:", error);
      });
    axios.get(`http://localhost:3000/getMilestones?babyId=${selectedBabyId}`)
      .then(response => {
        // Assuming your API returns data in the following format:
        const milestoneData = response.data;
        // Set the done vaccination data in the state
        setMilestone(milestoneData);
      })
      .catch(error => {
        // Handle error if the API request fails
        console.error("Error fetching done vaccination data:", error);
      });

      axios.get(`http://localhost:3000/getDoctorInfo?babyId=${selectedBabyId}`)
      .then(response => {
        // Assuming your API returns data in the following format:
        const doctorData = response.data;
        // Set the done vaccination data in the state
        setDoctor(doctorData);
      })
      .catch(error => {
        // Handle error if the API request fails
        console.error("Error fetching done vaccination data:", error);
      });
  }, [selectedBabyId]);

  



  useEffect(() => {
    if (selectedBabyDob) {
      const today = new Date();
      const dob = new Date(selectedBabyDob);
      const ageInMonths = (today.getFullYear() - dob.getFullYear()) * 12 + (today.getMonth() - dob.getMonth());
      setBabyAge(ageInMonths);
    }
  }, [selectedBabyDob]);

  console.log("Selected Baby ID:", selectedBabyId);
  console.log("Selected DOB home baby:", selectedBabyDob);
  console.log("Baby Age:", babyAge);

  $(document).ready(function() {
    $(".navbar .nav-link").on("click", function() {
      $(".navbar").find(".activeNav").removeClass("activeNav");
      $(this).addClass("activeNav");
    });
  });

  return (
    <>
 <Header/>
      <section className="HomeBaby_page" style={{backgroundColor:'#dcdcdc'}} >
        <div className="container pb-5">
          <div className="text-left pb-4 pt-3">
           <h4>Home / Baby</h4>
          </div>
          <div className="row g-4 pb-5">
          <div className="col-md-3">
              <div className="card p-4 rounded-4" style={{ backgroundColor: '#a9a9a9', boxShadow: '1px 2px 9px #000', padding: '1em' }}>
                <div className="text-center">
                  <img
                    src={require("../../assets/image/img1.png")}
                    width="90px"
                    alt=""
                  />
                  <h4 className="pt-2">Vaccination</h4>
                </div>
                <div className="text-left">
                  {upcomingVaccination && upcomingVaccination.length > 0 ? (
                    <p>Upcoming:   {upcomingVaccination[0].vaccname}</p>
                  ) : (
                    <p>No upcoming vaccinations.</p>
                  )}
                  
                  {doneVaccination && doneVaccination.length > 0 ? (
                    <p>Done:  {doneVaccination[0].vaccname}</p>
                  ) : (
                    <p>No vaccinations done.</p>
                  )}
                </div>
                <div className="text-center">
                  <Link to={`/vaccination?babyId=${selectedBabyId}`} className="btn btn-light w-50" style={{ boxShadow: '1px 2px 9px #000', padding: '1em' }}>
                    More <i className="fa ps-2  fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-4 rounded-4" style={{backgroundColor:'#a9a9a9',boxShadow: '1px 2px 9px #000',
              padding: '1em'}}>
                <div className="text-center">
                  <img
                    src={require("../../assets/image/img2.png")}
                    width="90px"
                    alt=""
                  />
                  <h4 className="pt-2">Diet Plan & Water Intake</h4>
                </div>
                <div className="text-left">
                  <p>Recommended Diet :{babyAge}nd Month</p>
                 
                </div>
                <div className="text-center mt-3">
                  <Link to={`/diet_plan?babyAge=${babyAge}`} className="btn btn-light w-50" style={{boxShadow: '1px 2px 9px #000',padding: '1em'}}>More  <i className="fa ps-2  fa-arrow-right"></i>  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-4 rounded-4"style={{backgroundColor:'#a9a9a9',boxShadow: '1px 2px 9px #000',
              padding: '1em'}}>
                <div className="text-center">
                  <img
                    src={require("../../assets/image/img3.png")}
                    width="90px"
                    alt=""
                  />
                  <h4 className="pt-2">Milestone</h4>
                </div>
                <div className="text-left">
                {milestone && milestone.length > 0 ? (
                    <p>Recent:   {milestone[0].title}</p>
                  ) : (
                    <p>No upcoming vaccinations.</p>
                  )}
                </div>
                <div className="text-center mt-5">
                  <Link to={`/milestones?babyId=${selectedBabyId}`} className="btn btn-light w-50" style={{boxShadow: '1px 2px 9px #000',padding: '1em'}}>More  <i className="fa ps-2  fa-arrow-right"></i>  </Link> 
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-4 rounded-4" style={{backgroundColor:'#a9a9a9',boxShadow: '1px 2px 9px #000',
              padding: '1em'}}>
                <div className="text-center">
                  <img
                    src={require("../../assets/image/img4.png")}
                    width="90px"
                    alt=""
                  />
                  <h4 className="pt-2">Doctor Consultancy</h4>
                </div>
                <div className="text-left">
               
                {doctor && doctor.length > 0 ? (
                    <p>Recent:   {doctor[0].name}</p>
                  ) : (
                    <p>No upcoming vaccinations.</p>
                  )}
                  <p>Recent Doctor hired</p>
                </div>
                <div className="text-center mt-3">
                  <Link to="/doctor_consultancy" className="btn btn-light w-50" style={{boxShadow: '1px 2px 9px #000',padding: '1em'}}>More  <i className="fa ps-2  fa-arrow-right"></i>   </Link>
                </div> 
              </div>
            </div>
          
          </div>
          <div className="mx-4 text-center">
          <h1 style={{fontWeight:"400",color:'#B5972F'}} >Hi ! Baby Information is Displayed Here. Lets Daily look on it</h1>
          </div>
        </div>
      </section>
  <Footer/>
    </>
  );
};

export default HomeBaby;
