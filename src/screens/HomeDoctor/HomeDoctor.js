import React from 'react'
import { Link } from 'react-router-dom'
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa'
import $ from 'jquery'
const HomeDoctor = () => {
  $(".navbar .nav-link").on("click", function(){
    $(".navbar").find(".activeNav").removeClass("activeNav");
    $(this).addClass("activeNav");
 });

  return (
    <>
     <nav class={`navbar navbar-expand-lg navbar-light`}  id="navbar16">
  <div class="container-fluid">
    <Link class="navbar-brand" href="#"><img style={{width:"80px", borderRadius:"10px",marginLeft:"35px"}} src={require('../../assets/image/Baby Care.png')}></img></Link>
    <Link class="navbar-toggler" type="Link" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </Link>
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
            <div className='px-4 py-2' style={{backgroundColor:'#673F88'}} >
                <img src={require('../../assets/image/img2.png')} alt='' />
            </div>
            <div className='ps-3'>
               <div   >
                <img src={require('../../assets/image/“ ”.png')}  alt=''  />
               </div>
            </div>
        </div>
  <div class="carousel-inner pt-3">
    <div class="carousel-item active">
    <div className='row'>
            <div className='col-md-8 mx-auto'>
            <div className='text-white p-4' style={{backgroundColor:'#68408A',border:'3px solid #000'}} >
       <h2 className='py-3'>Recommended Diet Plan</h2>
         <p className='pt-3'>An infant needs 18 – 32 ounces of breast milk in his first 3 months. You should increase the amount gradually and very slowly so that by the end of 3 months your child is fed with 32 ounces of milk approximately. You should not add any kind of cereal or starchy food item to a baby who is below 3 months of age.If your baby is younger than 12 months of age, no. Breast milk is comprised 87% of water and water is optional before one year of age. If your child is 12 months or older, water is necessary.</p>

        
       </div>
        <div className='col-md-12 text-center pb-3'>
        <Link to="/home_doctor2" className='btn mt-3 text-white py-2' style={{backgroundColor:'#68408A'}} >Request for Customize Diet Plan</Link>
        </div>
            </div>
         </div>
    </div>
    <div class="carousel-item">
    <div className='row'>
            <div className='col-md-8 mx-auto'>
            <div className='text-white p-4' style={{backgroundColor:'#68408A',border:'3px solid #000'}} >
       <h2 className='py-3'>Recommended Diet Plan</h2>
         <p className='pt-3'>An infant needs 18 – 32 ounces of breast milk in his first 3 months. You should increase the amount gradually and very slowly so that by the end of 3 months your child is fed with 32 ounces of milk approximately. You should not add any kind of cereal or starchy food item to a baby who is below 3 months of age.If your baby is younger than 12 months of age, no. Breast milk is comprised 87% of water and water is optional before one year of age. If your child is 12 months or older, water is necessary.</p>

        
       </div>
       <div className='col-md-12 text-center pb-3'>
        <Link to="/home_doctor2" className='btn mt-3 text-white py-2' style={{backgroundColor:'#68408A'}} >Request for Customize Diet Plan</Link>
        </div>
            </div>
         </div>
    </div>
    <div class="carousel-item">
    <div className='row'>
            <div className='col-md-8 mx-auto'>
            <div className='text-white p-4' style={{backgroundColor:'#68408A',border:'3px solid #000'}} >
       <h2 className='py-3'>Recommended Diet Plan</h2>
         <p className='pt-3'>An infant needs 18 – 32 ounces of breast milk in his first 3 months. You should increase the amount gradually and very slowly so that by the end of 3 months your child is fed with 32 ounces of milk approximately. You should not add any kind of cereal or starchy food item to a baby who is below 3 months of age.If your baby is younger than 12 months of age, no. Breast milk is comprised 87% of water and water is optional before one year of age. If your child is 12 months or older, water is necessary.</p>

        
       </div>
       <div className='col-md-12 text-center pb-3'>
        <Link to="/home_doctor2" className='btn mt-3 text-white py-2' style={{backgroundColor:'#68408A'}} >Request for Customize Diet Plan</Link>
        </div>
            </div>
         </div>
    </div>
  </div>
  <Link class="carousel-control-prev" type="Link" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
    <i className='' > <FaAngleLeft color='#000' size={30}    /></i>
    <span class="visually-hidden">Previous</span>
  </Link>
  <Link class="carousel-control-next" type="Link" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
    <i className='' > <FaAngleRight color='#000'  size={30}   /></i>
    <span class="visually-hidden">Next</span>
  </Link>
</div>
      </div>
    </section>
    <div className="p-4" style={{ backgroundColor: "#7D4DA6" }}></div>
    </>
  )
}

export default HomeDoctor