import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <>
         <div className='footer'>
    
    <div className="footer-logo">
     <img  className='log' src='https://i.ibb.co/4p2g5DD/logo.png' alt=''/>
   
  

<div className="footer-socials-icon">
    <div className="footer-icon-container">
     <a href="https://www.instagram.com/resin_art_by_darshanam?igsh=MWJyNHF5c2dudXMzdA==">
      <img src='https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png' alt='' />
    </a>
    
    </div>
    <div className="footer-icon-container">
    <a href='https://in.pinterest.com/sanskarg106/'>
      <img src='https://img.icons8.com/ios-filled/50/pinterest--v1.png' alt=''/>
   </a>
    </div>
    <div className="footer-icon-container">
    <a href="tel:+917771094993">
      <img src='https://img.icons8.com/material-outlined/24/phone.png' alt=''/>
    </a>
    </div>
    <div className="footer-icon-container">
    <a href="mailto:sanskarg106@gmail.com" target="Gmail">
      <img src='https://img.icons8.com/ios-filled/50/000000/gmail-new.png' alt=''/>
    </a>
    </div>
   </div> 
    <div className="mapouter"><div className="gmap_canvas"><iframe width="1100" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=+Bhopal&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>

   </div>
   <div className="footer-copyright">
    <hr />
  {/* <ul className='nav-menu' style={{color:'black'}}>
  <li>HOME</li>
  <li>PRODUCT</li>
  <li>BLOG</li>
  <li>ABOUT</li>

</ul> */}
    <p>Copyright @2024 - All Right Reserved</p>
   </div>
           

</div>
    </>
  );
};

export default Footer;
