import React from "react";
import { Link, NavLink } from "react-router-dom";

const MainPage2 = () => {
  return (
    <div className="mainPage d-flex align-items-center">
      <style>
        {`
        .mainPage {
          min-height: 100vh;
        }
      `}
      </style>
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-lg-9 col-md-10 col-sm-12 mx-auto">
            <p className="text-white">
              Hello! <br />
              It's great to see you here. <br />
              Baby Cure is an app and website which facilitates young mothers in raising their child,
              keeping track of their food and vaccinations, and much more...
            </p>
            <div className="text-center pt-4">
              <div>
                <NavLink to="/login" className="btn btn_dark">Login as User</NavLink>
              </div>
              <div className="pt-4">
                <NavLink to="/doctor_login" className="btn btn_dark">Login as Doctor</NavLink>
              </div>
              <div className="pt-4">
                <NavLink to="/nutritionist_login" className="btn btn_dark">Login as Nutritionist</NavLink>
              </div>
              <div className="pt-4">
                <NavLink to="/admin_login" className="btn btn_dark">Login as Admin</NavLink>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage2;
