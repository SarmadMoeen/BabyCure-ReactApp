import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";
import Footer from "../../components/Footer/Footer";

const PaymentDetails = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const response = await axios.get("http://localhost:3000/getPayments");
      setPayments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <AdminNavbar />
      <section className="PaymentDetails_page" style={{ backgroundColor: "#dcdcdc",minHeight:"100vh" }}>
        {/* ... */}
        <div className="col-md-12">
          <div className="table-responsive">
            <h3>Payments</h3>
            <table className="table  align-middle">
              <tbody className="rounded-3" style={{ backgroundColor: "#a9a9a9" }}>
                {payments.map((payment, index) => (
                  <tr key={index} style={{ boxShadow: '1px 2px 9px #000', padding: '1em' }}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <img src={require("../../assets/image/tableimg.png")} width="30px" alt="" />
                      {payment.cardHolder}
                    </td>
                    <td>Payment Method: By Card</td>
                    <td>Amount: {payment.amount} Rs.</td>
                    <td>
                      <img src={require("../../assets/image/details.png")} width="30px" alt="" />
                      <span className="ms-3">Payment Status :</span>
                    </td>
                    <td>
                      <img src={require("../../assets/image/paid.png")} width="30px" alt="" />
                      <span className="ms-3">Paid</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* ... */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PaymentDetails;
