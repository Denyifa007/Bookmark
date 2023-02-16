import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import "../Style/Head.css";
import img from "../Assets/./illustration-hero (3).svg";

 const Head =()=> {
  return (
    <>
    <MDBRow id="main" >
      <MDBCol md="6" className="container">
        
        <h1>A Simple Bookmark Manager</h1>
        <p id="p">
          A clean and simple interface to organise your favourite <br />{" "}
          websites. Open a new browser tab and see your tab load instantly.
          Try it for free.
        </p>
        <br />
        <br />
        <div className="top-btn">
          <button id="btn-one">Get it on Chrome</button>
          <button id="btn-two">Get it on Firefox</button>
        </div>
      </MDBCol>
      <MDBCol md="5" id="six" className="container-fluid">
        <div id="empty"></div>
        <img src={img} alt="" id="image-one" />
      </MDBCol>
    </MDBRow>
  </>

  );
}
export default Head
