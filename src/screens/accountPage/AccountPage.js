import React from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
const AccountPage = () => {
    $(".navbar .nav-link").on("click", function(){
        $(".navbar").find(".activeNav").removeClass("activeNav");
        $(this).addClass("activeNav");
     });
    
  return (
    <>
   <Header/>
    <div className='py-3' style={{backgroundColor:'#dcdcdc',minHeight:"100vh"}} >
        <h4>Home / Account</h4>
        <div  style={{backgroundColor:'#a9a9a9', boxShadow: '1px 2px 9px #000',
              padding: '1em'}} >
            <ul className='text_account pb-3' >
           
                <li className='pt-3'>
                    <a href='' className='d-flex align-items-center'>
                        <div>
                            <img src={require('../../assets/image/ac1.png')} alt='' width="40px" />
                        </div>
                        <div className='ps-5'>
                            <span>My Profile</span>
                        </div>
                    </a>
                </li>

                <li className='pt-3'>
                    <a href='' className='d-flex align-items-center'>
                        <div>
                            <img src={require('../../assets/image/ac2.png')} alt='' width="40px" />
                        </div>
                        <div className='ps-5'>
                            <span>Bookmarks</span>
                        </div>
                    </a>
                </li>

                <li className='pt-3'>
                    <a href='' className='d-flex align-items-center'>
                        <div>
                            <img src={require('../../assets/image/ac3.png')} alt='' width="40px" />
                        </div>
                        <div className='ps-5'>
                            <span>Rate us</span>
                        </div>
                    </a>
                </li>

                <li className='pt-3'>
                    <a href='' className='d-flex align-items-center'>
                        <div>
                            <img src={require('../../assets/image/ac4.png')} alt='' width="40px" />
                        </div>
                        <div className='ps-5'>
                            <span>FAQ</span>
                        </div>
                    </a>
                </li>

                <li className='pt-3'>
                    <a href='' className='d-flex align-items-center'>
                        <div>
                            <img src={require('../../assets/image/ac5.png')} alt='' width="40px" />
                        </div>
                        <div className='ps-5'>
                            <span>Settings</span>
                        </div>
                    </a>
                </li>
                <li className='pt-3'>
                    <a href='' className='d-flex align-items-center'>
                        <div>
                            <img src={require('../../assets/image/ac6.png')} alt='' width="40px" />
                        </div>
                        <div className='ps-5'>
                            <span>About us</span>
                        </div>
                    </a>
                </li>
                <li className='pt-5'>
                    <a href='' className='d-flex align-items-center'>
                        <div>
                            <img src={require('../../assets/image/ac7.png')} alt='' width="40px" />
                        </div>
                        <div className='ps-5'>
                            <span>Logout</span>
                        </div>
                    </a>
                </li>
             
               
             
               
            </ul>
        </div>
    </div>

   <Footer/>
    
    </>
  )
}

export default AccountPage