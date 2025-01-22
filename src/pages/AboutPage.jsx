import React from 'react'
import { Footer, Navbar } from "../components";
import './About.css'

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className='about'>
      <h1  style={
        {
          fontSize:'50px'
        }
      }>About Us</h1>
        <div className="p_slider1"> 
          <div className="product-box1"><h3>Backend Developer</h3>
          <div className="product-box-img">
             <img alt="1" src="https://i.ibb.co/Rj19mwt/Screenshot-2024-03-24-170811-removebg-preview.png"/>
             
          </div>
          <div classNameName='container1'>

          <div className='about_img1'>

             <p>Yeshtham Shah, a Backend developer, serves as a cornerstone in the design and development of the "Resin Art and Deco" website. His expertise revolves around crafting resilient systems that empower online platforms, ensuring seamless transactions and enriching user experiences. Beyond his coding prowess, Yeshtham cultivates an environment of encouragement, igniting inspiration among team members and collaborators to push boundaries and achieve excellence in every facet of website design and functionality. With his unwavering commitment and technical finesse, Yeshtham not only constructs digital landscapes but also fosters a culture of innovation and progress within the "Resin Art and Deco" domain.</p>
         </div>

         </div>
         </div>
        </div> 
        <div className="p_slider1"> 
          <div className="product-box1"><h3>Frontend Developer</h3>
          <div className="product-box-img1">
             <img alt="1" src="https://i.ibb.co/mHTPrKy/Whats-App-Image-2024-03-24-at-17-12-30-removebg-preview.png"/>
             
          </div>
          <div classNameName='container1'>

          <div className='about_img1'>

             <p>Sanskar Gupta, a frontend developer, employs React.js to fashion captivating user interfaces for "Resin Art and Deco" websites. With a keen eye for design and proficiency in React.js, Sanskar curates dynamic and immersive web experiences that enchant visitors and elevate the brand's aesthetic appeal. From sculpting responsive layouts to integrating seamless navigation, Sanskar ensures that every facet of the frontend design contributes to an unforgettable user journey. Furthermore, Sanskar fosters a collaborative environment, inspiring fellow developers to explore innovative techniques and refine their frontend development skills. Through dedication and mastery of React.js, Sanskar enhances the visual allure of "Resin Art and Deco," while also motivating others to push the boundaries of frontend development excellence.</p>
         </div>

         </div>
         </div>
        </div> 


  </div>
      <Footer />
    </>
  )
}

export default AboutPage