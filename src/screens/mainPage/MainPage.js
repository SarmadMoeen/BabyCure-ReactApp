import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
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
                <h3 className="text-white">Not a member? <Link to="/signup">Sign Up</Link></h3>
              </div>
              <div className="pt-4 text-white">
                <h3>Already a member? <Link to="/main_page2">Log in</Link></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
