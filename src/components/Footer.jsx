import './Footer.css'
import Logo from '../images/logo.png'
import { PiCopyrightLight } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { RiTiktokFill } from "react-icons/ri";

import React from 'react'

function Footer() {
  return (
    <>
      <div className="container-fluid brown"></div> 
      <div class=" row d-md-flex pb-10 mt-10 text-center footer-cont">
     <div class="col-12 col-md-4 p-2 footerbrand"> 
     <a className="navbar-brand" href="">
        <img src={Logo} alt="Logo" width="auto" height="40" className="d-inline-block align-text-center" />
        <span className="d-inline-block align-text-top ">RareWrld</span>
      </a>
     </div>
     
      <div class=" col-12 col-md-4  ms-auto p-2 text-center ul-container"> <ul class="list-inline">
  <li class="list-inline-item">
  <a href="#" class="link-primary link-offset-2 link-underline-opacity-0 text-lg-end">Terms and Conditions</a></li>
  <li class="list-inline-item">
  <a href="#" class="link-primary link-offset-2 link-underline-opacity-0 text-lg-end">Privacy</a></li>
  <li class="list-inline-item">
  <a href="#" class="link-primary link-offset-2 link-underline-opacity-0 text-lg-end">Cookies</a></li>
  <li class="list-inline-item">
  <a href="#" class="link-primary link-offset-2 link-underline-opacity-0 text-lg-end">Refund</a></li>
  <li class="list-inline-item">
  <a href="#" class="link-primary link-offset-2 link-underline-opacity-0 text-lg-end">License</a></li>
</ul>
      
      </div>
    </div>

  <hr className='hro' />
  <div class="row copyright">
    <div class="col-auto me-auto copyright-word"><PiCopyrightLight className='copyright-logo'/> Copyright 2024  RareWrld</div>
    <div class="col-auto ul-container"> <ul class="list-inline">
  <li class="list-inline-item">
  <a href="#" class="link-primary link-offset-2 link-underline-opacity-0 text-lg-end"><IoLogoInstagram /></a></li>
  <li class="list-inline-item">
  <a href="#" class="link-primary link-offset-2 link-underline-opacity-0 text-lg-end"><BsTwitterX /></a></li>
  <li class="list-inline-item">
  <a href="#" class="link-primary link-offset-2 link-underline-opacity-0 text-lg-end"><FaWhatsapp /></a></li>
  <li class="list-inline-item">
  <a href="#" class="link-primary link-offset-2 link-underline-opacity-0 text-lg-end"><RiTiktokFill /></a></li>

</ul> </div>
  </div>
      
    </>
  )
}

export default Footer


{/* <div class="d-flex mb-3">
  <div class="p-2">Flex item</div>
  <div class="p-2">Flex item</div>
  <div class="ms-auto p-2">Flex item</div>
</div> */}


{/* <div class="d-flex justify-content-md-between footer-cont">
      <div class="row"><div class="col-auto me-auto"> 
      
      </div>
    <div class="col-auto"></div>
     </div>
     </div> */}