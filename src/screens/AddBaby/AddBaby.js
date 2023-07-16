import React from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const AddBaby = () => {
  return (
    <>
      <Header />
      <section className="home_page" >
        <div className="container-fluid py-5" style={{backgroundColor:'#dcdcdc'}}>
          <div className="text-center mx-5 pt-5">
            <h6 className="heading">Welcome to Baby Cure!</h6>
            <p className="para pt-3">
              “When the baby is going through growth spurts or mood changes, I
              use The Wonder Weeks to keep track of it all and why he behaves
              differently.” – Devinda, Momatu team.
            </p>
          </div>
       
        </div>
      </section>
      <section className="p-5" style={{backgroundColor:'#dcdcdc'}}>
          <div className="container p-4  text-center" style={{backgroundColor:'#a9a9a9', opacity: 0.5, borderRadius: 20}}>
              <NavLink to="/let_add_baby">
              <div className="pt-3">
                <img  src={require('../../assets/image/Vector.png')}   alt=""/>
                <h4 className="pt-4 text-black">Add Baby</h4>
              </div>
              </NavLink>
          </div>
      </section>
      <div className="py-5" style={{backgroundColor:'#dcdcdc'}}>

      </div>
      <Footer/>
    </>
  );
};

export default AddBaby;
