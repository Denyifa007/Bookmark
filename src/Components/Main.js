import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "../Style/Main.css";
import image from "../Assets/illustration-features-tab-1.svg";
import chrome from '../Assets/logo-chrome.svg';
import firefox from '../Assets/logo-firefox.svg';
import opera from '../Assets/logo-opera.svg'
import dotedlines from '../Assets/bg-dots (1).svg'

 const Main =()=> {
  return (
    <MDBContainer className="remm">
      <MDBRow id="feature">
        <MDBCol size="md">
          <h2>Features</h2>
          <p id="our">
            Our aim is for we to make it quick and easy for you to access your{" "}
            <br />
            favourite websites. Your bookmark sync between your devices <br />{" "}
            so you can axcess them on the go.
          </p>
          <div id="details">
            <h5>
               Simple Bookmaking <hr />
            </h5>
            <h5>
              Speedy Searching <hr />
            </h5>
            <h5>
              Easy Sharing <hr />
            </h5>
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow id="holder">
        <MDBCol md="6" className="con">
          <div className="fill"></div>
          <img src={image} alt="img-fluid" className="image-two" />
        </MDBCol>
        <MDBCol md="5" id="details-two">
          <h2>Bookmark in one click</h2>
          <p id="pp">
            Organize your bookmark any how you like. Our <br /> simple
            drag-and-drop interface gives you complete <br /> control on how you
            manage your favourite sites.
          </p>
          <button id="btn-more">more info</button>
        </MDBCol>
      </MDBRow>
      <MDBRow id="download">
        <MDBCol size="md">
          <h2>Download the extension</h2>
          <p id="ppp">
            we've got more browsers in the pipeline. Please do let us know if <br />
            you've got a favourite you'd like us to priotize.
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow id="browers">
        <MDBCol id="start" >
          <div id="chrome" className="end">
            <img src={chrome} alt="" />
            <h5>Add to Chrome</h5>
            <p>Minnimum version 62</p>
            <img src={dotedlines} alt="" />
            <button id="chrome-btn">Add & install Extension</button>
          </div>
        </MDBCol>
        <MDBCol center>
          <div id="firefox" className="end">
            <img src={firefox} alt="" />
            <h5>Add to Firefox</h5>
            <p>Minnimum version 56</p>
            <img src={dotedlines} alt="" />
            <button id="firefox-btn">Add & install Extension</button>
          </div>
        </MDBCol>
        <MDBCol end>
          <div id="opera" className="end">
            <img src={opera} alt="" />
            <h5>Add to Opera</h5>
            <p>Minnimum version 46</p>
            <img src={dotedlines} alt="" />
            <button id="opera-btn">Add & install Extension</button>
          </div>
        </MDBCol>
      </MDBRow>
      <MDBCol id="asked">
        <h2>Frequently Asked Questions</h2>
        <p id="ppp">Here are some of our FAQs. If you have any questions <br /> you'd like answered please feel free to email us.</p>
      </MDBCol>
      <MDBRow>
        

      </MDBRow>
    </MDBContainer>
  );
}
export default Main
