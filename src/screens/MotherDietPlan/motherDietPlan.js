import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const MotherDietPlan = () => {
  const [dietPlanData, setDietPlanData] = useState([]);

  useEffect(() => {
    fetchDietPlan();
  }, []);

  const fetchDietPlan = async () => {
    try {
      const response = await fetch('http://localhost:3000/getMotherDietPlan');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setDietPlanData(data);
      console.log('Fetched Diet Plan Data:', data);
    } catch (error) {
      console.error('Error fetching diet plan:', error);
    }
  };

  return (
    <>
      <Header />
      <section style={{ backgroundColor: '#dcdcdc', minHeight: '100vh' }}>
        <div className='container' style={{ position: 'relative' }}>
          <div className='row'>
            <h4 className='pt-3'>Home / Mother / Diet Plan</h4>
            <div className='col-md-9 mx-auto'>
              {dietPlanData.map((dataItem) => (
                <div className='row' key={dataItem.id}>
                  <div className='col-md-6 mx-auto'>
                    <div
                      className='py-4'
                      style={{ position: 'relative' }}
                    >
                      <input
                        type='search'
                        className='form-control py-3 btn btn border-0 search_btn2 rounded-5'
                      />
                      <label
                        style={{
                          position: 'absolute',
                          top: '40px',
                          right: '12px',
                        }}
                      >
                        <i
                          className='fa  fa-search'
                          style={{ fontSize: '20px' }}
                        ></i>
                      </label>
                    </div>
                  </div>
                  <div className='col-md-12 pt-5 text-center justify-content-center'>
                    <div
                      className='p-4 text-white'
                      style={{
                        backgroundColor: '#a9a9a9',
                        border: '3px solid #000',
                        boxShadow: '1px 2px 9px #000',
                        padding: '1em',
                      }}
                    >
                      <h2>{dataItem.title}</h2>
                      <p className='pt-4'>{dataItem.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className='col-md-4 mx-auto pt-5 pb-4'>
                <Link
                  to='/request_customize'
                  style={{
                    backgroundColor: 'black',
                    fontSize: '16px',
                    boxShadow: '1px 2px 9px #000',
                    padding: '1em',
                  }}
                  className='btn  py-2 rounded-3 w-100 text-white'
                >
                  Request for Customize Diet Plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MotherDietPlan;
