import React,{useState} from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {

  
  const [login,setLogin] = useState({

  
    email:"",
    password:"",

 })

 console.log(login);


 const handleInputs = (e) => {

  setLogin({ ...login, [e.target.name]: e.target.value });

};

  return (
    <div className="AdminLogin_page" >
      <div className="container-fluid" style={{backgroundColor:'#dcdcdc',minHeight: '100vh'}}>
        <div className="row align-items-center "  >
          <div className="col-md-7  p-0">
            <div className="" style={{overflow:'hidden'}} >
              <img
                src={require("../../assets/image/admin.png")}
                alt=""
                width="100%"  height="750px"
                
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
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label m-0">
                        email
                      </label>
                      <input
                      onChange={handleInputs}
                        type="email"
                        name="email"
                        class="form-control"
                        id="exampleInputEmail1"
                      />
                    </div>
                  </div>
                 
                  <div className="col-md-12">
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label m-0">
                        password
                      </label>
                      <input
                      onChange={handleInputs}
                        type="password"
                        class="form-control"
                        id="exampleInputEmail1"
                        name="password"
                      />
                    </div>
                  </div>
                
                  <div className="col-md-12 text-center">
                    <h6 className="py-3 float-end" ><Link to="/doctor_home" className="btn text-danger" >forget password?</Link> </h6>
                   
                  </div>
                  <div className="col-md-12 text-center">

                  <Link to="/home_admin_page"   style={{backgroundColor:'black', color:'white'}} className="btn border-0 px-3 rounded-3 ">LOGIN</Link>
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

export default AdminLogin;
