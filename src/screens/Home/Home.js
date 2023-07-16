import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { AuthContext } from "../../ContextApi/AuthContext";
import axios from "axios";
import { BabyContext } from "../../ContextApi/BabyContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { setSelectedBabyId } = useContext(BabyContext);
  const { setSelectedBabyDob } = useContext(BabyContext);

  console.log("User ID:",user.id)

  const [babies, setBabies] = useState([]);

  useEffect(() => {
    const fetchBabies = async () => {
      try {
        const response = await axios.get("http://localhost:3000/getBabies", {
          params: {
            userID: user.id,
          },
        });
        setBabies(response.data);
      } catch (error) {
        console.error("Error fetching babies data:", error);
      }
    };

    if (user && user.id) {
      fetchBabies();
    }
  }, [user]);

  console.log("user name", user.name)

  const handleMoreButtonClicked = (babyId,dob) => {
    console.log("Selected Baby ID home:", babyId);
    setSelectedBabyId(babyId);
    console.log("Selected Dob home:", dob);
    setSelectedBabyDob(dob);

    
  };
  return (
    <>
      <Header />

      <section className="home_page" style={{minHeight:"100vh"}}>
        <div className="container-fluid py-5" style={{ backgroundColor: "#dcdcdc" }}>
          <div className="text-center mx-5 pt-5">
            <h6 className="heading">Welcome to Baby Cure!</h6>
            <p className="para pt-3">
              “When the baby is going through growth spurts or mood changes, I use The Wonder Weeks to keep track of it all and why he behaves differently.” – Devinda, Momatu team.
            </p>
          </div>
          <div className="row gy-5">
            {babies.map((baby) => (
              <div className="col-md-3" key={baby.id}>
                <div className="card p-4 rounded-4" style={{ boxShadow: "1px 2px 9px #000", padding: "1em" }}>
                  <div className="text-center">
                    <img src={require("../../assets/image/emojione-v1_baby.png")} width="90px" alt="" />
                    <h5 className="pt-2">{baby.name}</h5>
                    
                  </div>
                  <div className="text-left">
                    <p>Date of Birth:{new Date(baby.dob).toLocaleDateString()}</p>
                   
                  </div>
                  <div className="text-center mt-3">
                    <Link to="/home_baby">
                      <button
                        className="btn btn-light w-50"
                        style={{ boxShadow: "1px 2px 9px #000", padding: "1em" }}
                        onClick={() => handleMoreButtonClicked(baby._id,baby.dob)}
                      >
                        More <i className="fa ps-2  fa-arrow-right"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="col-md-3">
              <div className="card p-4 rounded-4" style={{backgroundColor:'#a9a9a9',boxShadow: '1px 2px 9px #000',
              padding: '1em'}}>
                <div className="text-center">
                  
                  <h4 className="pt-2">{user.name}</h4>
                </div>

                <Link to="/mother_home">
                      <button
                        className="btn btn-light w-50"
                        style={{ boxShadow: "1px 2px 9px #000", padding: "1em",marginLeft:"70px",marginTop:"70px" }}
                        
                      >
                        More <i className="fa ps-2  fa-arrow-right"></i>
                      </button>
                    </Link>
               
                <div className="text-center mt-3">
                  
                </div>
              </div>
            </div>
            <div className="col-md-3 pt-5 mt-5 text-center">
              <div className="pt-5">
                <Link to="/let_add_baby">
                  <img src={require("../../assets/image/add.png")} alt="" />
                  <h5 className="text-black">Add Baby</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
