import React from "react";
import { Link } from "react-router-dom";
import $ from 'jquery'
const ListCommonProblem = () => {
  $(".navbar .nav-link").on("click", function(){
    $(".navbar").find(".activeNav").removeClass("activeNav");
    $(this).addClass("activeNav");
 });


  return (
    <>
      <nav class={`navbar navbar-expand-lg navbar-light`} id="navbar15">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">
          <img style={{width:"80px", borderRadius:"10px",marginLeft:"35px"}} src={require('../../assets/image/Baby Care.png')}></img>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link activeNav" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/calculator">
                  BMI Calculator
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/physical_activities">
                  physical Activities
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/recipes">
                  DIY Remedies & Physical
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/common_problem">
                  Common Problems
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  Contact Us
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  Services
                </Link>
              </li>
            </ul>
            <Link to="/account_page" class="">
              <div className="text-center">
                <img
                  src={require("../../assets/image/account.png")}
                  width="40px"
                  alt=""
                />
              </div>
              <div>
                <h6 className="text-black">Account</h6>
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <section
        className="PhysicalActivies_page"
        style={{ backgroundColor: "#B8E0FD" }}
      >
        <div className="container pb-5">
          <div className="text-left pb-4 pt-3">
            <h4>Home / Physical Activities/Playing and Learning</h4>
          </div>
          <div className="row">
     
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-5 mx-auto text-center p-0">
                  <div>
                    <img src={require('../../assets/image/bg1.png')} width="100%" height="100%" alt="" />
                  </div>
                </div>
                <div className="col-md-12 p-0">
                <h3 className="pt-4">24 month old babies</h3>
                  <div className="p-4 w-100 h-100 text-dark" style={{backgroundColor:''}} >
                    <h3>The Tickle game</h3>
                    <p style={{fontSize:'20px'}} >Play is important because it’s how children learn. At this age, your toddler will start imagining and creating through pretend play – for example, pretending to drink from a cup. As your toddler grows older, pretend play gets more complex, and you might find your toddler doing things like sweeping the floor with a tree branch. Your toddler will enjoy spending time with siblings and other children, even if they don’t play directly with others.</p>
                    
                  </div>
                </div>
              </div>
            </div>
        
          </div>
        </div>
      </section>
      <div className="py-4" style={{ backgroundColor: "#42709B" }}></div>
    </>
  );
};

export default ListCommonProblem;
