import React from "react";
import { FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const MotherHome = () => {
  return (
    <>
      <Header />
      <section className="home_page" style={{minHeight: "100vh" }} >
        <div className="container-fluid py-5" >
          <div className="text-center mx-5 pt-5">
            <h6 className="heading">Welcome to Baby Cure!</h6>
            <p className="para pt-3">
              “When the baby is going through growth spurts or mood changes, I
              use The Wonder Weeks to keep track of it all and why he behaves
              differently.” – Devinda, Momatu team.
            </p>
          </div>
          <div className="row gy-5">
            <div className="col-md-3">
              <div className="card p-4 rounded-4" style={{backgroundColor:'#a9a9a9',boxShadow: '1px 2px 9px #000',
    padding: '1em'}}>
                <div className="text-center">
                <img
                    src={require("../../assets/image/img2.png")}
                    width="90px"
                    alt=""
                  />
                  <h5 className="pt-2" style={{color:'black'}}>Mother Diet Plan </h5>
                </div>
                <div className="text-left">
                  <p> </p>
                  <p>
                    
                  </p>
                </div>
                <div className="text-center mt-3">
                 <Link to="/mother_dietPlan"> <button className="btn btn-light w-50" style={{boxShadow: '1px 2px 9px #000',
    padding: '1em'}}>More  <i class="fa ps-2  fa-arrow-right"></i> </button></Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-4 rounded-4" style={{backgroundColor:'#a9a9a9',boxShadow: '1px 2px 9px #000',
    padding: '1em'}}>

<div className='text-center'>
        <FaQuoteLeft color='black' size={23} style={{marginLeft: 20}}/>
        <FaQuoteRight color='black' size={23} style={{marginLeft: 20}}/>
       </div>
                <div className="text-center">
                  <h5 className="pt-2" style={{color:'black'}}>Qoutes for Mother</h5>
                </div>
               
                <div className="text-center mt-2">
                  <Link to="/qoutes"><button style={{marginTop:"80px",boxShadow: '1px 2px 9px #000',
    padding: '1em'}} className="btn btn-light w-50">More  <i class="fa ps-2  fa-arrow-right"></i> </button></Link>
                </div>
              </div>
            </div>
        
            <div className="col-md-3 pt-5 mt-5 text-center">
            
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default MotherHome;
