import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about-section'>
      <div className='inner-container'>
        <h1>About Us</h1>
        <p className='text'>
          Welcome to ACB comapny, where we are passionate about providing data magement. We believe in providing exceptional data that exceed our customers' expectations.
         we pride ourselves on our commitment to quality, innovation, and customer satisfaction. Our team of experts has years of experience, and we use that expertise to develop the best possible solutions for our customers.
        </p>
        <div className='skills'>
          <span>Web Design</span>
          <span>Photo Shop</span>
          <span>Coding</span>
          <span>E-commarce</span>
        </div>
      </div>
    </div>
  )
}

export default About
