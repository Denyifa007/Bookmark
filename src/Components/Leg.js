import React, {useState} from "react";
import {
  MDBAccordion,
  MDBAccordionItem,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import "../Style/leg.css";
// import { Accordion } from "react-bootstrap";
import Accordion from "./Accordion";

const Leg = () => {
  const[accordion,setAccordion] = useState(false)

  return (
    <>
      <MDBCol md="6" id="accordion">
        <MDBAccordion flush initialActive={1}>
          <MDBAccordionItem
            collapseId={1}
            headerTitle="What is Bookmark?"
            id="acc"
          >
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
            occaecat craft beer farm-to-table, raw denim aesthetic synth
            nesciunt you probably haven't heard of them accusamus labore
            sustainable VHS.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={2}
            headerTitle="How can i request a new browers?"
          >
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
            occaecat craft beer farm-to-table, raw denim aesthetic synth
            nesciunt you probably haven't heard of them accusamus labore
            sustainable VHS.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={3} headerTitle="Is there a mobile app?">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
            occaecat craft beer farm-to-table, raw denim aesthetic synth
            nesciunt you probably haven't heard of them accusamus labore
            sustainable VHS.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={4}
            headerTitle="What about our Chromius browsers?"
            id="acc-four"
          >
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
            occaecat craft beer farm-to-table, raw denim aesthetic synth
            nesciunt you probably haven't heard of them accusamus labore
            sustainable VHS.
          </MDBAccordionItem>
          
          {accordion && <Accordion/>}
        <button id="acc-btn" onClick={()=> setAccordion(!accordion)}>
            {accordion ? 'Less item ' : 'More items'}
        </button>
          
        </MDBAccordion>
      </MDBCol>

      <MDBCol className="legwork">
        <div>
          <p>35,00 + HAS ALREADY JOINED</p>
          <h2>
            Stay up-to-date with what <br /> we're doing
          </h2>
        </div>
        <div className="below">
          <form action="" id="mail">
            <input type="Email" id="Contact-us" />
          </form>
          <button id="cus">Contact us</button>

        </div>
      </MDBCol>
     
    </>
  );
};
export default Leg;
