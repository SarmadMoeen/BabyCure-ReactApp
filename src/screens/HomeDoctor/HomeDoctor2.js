import React from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
const HomeDoctor2 = () => {
  $(".navbar .nav-link").on("click", function(){
    $(".navbar").find(".activeNav").removeClass("activeNav");
    $(this).addClass("activeNav");
 });
  return (
    <>
     <nav class={`navbar navbar-expand-lg navbar-light`}  id="navbar16">
  <div class="container-fluid">
    <Link class="navbar-brand" href="#"><img style={{width:"80px", borderRadius:"10px",marginLeft:"35px"}} src={require('../../assets/image/Baby Care.png')}></img></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link activeNav" aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/calculator">BMI Calculator</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/physical_activities">physical Activities</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/recipes">DIY Remedies & Recipes</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/common_problem">Common Problems</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#">Contact Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/home_doctor">Services</Link>
        </li>
       
      </ul>
      <div class="">
       <div className='text-center'>
       <img src={require('../../assets/image/account.png')} width="40px" alt='' />
       </div>
        <div>
        <h6 className='text-black'>Account</h6>
        </div>
      </div>
    </div>
  </div>
</nav>
    <section className=' ' style={{backgroundColor:'#D2AEFF'}} >
        <h3 className='pt-3 ps-3'> Home / Mother</h3>

      <div className='container'>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">

        <div className='d-flex justify-content-center align-items-center'>
            <div>
                <img src={require('../../assets/image/img2.png')} alt='' />
            </div>
            <div className='ps-3'>
               <div  className='p-5' style={{backgroundColor:'#673F88'}} >
                <img src={require('../../assets/image/“ ”.png')}  alt=''  />
               </div>
            </div>
        </div>
        
  <div class="carousel-inner ">
    <div class="carousel-item active">
    <div className='row '>
            <div className='col-md-4'>
            <div className=' p-4' >
       <img src={require('../../assets/image/slider1.png')} width="100%" alt='' />

        
       </div>
      
            </div>
            <div className='col-md-4'>
            <div className=' p-4' >
       <img src={require('../../assets/image/slider1.png')} width="100%" alt='' />

        
       </div>
      
            </div>
            <div className='col-md-4'>
            <div className=' p-4' >
       <img src={require('../../assets/image/slider1.png')} width="100%" alt='' />

        
       </div>
      
            </div>
         </div>
    </div>
    <div class="carousel-item">
    <div className='row '>
            <div className='col-md-4'>
            <div className=' p-4' >
       <img src={require('../../assets/image/slider1.png')} width="100%" alt='' />

        
       </div>
      
            </div>
            <div className='col-md-4'>
            <div className=' p-4' >
       <img src={require('../../assets/image/slider1.png')} width="100%" alt='' />

        
       </div>
      
            </div>
            <div className='col-md-4'>
            <div className=' p-4' >
       <img src={require('../../assets/image/slider1.png')} width="100%" alt='' />

        
       </div>
      
            </div>
         </div>
    </div>
    <div class="carousel-item">
    <div className='row '>
            <div className='col-md-4'>
            <div className=' p-4' >
       <img src={require('../../assets/image/slider1.png')} width="100%" alt='' />

        
       </div>
      
            </div>
            <div className='col-md-4'>
            <div className=' p-4' >
       <img src={require('../../assets/image/slider1.png')} width="100%" alt='' />

        
       </div>
      
            </div>
            <div className='col-md-4'>
            <div className=' p-4' >
       <img src={require('../../assets/image/slider1.png')} width="100%" alt='' />

        
       </div>
      
            </div>
         </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
    </section>
    <div className="p-4" style={{ backgroundColor: "#7D4DA6" }}></div>
    </>
  )
}

export default HomeDoctor2