import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import axios from "axios";


const PostCommonProblems = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const doPost = () => {
    axios.post('http://localhost:3000/commonProblems', {
      imageUrl,
      title,
      description,
     
      
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
      <Header />
      <section
        className="HomeAdminPage_page"
        style={{ backgroundColor: "#dcdcdc", minHeight: "100vh" }}
      >
        <div className="container-fluid pb-5 pt-3">
          <h4>Post Common Problems</h4>
          <div className="text-center mx-5 pt-3">
            <h3 className="heading">Welcome to Baby Cure!</h3>
            <h5 className="para pt-3 pb-4">
              “When the baby is going through growth spurts or mood changes, I
              use The Wonder Weeks to keep track of it all and why he behaves
              differently.” – Devinda, Momatu team.
            </h5>
          </div>
          <form >
            <div className="form-group">
              <label>Image URL:</label>
              <input
                type="text"
                className="form-control"
                value={imageUrl}
                onChange={e => setImageUrl(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div style={{marginTop:"20px"}} className="form-group">
              <label>Description:</label>
              <textarea style={{marginTop:"15px"}}
                className="form-control"
                value={description}
                onChange={e => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="text-center">
              <button style={{marginTop:"20px"}} onClick={doPost} type="submit" className="btn btn-primary">
                Post Common Problems
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PostCommonProblems;
