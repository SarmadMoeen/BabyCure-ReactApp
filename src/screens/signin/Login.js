import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContextApi/AuthContext";
import axios from "axios";
import Modal from "antd/es/modal/Modal";

const Login = () => {

  
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const [login, setLogin] = useState({
    email: "",
    password: "",
    error: ""
  });

  const handleInputs = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email: login.email,
        password: login.password
      });

      const { token, user } = response.data;
      // Store the token and user details in localStorage or sessionStorage
      // for authentication purposes
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // Update the user in the AuthContext
      setUser(user);

      // Redirect the user to the desired page
      // For example:
      navigate('/home');
    } catch (error) {
      console.error(error);
      window.alert('Invalid email or password');
      setLogin({ ...login, error: "Invalid email or password" });
    }
  }

  return (
   
    <div className="Login_page">
      <div className="container-fluid" style={{backgroundColor:'#dcdcdc',minHeight: '100vh'}}>
        <div className="row align-items-center">
          <div className="col-md-7 p-0">
            <div className="" style={{ overflow: "hidden" }}>
              <img
                src={require("../../assets/image/Rectangle 2 (1).png")}
                alt=""
                width="100%"
                height="750px"
              />
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <form>
                <div className="row">
                  <div className="col-md-10 pt-5 mx-auto">
                    <div className="text-center">
                      <h2 className="text-bold">Login</h2>
                      <hr className="underline" />
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label m-0"
                          >
                            Email
                          </label>
                          <input
                            onChange={handleInputs}
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            name="email"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputPassword1"
                            className="form-label m-0"
                          >
                            Password
                          </label>
                          <input
                            onChange={handleInputs}
                            type="password"
                            className="form-control"
                            name="password"
                            id="exampleInputPassword1"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-12 text-center">
                        <h6 className="py-3 float-end">
                          <Link to="/forget_password" className="btn text-danger" >
                            Forgot password?
                          </Link>
                        </h6>
                      </div>

                      {/* Display error message */}
              {login.error && (
                <div className="col-md-12 text-center">
                  <p className="text-danger">{login.error}</p>
                </div>
              )}


                      <div className="col-md-12 text-center">
                        <Link to="/home"><button
                          onClick={handleLogin}
                          className="btn border-0 px-3 rounded-3"
                          style={{backgroundColor:'black', color:'white'}}
                        >
                          LOGIN
                        </button></Link>
                      </div>
                     
                  <div className="col-md-12 text-center pt-2">
                    <h6 className="py-3" > Not a member? <Link to="/signup" className="btn text-danger"  >Sign Up</Link> </h6>
                   
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

export default Login
