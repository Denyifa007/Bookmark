import React, { useState } from 'react';
import '../Style/Navbar.css'
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
 
} from 'mdb-react-ui-kit';
import logo from '../Assets/logo-bookmark.svg'

export default function Navbar() {
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    <MDBNavbar expand='lg'  className='container' fixed='top'  light bgColor='light'>
      <MDBContainer style={{padding:"13px"}} >
        <img src={logo} alt="" />
        <MDBNavbarToggler
          type='button'
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink id='wise' active aria-current='page' href='#'>
                FEATURES
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink id='west' active aria-current='page' href='#'>PRICING</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink id='east' active aria-current='page' href='#'>CONTACT</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink id='south' active aria-current='page' href='#'>LOGIN</MDBNavbarLink>
            </MDBNavbarItem>

           
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}