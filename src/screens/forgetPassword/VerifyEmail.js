import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom'
import PinInput from 'react-pin-input';
import $ from 'jquery'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
const VerifyEmail = () => {
  $(".navbar .nav-link").on("click", function(){
    $(".navbar").find(".activeNav").removeClass("activeNav");
    $(this).addClass("activeNav");
 });
  return (
    <>
  <Header/>
    <div  className='container-fluid' style={{backgroundColor:'#dcdcdc'}} >
        <h4 className='pt-3'>Verify Email</h4>
        <div className='row'>
            <div className='col-md-7 mx-auto'>
                <div className='text-center'>
                <div className='text-center'>
        <FaEnvelope color='#daa520' size={170} style={{marginLeft: 20}}/>
       </div>


                </div>
                <div className='pt-2'>
                    <h4 className='text-center'>Please enter4-digit code send to amnazohaib23@gmail.com</h4>

                    <div className='text-center'>
                      <PinInput 
  length={4} 
  initialValue=""
  secret
  secretDelay={100} 
  onChange={(value, index) => {}} 
  type="numeric" 
  inputMode="number"
  style={{padding: '10px'}}  
  inputStyle={{borderColor: 'red'}}
  inputFocusStyle={{borderColor: 'blue'}}
  onComplete={(value, index) => {}}
  autoSelect={true}
  regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
/>
                    </div>

                    <div className='py-5 text-center'>
                      <Link to="" className='text-bold' style={{color:'#E149C0'}} > Resend code</Link>
                    </div>
                    <div className='pb-5  text-center'>
                      <Link to="/new_password" className='btn border-0 px-5 py-1' style={{backgroundColor:'black', color:'white', boxShadow: '1px 2px 9px #000',
    padding: '1em'}}>Verify</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
<Footer/>
    </>
   
  )
}

export default VerifyEmail