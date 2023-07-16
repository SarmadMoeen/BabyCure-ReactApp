import React from "react";
import { Link } from "react-router-dom";
import $ from 'jquery'
import Header from "../../components/Header/Header";
const ListPhysicalActivities = () => {
  $(".navbar .nav-link").on("click", function(){
    $(".navbar").find(".activeNav").removeClass("activeNav");
    $(this).addClass("activeNav");
 });
  return (
    <>
     <Header/>
      <section
        className="PhysicalActivies_page"
        style={{ backgroundColor: "#B8E0FD" }}
      >
        <div className="container pb-5">
          <div className="text-left pb-4 pt-3">
            <h4>Home / Physical Activities/The Tickle game</h4>
          </div>
          <div className="row">
     
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-5 mx-auto text-center p-0">
                  <div>
                    <img src={require('../../assets/image/bg1.png')} width="100%" height="100%" alt="" />
                  </div>
                </div>
                <div className="col-md-12 p-0">
                <h3 className="pt-4">24 month old babies</h3>
                  <div className="p-4 w-100 h-100 text-dark" style={{backgroundColor:''}} >
                    <h3>The Tickle game</h3>
                    <p style={{fontSize:'20px'}} >This is a very fun game to play with a toddler. Hide a feather underneath one of the wipes pack flip lids attached to a board and encourage your toddler to look for it. Once the feather is found, use it to tickle your toddler with it. I keep all the other lids empty, but as an option, small flat animal toys or magnets can be placed there for discovery. I used hot glue to attach flip lids for durability but they are still sticky if you use them right away after removing them from a wipes pack. This game was inspired by The Tickle Book which has flaps with tickle monsters hiding underneath.</p>
                    
                  </div>
                </div>
              </div>
            </div>
        
          </div>
        </div>
      </section>
      <div className="py-4" style={{ backgroundColor: "#42709B" }}></div>
    </>
  );
};

export default ListPhysicalActivities;
