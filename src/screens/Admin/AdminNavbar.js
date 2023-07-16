import React from 'react'
import { Link } from 'react-router-dom'
const AdminNavbar = () => {
  return (
    <div>
        <nav class={`navbar navbar-expand-lg navbar-light`} id="navbar15">
        <div class="container-fluid">
  <div style={{display:'flex', flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
            <img  src={require('../../assets/image/Logo.png')} alt='' style={{width: 60, height: 60}}   />
            <h3 className='text-white' style={{letterSpacing:'8px'}} >Baby Cure</h3>
        </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link activeNav" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">AboutUs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ContactUs</a>
        </li>
       
      </ul>
      <Link to="/account_page" class="">
       <div className='text-center'>
       <img src={require('../../assets/image/account.png')} width="40px" alt='' />
       </div>
        <div>
        <h6 className='text-black'>Account</h6>
        </div>
      </Link>
    </div>
  </div>
</nav>
<div
        style={{
          background: '#daa520',
          height: '5px',
        }}
      />
     <div
        style={{
          background: 'black',
          height: '5px',
        }}
      />
     <div
        style={{
          background: '#daa520',
          height: '5px',
        }}
      />
     <div
        style={{
          background: 'black',
          height: '5px',
        }}
      />
    </div>
  )
}

export default AdminNavbar