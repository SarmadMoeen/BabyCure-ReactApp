import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const DoctorHome = () => {
  return (
    <>
      <Header />
      <section className="DoctorHome_page" style={{backgroundColor:'#dcdcdc'}}>
        <div className="container-fluid py-5">
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
                    src={require("../../assets/image/emojione-v1_baby.png")}
                    width="90px"
                    alt=""
                  />
                  <h5 className="pt-2">Azlan</h5>
                </div>
                <div className="text-left">
                  <p>BMI of baby: 6.0 kg</p>
                  <p>
                    Upcoming vaccine: Hepatitis A Upcoming vaccine: Hepatitis A
                  </p>
                </div>
                <div className="text-center mt-3">
                  <button className="btn btn-light w-50" style={{boxShadow: '1px 2px 9px #000',
    padding: '1em'}}>More</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-4 rounded-4" style={{backgroundColor:'#a9a9a9',boxShadow: '1px 2px 9px #000',
    padding: '1em'}}>
                <div className="text-center">
                  <img
                    src={require("../../assets/image/emojione-v1_baby.png")}
                    width="90px"
                    alt=""
                  />
                  <h5 className="pt-2">Azlan</h5>
                </div>
                <div className="text-left">
                  <p>BMI of baby: 6.0 kg</p>
                  <p>
                    Upcoming vaccine: Hepatitis A Upcoming vaccine: Hepatitis A
                  </p>
                </div>
                <div className="text-center mt-3">
                  <button className="btn btn-light w-50" style={{boxShadow: '1px 2px 9px #000',
    padding: '1em'}}>More</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-4 rounded-4" style={{backgroundColor:'#a9a9a9',boxShadow: '1px 2px 9px #000',
    padding: '1em'}}>
                <div className="text-center">
                  <img
                    src={require("../../assets/image/emojione-v1_baby.png")}
                    width="90px"
                    alt=""
                  />
                  <h5 className="pt-2">Azlan</h5>
                </div>
                <div className="text-left">
                  <p>BMI of baby: 6.0 kg</p>
                  <p>
                    Upcoming vaccine: Hepatitis A Upcoming vaccine: Hepatitis A
                  </p>
                </div>
                <div className="text-center mt-3">
                  <button className="btn btn-light w-50" style={{boxShadow: '1px 2px 9px #000',
    padding: '1em'}}>More</button>
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

export default DoctorHome;
