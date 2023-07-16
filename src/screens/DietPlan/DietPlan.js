import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import $ from 'jquery';
import { useState, useEffect, useContext } from 'react';
import Footer from '../../components/Footer/Footer';
import { BabyContext } from '../../ContextApi/BabyContext';
import { useLocation } from 'react-router-dom';

export const DietPlan = () => {
  const { selectedBabyId, setSelectedBabyId } = useContext(BabyContext);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const babyId = queryParams.get('babyId');
  const babyAge = queryParams.get('babyAge');

  useEffect(() => {
    if (babyId) {
      setSelectedBabyId(babyId);
    }
  }, [babyId, setSelectedBabyId]);

  console.log('Selected Baby ID at Diet Plan:', selectedBabyId);

  useEffect(() => {
    if (babyAge) {
      // Do something with the babyAge value
      console.log('Baby Age at diet Plan:', babyAge);
    }
  }, [babyAge]);

  const [dietPlans, setDietPlans] = useState([]);

  useEffect(() => {
    fetchDietPlans();
  }, []);

  const fetchDietPlans = async () => {
    try {
      const response = await fetch(`http://localhost:3000/getDietPlan?babyAge=${babyAge}`);
      const data = await response.json();
      setDietPlans(data);
    } catch (error) {
      console.log('Error fetching diet plans:', error);
    }
  };

  return (
    <>
      <Header />

      <section style={{ backgroundColor: '#dcdcdc' }}>
        <div className='container' style={{ position: 'relative' }}>
          <div className='row'>
            <h4 className='pt-3'>Home / Baby / Diet Plan & Water Intake</h4>
            <div className='col-md-9 mx-auto'>
              <div className='row'>
                <div className='col-md-6 mx-auto'>
                  <div className='py-4' style={{ position: 'relative' }}>
                    <input
                      type='search'
                      className='form-control py-3 btn btn border-0 search_btn2 rounded-5'
                    />
                    <label style={{ position: 'absolute', top: '40px', right: '12px' }}>
                      <i className='fa fa-search' style={{ fontSize: '20px' }}></i>
                    </label>
                  </div>
                </div>
                <div className='col-md-12 pt-5 text-center justify-content-center'>
                  {dietPlans.length > 0 ? (
                    dietPlans.map((item, index) => (
                      <div
                        key={index}
                        className='p-4 text-black'
                        style={{
                          backgroundColor: '#a9a9a9',
                          border: '3px solid #000',
                          boxShadow: '1px 2px 9px #000',
                          padding: '1em',
                          marginBottom: '20px',
                        }}
                      >
                        <h2>{item.title}</h2>
                        <p className='pt-4'>{item.description}</p>
                      </div>
                    ))
                  ) : (
                    <p>No diet plans found for the selected baby age.</p>
                  )}
                </div>
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
        </div>
      </section>
      <Footer />
    </>
  );
};
