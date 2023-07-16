import React from 'react'
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom'
import $ from 'jquery';
const Header = ({navbar_background}) => {




  $(".navbar .nav-link").on("click", function(){
    $(".navbar").find(".activeNav").removeClass("activeNav");
    $(this).addClass("activeNav");
 });
  
  return (
    <>
        <nav class={`navbar navbar-expand-lg navbar-light`} id="navbar15">
        <div class="container-fluid">
        <div style={{display:'flex', flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
            <img  src={require('../../assets/image/Logo.png')} alt='' style={{width: 60, height: 60}}   />
            <h3 className='text-white' style={{letterSpacing:'8px'}} >Baby Cure</h3>
        </div>
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
                <Link class="nav-link activeNav" aria-current="page" to="/home">
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
                  Physical Activities
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/recipes">
                DIY Remedies & Recipes
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
       <div className='text-center'>
        <FaUser color='white' size={23} style={{marginLeft: 20}}/>
       </div>
        <div>
        <h6 className='text-white '>Account</h6>
        </div>
      </Link>
          </div>
        </div>
      </nav>
      <div
        style={{
          background: '#daa520',
          height: '5px',
        }}
      />
     <div
        style={{
          background: 'black',
          height: '5px',
        }}
      />
     <div
        style={{
          background: '#daa520',
          height: '5px',
        }}
      />
     <div
        style={{
          background: 'black',
          height: '5px',
        }}
      />
    </>
  )
}

export default Header