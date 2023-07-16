import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const HomeAdminPage = () => {
  return (
    <>
      <Header />
      <section
        className="HomeAdminPage_page"
        style={{ backgroundColor: "#dcdcdc",minHeight: '100vh' }}
      >
        <div className="container pb-5 pt-3">
          <h4>Home Admin</h4>
          <div className="text-center mx-5 pt-3">
            <h3 className="heading">Welcome to Baby Cure!</h3>
            <h5 className="para pt-3 pb-4">
              “When the baby is going through growth spurts or mood changes, I
              use The Wonder Weeks to keep track of it all and why he behaves
              differently.” – Devinda, Momatu team.
            </h5>
          </div>
          <div className="row g-5">
            <div className="col-md-4">
              <div
                className="card p-4 rounded-4"
                style={{backgroundColor:'#a9a9a9', boxShadow: '1px 2px 9px #000',
                padding: '1em'}}
              >
                <div className="text-center">
                  <img
                    src={require("../../assets/image/parent.png")}
                    width="130px"
                    alt=""
                  />
                  <h5 className="py-3 text-black ">
                    Manage <br /> Parents
                  </h5>
                </div>
                <div className="text-center mt-3">
                  <Link to="/manage_parents" className="btn btn-light w-50" style={{boxShadow: '1px 2px 9px #000',
                padding: '1em'}}>
                    More <i class="fa ps-2  fa-arrow-right"></i>{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card p-4 rounded-4"
                style={{backgroundColor:'#a9a9a9', boxShadow: '1px 2px 9px #000',
                padding: '1em'}}
              >
                <div className="text-center">
                  <img
                    src={require("../../assets/image/doctor (2).png")}
                    width="130px"
                    alt=""
                  />
                  <h5 className="py-3  text-black">
                    Manage <br /> Doctors
                  </h5>
                </div>

                <div className="text-center mt-3">
                  <Link to="/manage_doctor" className="btn btn-light w-50" style={{boxShadow: '1px 2px 9px #000',
                padding: '1em'}}>
                    More <i class="fa ps-2  fa-arrow-right"></i>{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card p-4 rounded-4"
                style={{backgroundColor:'#a9a9a9', boxShadow: '1px 2px 9px #000',
                padding: '1em'}}
              >
                <div className="text-center text-black">
                  <img
                    src={require("../../assets/image/details.png")}
                    width="130px"
                    alt=""
                  />
                  <h5 className="py-4">
                    Payment <br />
                    Details
                  </h5>
                </div>
                <div className="text-center mt-3">
                  <Link to="/payment_details" className="btn btn-light w-50" style={{boxShadow: '1px 2px 9px #000',
                padding: '1em'}}>
                    More <i class="fa ps-2  fa-arrow-right"></i>{" "}
                  </Link>
                </div>
              </div>
            </div>
            
            
            
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomeAdminPage;
