import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

// Import the images from the quotes folder in the assets directory
import image1 from "../../assets/qoutes/images1.jpg";
import image2 from "../../assets/qoutes/images2.jpg";
import image3 from "../../assets/qoutes/images3.jpg";
import image4 from "../../assets/qoutes/images4.jpg";
import image5 from "../../assets/qoutes/images5.jpg";
import image6 from "../../assets/qoutes/images6.jpg";
import image7 from "../../assets/qoutes/images7.jpg";
import image8 from "../../assets/qoutes/images8.jpg";
import image9 from "../../assets/qoutes/images9.jpg";
import image10 from "../../assets/qoutes/images10.jpg";
import image11 from "../../assets/qoutes/images11.jpg";
import image12 from "../../assets/qoutes/images12.jpg";
import image13 from "../../assets/qoutes/images13.jpg";
import image14 from "../../assets/qoutes/images14.jpg";
import image15 from "../../assets/qoutes/images15.jpg";
import image16 from "../../assets/qoutes/images16.jpg";
import image17 from "../../assets/qoutes/images17.jpg";
import image18 from "../../assets/qoutes/images18.jpg";
import image19 from "../../assets/qoutes/images19.jpg";
import image20 from "../../assets/qoutes/images20.jpg";
import image21 from "../../assets/qoutes/images21.jpg";
import image22 from "../../assets/qoutes/images22.jpg";
import image23 from "../../assets/qoutes/images23.jpg";
import image24 from "../../assets/qoutes/images24.jpg";
import image25 from "../../assets/qoutes/images25.jpg";
import image26 from "../../assets/qoutes/images26.jpg";
import image27 from "../../assets/qoutes/images27.jpg";
import image28 from "../../assets/qoutes/images28.jpg";
import image29 from "../../assets/qoutes/images29.jpg";
import image30 from "../../assets/qoutes/images30.jpg";
import image31 from "../../assets/qoutes/images31.jpg";
import image32 from "../../assets/qoutes/images32.jpg";
import image33 from "../../assets/qoutes/images33.jpg";
import image34 from "../../assets/qoutes/images34.jpg";
import image35 from "../../assets/qoutes/images35.jpg";
import image36 from "../../assets/qoutes/images36.jpg";
import image37 from "../../assets/qoutes/images37.jpg";
import image38 from "../../assets/qoutes/images38.jpg";
import image39 from "../../assets/qoutes/images39.jpg";
import image40 from "../../assets/qoutes/images40.jpg";

// ... Import other images as needed

const Quotes = () => {
  // Organize the images into an array of rows, each containing all images
  const imagesInRows = [
    [image1, image2, image3, image4, image5, image6, image7, image8,image9,image10,image11,image12,image13,image14,image15,image16,image17,image18,image19,image20,image21,image22,image23,image24,image25,image26,image27,image28,image29,image30],
  ];

  return (
    <>
      <style>
        {`
          .image-row {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-bottom: 10px;
          }

          .image-row img {
            width: 100%;
            height: auto;
            border-radius: 5px;
            max-width: 250px;
            margin-bottom: 10px;
          }
        `}
      </style>
      <Header />
      <section className="home_page" style={{ minHeight: "100vh" }}>
        <div className="container-fluid py-5">
          <div className="text-center mx-5 pt-5">
            <h6 className="heading">Welcome to Baby Cure!</h6>
            <p className="para pt-3">
              "When the baby is going through growth spurts or mood changes, I use The Wonder Weeks to keep track of it all and why he behaves differently." – Devinda, Momatu team.
            </p>
          </div>
          <div className="row gy-5">
            {/* Map through the rows to render the images */}
            {imagesInRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="col image-row"
              >
                {row.map((image, index) => (
                  <img
                    key={index}
                    className="grid-image"
                    src={image}
                    alt={`Quote ${index + 1}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Quotes;
