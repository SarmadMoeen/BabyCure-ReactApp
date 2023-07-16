import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const RequestCustomize = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [cause, setCause] = useState("");

  const doRequest = () => {
    axios
      .post("http://localhost:3000/postReqCustomizeDietPlan", {
        name,
        age,
        weight,
        cause,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Header />
      <section style={{ backgroundColor: "#dcdcdc", height: "150vh" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h5 className="pt-4">
                Home / Baby / Diet Plan & Water Intake / Request Customize Diet
                Plan
              </h5>
              <div className="row">
                <div className="col-md-8 p-5">
                  <div className="form-group">
                    <label htmlFor="exampleInputName" className="form-label">
                      Name
                    </label>
                    <input
                      placeholder="Enter name"
                      type="text"
                      className="form-control let_baby_search"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="exampleInputAge" className="form-label">
                      Age
                    </label>
                    <input
                      placeholder="Enter age"
                      type="text"
                      className="form-control let_baby_search"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="exampleInputWeight" className="form-label">
                      Weight
                    </label>
                    <input
                      type="text"
                      className="form-control let_baby_search"
                      placeholder="weight (KGs)"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label
                      htmlFor="exampleInputDescription"
                      className="form-label"
                    >
                      Cause for requesting diet plan
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter description"
                      value={cause}
                      onChange={(e) => setCause(e.target.value)}
                    />
                  </div>
                  <div className="pt-4 col d-flex justify-content-between">
                    <button
                      onClick={doRequest}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="btn btn-lg text-white px-5 py-2"
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      Request
                    </button>
                    <div className="c0l-md-6">
                      <h3>500/- Rs</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="bg-" style={{position:'relative'}} >
              <div style={{position:'absolute',top:'0px',left:'148px'}}   >
              
            </div>



                
            <div style={{position:'absolute',top:'220px',left:'-171px'}}  >
              <FaCircle color='black' size={23} style={{marginLeft: 20}}/>
            </div>

                <div style={{position:'absolute',top:'40px' ,left:'25px'}}  >
                <FaCircle color='black' size={90} style={{marginLeft: 10,}}/>
                <FaCircle color='white' size={70} style={{marginLeft: 20, marginTop: -114}}/>
                <FaCircle color='#daa520' size={60} style={{marginLeft: -65, marginTop: -113}}/>
                </div>
                <div style={{position:'absolute',top:'20px' ,left:'295px'}}  >
                <FaCircle color='black' size={90} style={{marginLeft: 10,}}/>
                <FaCircle color='white' size={70} style={{marginLeft: 20, marginTop: -114}}/>
                <FaCircle color='#daa520' size={60} style={{marginLeft: -65, marginTop: -113}}/>
                </div>
                <div style={{position:'absolute',top:'150px' ,left:'220px'}}  >
                <FaCircle color='black' size={90} style={{marginLeft: 10,}}/>
                <FaCircle color='white' size={70} style={{marginLeft: 20, marginTop: -114}}/>
                <FaCircle color='#daa520' size={60} style={{marginLeft: -65, marginTop: -113}}/>
                </div>
                <div style={{position:'absolute',top:'310px' ,left:'260px'}}  >
                <FaCircle color='black' size={90} style={{marginLeft: 10,}}/>
                <FaCircle color='white' size={70} style={{marginLeft: 20, marginTop: -114}}/>
                <FaCircle color='#daa520' size={60} style={{marginLeft: -65, marginTop: -113}}/>
                </div>
                <div style={{position:'absolute',top:'435px' ,left:'360px'}}  >
                <FaCircle color='black' size={90} style={{marginLeft: 10,}}/>
                <FaCircle color='white' size={70} style={{marginLeft: 20, marginTop: -114}}/>
                <FaCircle color='#daa520' size={60} style={{marginLeft: -65, marginTop: -113}}/>
                </div>
                <div style={{position:'absolute',top:'520px' ,left:'230px'}}  >
                <FaCircle color='black' size={90} style={{marginLeft: 10,}}/>
                <FaCircle color='white' size={70} style={{marginLeft: 20, marginTop: -114}}/>
                <FaCircle color='#daa520' size={60} style={{marginLeft: -65, marginTop: -113}}/>
                </div>
                <div style={{position:'absolute',top:'650px' ,left:'130px'}}  >
                <FaCircle color='black' size={90} style={{marginLeft: 10,}}/>
                <FaCircle color='white' size={70} style={{marginLeft: 20, marginTop: -114}}/>
                <FaCircle color='#daa520' size={60} style={{marginLeft: -65, marginTop: -113}}/>
                </div>
                <div style={{position:'absolute',top:'790px' ,left:'115px'}}  >
                <FaCircle color='black' size={90} style={{marginLeft: 10,}}/>
                <FaCircle color='white' size={70} style={{marginLeft: 20, marginTop: -114}}/>
                <FaCircle color='#daa520' size={60} style={{marginLeft: -65, marginTop: -113}}/>
                </div>

                <div style={{position:'absolute',top:'200px',left:'-120px'}} >
                <FaCircle color='black' size={90} style={{marginLeft: 10,}}/>
                <FaCircle color='white' size={70} style={{marginLeft: 20, marginTop: -114}}/>
                <FaCircle color='#daa520' size={60} style={{marginLeft: -65, marginTop: -113}}/>
                </div>

                <div style={{position:'absolute',top:'400px',left:'10px'}} >
                <FaCircle color='black' size={90} style={{marginLeft: 10,}}/>
                <FaCircle color='white' size={70} style={{marginLeft: 20, marginTop: -114}}/>
                <FaCircle color='#daa520' size={60} style={{marginLeft: -65, marginTop: -113}}/>
                </div>

                <div style={{position:'absolute',top:'460px',left:'100px'}}  >
                <FaCircle color='black' size={23} style={{marginLeft: 20}}/>
                </div> 

                <div style={{position:'absolute',top:'600px',left:'-100px'}} >
                <FaCircle color='black' size={90} style={{marginLeft: 10,}}/>
                <FaCircle color='white' size={70} style={{marginLeft: 20, marginTop: -114}}/>
                <FaCircle color='#daa520' size={60} style={{marginLeft: -65, marginTop: -113}}/>
                </div>

                <div style={{position:'absolute',top:'620px',left:'-171px'}}  >
                <FaCircle color='black' size={23} style={{marginLeft: 20}}/>
                </div>
                <div style={{position:'absolute',top:'620px',left:'110px'}}  >
                <FaCircle color='black' size={23} style={{marginLeft: 20}}/>
                </div>
                <div style={{position:'absolute',top:'20px',left:'250px'}}  >
                <FaCircle color='black' size={23} style={{marginLeft: 20}}/>
                </div>
                <div style={{position:'absolute',top:'190px',left:'170px'}}  >
                <FaCircle color='black' size={23} style={{marginLeft: 20}}/>
                </div>
                <div style={{position:'absolute',top:'340px',left:'200px'}}  >
                <FaCircle color='black' size={23} style={{marginLeft: 20}}/>
                </div>
                <div style={{position:'absolute',top:'440px',left:'300px'}}  >
                <FaCircle color='black' size={23} style={{marginLeft: 20}}/>
                </div>
                <div style={{position:'absolute',top:'540px',left:'170px'}}  >
                <FaCircle color='black' size={23} style={{marginLeft: 20}}/>
                </div>

                <div style={{position:'absolute',top:'770px',left:'-180px'}} >
                 <FaCircle color='black' size={90} style={{marginLeft: 10,}}/>
                <FaCircle color='white' size={70} style={{marginLeft: 20, marginTop: -114}}/>
                <FaCircle color='#daa520' size={60} style={{marginLeft: -65, marginTop: -113}}/>
                </div>

                <div style={{position:'absolute',top:'32px',right:'0px',zIndex:'999'}} >
                  <img src={require('../../assets/image/d.png')} width="100%" alt="" />
                </div>
                
                <div style={{position:'absolute',top:'590px',right:'80px',zIndex:'99'}} >
                  <img src={require('../../assets/image/d2.png')}  alt="" />
                </div>
                
                <div style={{position:'absolute',top:'300px',right:'0px'}} >
                  <img src={require('../../assets/image/d3.png')}  alt="" />
                </div>
                <div style={{position:'absolute',top:'730px',right:'0px'}} >
                  <img src={require('../../assets/image/d4.png')} alt=""
                  // width='50%'
                  />
                </div>
                
                

                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Modal --> */}
      <div
        class="modal fade "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        
      >
        <div class="modal-dialog pt-5 mt-5">
          <div  style={{ backgroundColor: "#a9a9a9" ,boxShadow: '1px 2px 9px #000'}}>
            <div class="modal-header border-0">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body text-center">
              <h2 className="pt-4 text-white"> Yayy! Request has sent</h2>
              <img
                className="py-4"
                src={require("../../assets/image/face.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default RequestCustomize;
