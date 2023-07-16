import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCheck } from 'react-icons/fa';
import { BabyContext } from '../../ContextApi/BabyContext';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import $ from 'jquery';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Vaccination = () => {
  const { selectedBabyId, setSelectedBabyId } = useContext(BabyContext);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const babyId = queryParams.get('babyId');

  useEffect(() => {
    if (babyId) {
      setSelectedBabyId(babyId);
    }
  }, [babyId, setSelectedBabyId]);

  console.log('Selected Baby ID:', selectedBabyId);

  const [upcomingVaccinations, setUpcomingVaccinations] = useState([]);
  const [doneVaccinations, setDoneVaccinations] = useState([]);

  useEffect(() => {
    if (selectedBabyId) {
      fetch(`http://localhost:3000/getVaccinations?babyId=${selectedBabyId}`)
        .then((response) => response.json())
        .then((data) => {
          // Add an index property to each object in the fetched data
          const indexedData = data.map((obj, index) => ({ ...obj, index }));
          setUpcomingVaccinations(indexedData);
        })
        .catch((error) => console.log(error));
    }
  }, [selectedBabyId]);

  useEffect(() => {
    if (selectedBabyId) {
      fetch(`http://localhost:3000/getDoneVaccinations?babyId=${selectedBabyId}`)
        .then((response) => response.json())
        .then((data) => {
          const indexedData = data.map((obj, index) => ({ ...obj, index }));
          setDoneVaccinations(indexedData);
        })
        .catch((error) => console.log(error));
    }
  }, [selectedBabyId]);

  const handleDoneClick = (index, e) => {
    e.stopPropagation(); // Prevent click event from bubbling up to parent elements

    // Remove the clicked vaccination from upcomingVaccinations array
    const updatedUpcomingVaccinations = upcomingVaccinations.filter((obj) => obj.index !== index);
    setUpcomingVaccinations(updatedUpcomingVaccinations);

    // Add the clicked vaccination to doneVaccinations array
    const clickedVaccination = upcomingVaccinations.find((obj) => obj.index === index);
    setDoneVaccinations([...doneVaccinations, clickedVaccination]);

    // Send POST request to mark vaccination as done
    const requestBody = {
      babyId: selectedBabyId,
      key: clickedVaccination.key,
      vaccname: clickedVaccination.vaccname,
      date: clickedVaccination.date,
    };

    axios.post('http://localhost:3000/doneVaccinations', requestBody)
      .then(response => {
        console.log('Vaccination marked as done:', response.data);
      })
      .catch(error => {
        console.log('Error marking vaccination as done:', error);
      });

    // Send DELETE request after a timeout to remove the vaccination from the backend
    setTimeout(() => {
      axios.delete(`http://localhost:3000/deleteVaccination/${clickedVaccination._id}`)
        .then(response => {
          console.log('Upcoming vaccination deleted:', response.data);
        })
        .catch(error => {
          console.log('Error deleting upcoming vaccination:', error);
        });
    }, 500); // 5000 milliseconds (5 seconds) timeout, adjust as needed
  }

  return (
    <div>
      <Header />
      <section className="" style={{ backgroundColor: '#dcdcdc' }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 p-0">
              <div className="">
                <img src={require('../../assets/image/Rectangle 52.png')} width="100%" height="620px" alt="" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="row mt-4">
                <div className="col-md-10 mx-auto">
                  <div
                    className="rounded-4 p-4 pt-5"
                    style={{ backgroundColor: '#a9a9a9', boxShadow: '1px 2px 9px #000', padding: '1em' }}
                  >
                    <div className="card p-3" style={{ backgroundColor: 'white', border: '2px solid #000' }}>
                      <div>
                        <div>
                          <h6>Upcoming Vaccination</h6>
                          <div className="vaccine-list">
                            {upcomingVaccinations.length > 0 ? (
                              upcomingVaccinations.map((item) => (
                                <div
                                  key={item.index}
                                  className="vaccine-item"
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '80%',
                                    padding: '10px',
                                    margin: '10px 0',
                                    border: '1px solid #ccc',
                                    borderRadius: '5px',
                                    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
                                  }}
                                  onClick={() => handleDoneClick(item.index)}
                                >
                                  <div
                                    style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px' }}
                                  >
                                    {item.vaccname}
                                  </div>
                                  <div style={{ fontSize: '16px' }}>{new Date(item.date).toLocaleDateString()}</div>
                                  <div onClick={(e) => handleDoneClick(item.index, e)}>
                                    <FaCheck />
                                  </div>
                                </div>
                              ))
                            ) : (
                              <div>Loading...</div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card p-3 mt-4" style={{ backgroundColor: 'white', border: '2px solid #000' }}>
                      <div className="vaccine-list done">
                        <h6>Done Vaccination</h6>
                        {doneVaccinations.length > 0 ? (
                          doneVaccinations.map((item) => (
                            <div
                              key={item.id}
                              className="vaccine-item"
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%',
                                padding: '10px',
                                marginBottom: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
                                cursor: 'default',
                              }}
                            >
                              <div style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px' }}>
                                {item.vaccname}
                              </div>
                              <div style={{ fontSize: '16px' }}>{new Date(item.date).toLocaleDateString()}</div>
                            </div>
                          ))
                        ) : (
                          <div>No vaccinations done yet.</div>
                        )}
                      </div>
                    </div>
                    <div className="text-end pt-5">
                      <Link to={`/vaccination_list?babyId=${selectedBabyId}`}>
                        <img src={require('../../assets/image/Vector.png')} alt="" height={60} width={60} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Vaccination;
