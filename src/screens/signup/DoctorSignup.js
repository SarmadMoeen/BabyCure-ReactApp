import React, { useState } from "react";
import { Link } from "react-router-dom";


import axios from "axios";

const DoctorSignup = () => {

const [email,setEmail]=useState()
const [username,setUserName]=useState()
const [password,setPassword]=useState()
const [confirmPassword,setConfirmPassword]=useState()


const handleSignIn = async () => {
  axios.post('http://localhost:3000/doctorRegister', {
    name:username,
    email,
    password,
    confirmPassword,
    
  })
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.error(error)
    })

   
}
;





 



  return (
    <div className="signup_page">
      <div className="container-fluid" style={{backgroundColor:'#dcdcdc',minHeight:"100vh"}}>
        <div className="row">
          <div className="col-md-7 p-0">
            <div className="" style={{overflow:'hidden'}} >
              <img
                src={require("../../assets/image/Rectangle 2 (1).png")}
                alt=""
                width="100%"  height="750px"
              />
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <form >
                <div className="row">
                  <div className="col-md-10 pt-5 mx-auto">
                    <div className="text-center">
                      <h2 className="text-bold">Doctor's Signup</h2>
                      <hr className="underline" />
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label m-0">
                          email
                        </label>
                        <input
                          placeholder=''
                          className='form-control'
                          type='text'
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12">
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label m-0">
                            username
                          </label>
                          <input
                            placeholder=''
                            className='form-control'
                            type='text'
                            value={username}
                            onChange={e => setUserName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label m-0">
                            password
                          </label>
                          <input
                            placeholder=''
                            className='form-control'
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label m-0">
                            confirm password
                          </label>
                          <input
                            placeholder=''
                            className='form-control'
                            type='password'
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      
                  </div>
                  <div className="col-md-12 text-center">
                    <h6 className="py-3" >Already a Member?<Link to="/doctor_login" className="btn text-danger" >Log in</Link> </h6>
                    <Link to="/qualification"><button onClick={handleSignIn} className="btn border-0 px-3 rounded-3 " style={{backgroundColor:'black', color:'white'}}>SIGNUP</button></Link>
                  </div>
                        </div>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorSignup;
