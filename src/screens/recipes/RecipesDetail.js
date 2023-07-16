import React from "react";
import { Link } from "react-router-dom";
import $ from 'jquery'
import Header from "../../components/Header/Header";

const RecipesDetail = () => {
  $(".navbar .nav-link").on("click", function(){
    $(".navbar").find(".activeNav").removeClass("activeNav");
    $(this).addClass("activeNav");
 });
  return (
    <>
    <Header/>
      <section
        className="RecipesDetail_page"
        style={{ backgroundColor: "#FDFFB4" }}
      >
        <div className="container-fluid pb-5">
          <div className="text-left pb-4 pt-3">
            <h4>Home / DIY Remedies and Recipes/ Brown Rice cereal</h4>
          </div>
          <div className="row">
                
                <div className="col-md-12">
                  <div className="text-center">
                  <h3>Solid food | 4-6 months</h3>
                    <img src={require('../../assets/image/bg3.png')} width="100%" height="300px" alt="" />
                  </div>
                </div>
                <div className="col-md-12">

                  <div className="p-4 w-100 h-100" >
                    <h3>4-6 months</h3>
                    <h3>Baby brown rice cereal</h3>
                    <p style={{fontSize:'24px'}} >



Rice cereal is one of the most common foods to introduce because it’s less allergenic and easily digested.
Mixing it to Link fairly thin texture can help babies make the transition from an all-liquid diet to Link more solid one. This same process can be applied to steel-cut oats.

</p>
                    <div className="text-center">
                
                    </div>
                  </div>
                </div>
             
            
          </div>
        </div>
      </section>
      <div className="py-4" style={{ backgroundColor: "#B1942E" }}></div>
    </>
  );
};

export default RecipesDetail;
