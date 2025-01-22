import React from "react";
import './main.css'

const Home = () => {
  return (
    <div className='hero'>
    <div className="hero-left">
    <div>
        <div className="hero-hand-icon">
            <p>NEW</p>
            <img src="https://i.ibb.co/KbWmMcG/icons8-hand-32.png"  alt="hand"/>   
            </div>
        </div>
        <p>Collection For Everyone</p>
        <p className='mini-para'>Click here to see more.</p>

    <div className="hero-latest-btn">
     <a href="https://www.instagram.com/resin_art_by_darshanam?igsh=MWJyNHF5c2dudXMzdA==" > Latest Collection </a>
    </div>
    </div>
    <div className="hero-right">
      
    <video className="hero-vdo" src="https://videos.pexels.com/video-files/6214419/6214419-uhd_3840_2160_25fps.mp4"
 autoPlay loop muted />

  <div className="footer-socials-icon">
        <div className="footer-icon-container">
         <a href="https://www.instagram.com/resin_art_by_darshanam?igsh=MWJyNHF5c2dudXMzdA==">
          <img src='https://i.ibb.co/4Vq3kBC/icons8-instagram-50.png' alt=''/>
        </a>
        
        </div>
        <div className="footer-icon-container">
        <a href='https://in.pinterest.com/sanskarg106/'>
          <img src='https://i.ibb.co/THMhGzk/icons8-pinterest-50.png' alt=''/>
       </a>
        </div>
        <div className="footer-icon-container">
        <a href="tel:+917771094993">
          <img src='https://i.ibb.co/SN0bYvb/icons8-phone-26.png' alt=''/>
        </a>
        </div>
        <div className="footer-icon-container">
        <a href="mailto:sanskarg106@gmail.com" target="Gmail">
          <img src='https://i.ibb.co/3755132/icons8-mail-48.png' alt=''/>
        </a>
        </div>
       </div>            
   
    </div>
    </div>
  )
}

export default Home;
