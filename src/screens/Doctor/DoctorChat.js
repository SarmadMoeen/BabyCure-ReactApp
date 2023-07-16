import React from 'react'
import AdminNavbar from '../Admin/AdminNavbar'
import MessageChat from '../chat/MessageChat'
import $ from 'jquery'
const DoctorChat = () => {


  const inputField = document.querySelector('input');

  inputField.addEventListener('keydown', function(event) {
    if (event.code === 'Enter') {
      // Send message here
    }
  });

  function sendMessage() {
    const messageText = inputField.value;
    const messageContainer = document.querySelector('.scroll_chat');
  
    // Create new message element
    const newMessage = document.createElement('div');
    newMessage.classList.add('p-3');
    newMessage.innerHTML = `<MessageChat message="${messageText}" chat_right="float-end" />`;
  
    // Append new message to chat container
    messageContainer.appendChild(newMessage);
  
    // Clear input field
    inputField.value = '';
  }

  inputField.addEventListener('keydown', function(event) {
    if (event.code === 'Enter') {
      sendMessage();
    }
  });
  
  
  
  
  $(".navbar .nav-link").on("click", function(){
    $(".navbar").find(".activeNav").removeClass("activeNav");
    $(this).addClass("activeNav");
 });
  return (
    <div>
      <AdminNavbar/>
        <section className=''  style={{backgroundColor:'#B8E0FD'}} >
             <div className='container-fluid py-5'>
                <h4 className='pb-3' >Home / Baby / Doctor Consultancy / Doctor Chat </h4>
                <div className='row'>
                    <div className='col-md-3'>
                       <div className='rounded-5 p-2'  style={{backgroundColor:'#497BAA'}} >

                       <div className='text-center pt-2'>
                           <img src={require('../../assets/image/chat.png')}  alt='' />
                           <h2 className='pt-1'>Chats</h2>
                       </div>
                       <div>
                          <ul className='p-0 pt-3 pb-5'>
                            <li className='bg-white p-2 rounded d-flex justify-content-between align-items-center  '>
                                <div>
                                    <img src={require('../../assets/image/chatProfile.png')} alt='' width="50px" height="50px" />
                                </div>
                                <div>
                                    <div className='d-flex justify-content-between' >
                                    <h5 className='m-0' >Dr Adnan</h5>
                                    <span>12:00 AM</span>
                                    </div>
                                    <p className='m-0'>We are glad you worked with us</p>
                                </div>
                            </li>
                             <li className='bg-white p-2 mt-1 rounded d-flex justify-content-between align-items-center  '>
                                <div>
                                    <img src={require('../../assets/image/chatProfile.png')} alt='' width="50px" height="50px" />
                                </div>
                                <div>
                                    <div className='d-flex justify-content-between' >
                                    <h5 className='m-0' >Dr Adnan</h5>
                                    <span>12:00 AM</span>
                                    </div>
                                    <p className='m-0'>We are glad you worked with us</p>
                                </div>
                            </li>
                            <li className='bg-white p-2 mt-1 rounded d-flex justify-content-between align-items-center  '>
                                <div>
                                    <img src={require('../../assets/image/chatProfile.png')} alt='' width="50px" height="50px" />
                                </div>
                                <div>
                                    <div className='d-flex justify-content-between' >
                                    <h5 className='m-0' >Dr Adnan</h5>
                                    <span>12:00 AM</span>
                                    </div>
                                    <p className='m-0'>We are glad you worked with us</p>
                                </div>
                            </li>
                            <li className='bg-white p-2 mt-1 rounded d-flex justify-content-between align-items-center  '>
                                <div>
                                    <img src={require('../../assets/image/chatProfile.png')} alt='' width="50px" height="50px" />
                                </div>
                                <div>
                                    <div className='d-flex justify-content-between' >
                                    <h5 className='m-0' >Dr Adnan</h5>
                                    <span>12:00 AM</span>
                                    </div>
                                    <p className='m-0'>We are glad you worked with us</p>
                                </div>
                            </li>
                          </ul>
                       </div>
                       </div>
                    </div>
                    <div className='col-md-6'>
                         <div className='rounded-5 px-2 py-4' style={{backgroundColor:'#497BAA'}} >
                            <div className='scroll_chat' style={{height:'420px',overflowY:'scroll'}} >
                               <div>
                                <div className='p-3'>
                                     <MessageChat message="How can I help you??" />
                                     <MessageChat  
                                       message="i am fine" 
                                      chat_right="float-end"  />
                                      <MessageChat message="How can I help you??" />
                                     <MessageChat  
                                       message="i am fine" 
                                      chat_right="float-end"  />
                                      <MessageChat message="How can I help you??" />
                                     <MessageChat  
                                       message="i am fine" 
                                      chat_right="float-end"  />
                                </div>
                               </div>
                            </div>
                           <div>
                           <div  className='position-relative'>
                           <input  className='form-control py-3 bg-white rounded-5' />
                         
                           <div  className='d-flex   position-absolute'  style={{right:'12px',top:'15px'}} >
                           <div  className='ms-2' >
                               <img onClick={sendMessage} src={require('../../assets/image/send.png')} alt=''/>
                             </div>
                             <div className='ms-2' >
                               <img src={require('../../assets/image/file.png')} alt=''/>
                             </div>
                             <div className='ms-2' >
                               <img src={require('../../assets/image/camera.png')} alt=''/>
                             </div>
                           </div>
                           </div>
                           
                           </div>
                         </div>
                    </div>
                    <div className='col-md-3'>

                         <div className='rounded-5 pb-5 p-3'  style={{backgroundColor:'#497BAA'}} >
                            <div className='text-center'>
                            <img src={require('../../assets/image/img4.png')} alt='' />
                            </div>
                            <h5 className='pt-5'>Dr Adnan</h5>
                            <p className='pt-4' >Child Specialist</p>
                            <p>0900 78501</p>
                            <span>Give ratings</span>
                            
                        </div> 
                       </div>
                </div>
             </div>
        </section>
        <footer className='py-4' style={{backgroundColor:'#497BAA'}}></footer>
    </div>
  )
}

export default DoctorChat