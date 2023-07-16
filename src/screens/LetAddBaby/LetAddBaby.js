

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Radio } from 'antd'
import { useContext } from 'react'
import { AuthContext } from '../../ContextApi/AuthContext'


const LetAddBaby = () => {

  const {user} = useContext(AuthContext)

  console.log("UserID at Add Baby",user.id)
  
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [value, setGender] = useState('girl')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')

  const handleAddBaby = () => {
    axios.post('http://localhost:3000/Babies', {
      userID:user.id,
      name,
      date,
      value,
      weight,
      height
    })
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }



  return (
    <>
     <header className='d-flex  py-3 px-3 justify-content-between' style={{backgroundColor:'black'}} >
        <div style={{display:'flex', flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
            <img  src={require('../../assets/image/Logo.png')} alt='' style={{width: 60, height: 60}}   />
            <h3 className='text-white' style={{letterSpacing:'8px'}} >Baby Cure</h3>
        </div>
     </header>
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

     <section style={{backgroundColor:'#dcdcdc'}} >
     <div className='container-fluid' style={{backgroundColor:'#a9a9a9'}}>
        <div className='row'>
             <div className='col-md-6' >
                <div>

                     <h3 className='pt-4 text-center pb-4' style={{marginTop: 20}} >Let's add a baby!</h3>

                     <div className='p-4' style={{backgroundColor:'#dcdcdc',border:'3px solid #000', boxShadow: '1px 2px 9px #000',
    margin: '2em',
    padding: '1em'}}>
                        <div className='row'>
                            <div className='col-md-12 pt-3'>
                                <div>
                                <label for="fname" style={{fontSize: '20', fontWeight:'bold', color: 'gray'}}>Name</label>
                                <input
                                      placeholder='Enter Name'
                                      className='form-control'
                                      type='text'
                                      value={name}
                                      onChange={e => setName(e.target.value)}
                                      color='black'
                                      style={{color:'black'}}
                                    />
                                </div>
                            </div>
                            <div className='col-md-12 pt-3 '>
                            <div>
                            <label for="date" style={{fontSize: '20', fontWeight:'bold', color: 'gray'}}>Date</label>
                            <input
                                  placeholder='Date of Birth'
                                  className='form-control '
                                  type='date'
                                  value={date}
                                  onChange={e => setDate(e.target.value)}
                                />
                                </div>
                            </div>

                            <div className='col-md-12 pt-3'>
                            <label for="gender" style={{fontSize: '20', fontWeight:'bold', color: 'gray'}}>Gender</label>
                            <br></br>
                              <Radio.Group
                                id='gender'
                                value={value}
                                onChange={e => setGender(e.target.value)}
                              >
                                <Radio value='boy'>Boy</Radio>
                                <Radio value='girl'>Girl</Radio>
                                <Radio value='other'>Other</Radio>
                              </Radio.Group>
                            </div>
                           <div className='col-md-6 pt-3'>
                           <label for="weight" style={{fontSize: '20', fontWeight:'bold', color: 'gray'}}>Weight</label>
                           <br></br>
                           <input
                                placeholder='Enter Weight( kg)'
                                type='text'
                                className='from-control'
                                value={weight}
                                onChange={e => setWeight(e.target.value)}
                              />
                           </div>
                           <div className='col-md-6 pt-3'>
                           <label for="height" style={{fontSize: '20', fontWeight:'bold', color: 'gray'}}>Height</label>
                           <br></br>
                           <input
                                placeholder='Enter Height (cm)'
                                type='text'
                                className='from-control'
                                value={height}
                                onChange={e => setHeight(e.target.value)}
                              />
                           </div>
                           <div className='col-md-12 text-center pt-5 rounded-3'>
                             <Link to="/home" ><button onClick={handleAddBaby} style={{backgroundColor:'black',fontWeight:'700', color:'white'}} className='btn px-4'>Add Baby</button></Link> 
                           </div>
                           <div className='col-md-12 text-end'>
                               <Link to="/add_baby" style={{color:'red'}}
                                >Skip for Now</Link>
                           </div>
                        </div>
                     </div>
                </div>    
             </div>
             <div className='col-md-6 text-end'> 
                <div className=''>
                    <img  src={require('../../assets/image/baby.png')} alt=''   />
                </div>
             </div>
        </div>
    </div>
     </section>
     <div
        style={{
          background: 'black',
          height: '5px',
        }}
      />
     <footer  className='py-3'  style={{backgroundColor:'#daa520'}}>

     </footer>
    </>
  )
}

export default LetAddBaby

