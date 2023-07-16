import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AdminNavbar from "../Admin/AdminNavbar";

const DoctorAdmin2 = () => {
  return (
    <>
      <AdminNavbar/>
      <section className="DoctorAdmin_page"  style={{backgroundColor:'#dcdcdc'}} >
        <div className="container pb-5 pt-3">
          <h4>Doctor Home</h4>
          <div className="text-center mx-5 pt-3">
            <h3 className="heading">Welcome to Baby Cure!</h3>
            <h5 className="para pt-3 pb-4">
              “When the baby is going through growth spurts or mood changes, I
              use The Wonder Weeks to keep track of it all and why he behaves
              differently.” – Devinda, Momatu team.
            </h5>
          </div>
           <div className="row">
             <div className="mx-auto  col-md-9 ">
             <div className="row g-5">
            <div className="col-md-6">
              <div className="card p-4 rounded-4"   style={{backgroundColor:'#a9a9a9', boxShadow: '1px 2px 9px #000',
                padding: '1em'}}>
                <div className="text-center">
                  <img
                    src={require("../../assets/image/parent.png")}
                    width="130px"
                    alt=""
                  />
                  <h5 className="py-3 text-black ">Manage <br/> Parents</h5>
                </div>
                <div className="text-center mt-3">
                  <Link to="/requests" className="btn btn-light w-50" style={{boxShadow: '1px 2px 9px #000',
                padding: '1em'}}>More <i class="fa ps-2  fa-arrow-right"></i> </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 rounded-4"  style={{backgroundColor:'#a9a9a9', boxShadow: '1px 2px 9px #000',
                padding: '1em'}} >
                <div className="text-center text-black">
                  <img
                    src={require("../../assets/image/details.png")}
                    width="130px"
                    alt=""
                  />
                  <h5 className="py-4">Payment <br/>
Details</h5>
                </div>
                <div className="text-center mt-3">
                  <Link  to="/payment_details" className="btn btn-light w-50" style={{boxShadow: '1px 2px 9px #000',
                padding: '1em'}}>More <i class="fa ps-2  fa-arrow-right"></i> </Link>
                </div>
              </div>
            </div>
          
          </div>
             </div>
           </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default DoctorAdmin2;
