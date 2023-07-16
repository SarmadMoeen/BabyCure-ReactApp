import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Payment = () => {
  const [cardHolder, setCardHolder] = useState('');
  const [cardHolderNumber, setCardHolderNumber] = useState('');
  const [date, setDate] = useState('');
  const [cv, setCV] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    axios
      .post('http://localhost:3000/payment', {
        cardHolder,
        cardHolderNumber,
        date,
        cv,
      })
      .then(response => {
        console.log(response.data);
        // Perform any desired action upon successful payment
        setShowAlert(true);
        setTimeout(() => {
          navigate('/chat'); // Navigate to the chat page
        }, 2000); // Wait for 2 seconds
      })
      .catch(error => {
        console.error(error);
        // Handle payment error
      });
  };

  return (
    <>
      <Header />

 

      <div className="" style={{ backgroundColor: '#dcdcdc', minHeight: '100vh' }}>
        <div className="container py-4">
          <h4>Payment</h4>
          <div className="row py-5">
            <div className="col-md-8 mx-auto">
              <div className="row">
                <div className="col-md-12">
                  <div>
                    <label>Email</label>
                    <input
                      type="text"
                      className="form-control"
                      value={cardHolder}
                      onChange={e => setCardHolder(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-12 pt-4">
                  <div>
                    <label>Card Number</label>
                    <input
                      type="number"
                      className="form-control"
                      value={cardHolderNumber}
                      onChange={e => setCardHolderNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6 pt-4">
                  <div>
                    <label>Expired Date</label>
                    <input
                      type="date"
                      className="form-control"
                      value={date}
                      onChange={e => setDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6 pt-4">
                  <div>
                    <label>CVV</label>
                    <input
                      type="number"
                      className="form-control"
                      value={cv}
                      onChange={e => setCV(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6 pb-4 text-center pt-5">
                  <Link to="/chat">
                    <button
                      onClick={handlePayment}
                      className="btn text-white px-4"
                      style={{ backgroundColor: 'black', color: 'white' }}
                    >
                      PAY
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showAlert && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
          style={{ position: 'fixed', top: '20px', right: '20px', zIndex: '9999' }}
        >
          Payment successful
          <button type="button" className="btn-close" onClick={() => setShowAlert(false)}></button>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Payment;
