import React from 'react'
import BannerImg from './walimg.jpg'
import './Content.css'
import { NavLink } from 'react-router-dom'

const Content = () => {
  return (
    <div className='content-section'>
      <div className='inner-container'>
        <h1>Content</h1>
        <p className='text'>
          Welcome to ACB comapny, where we are passionate about providing data magement. We believe in providing exceptional data that exceed our customers' expectations.
          we pride ourselves on our commitment to quality, innovation, and customer satisfaction. Our team of experts has years of experience, and we use that expertise to develop the best possible solutions for our customers.
        </p>
        <img src={BannerImg} alt="" />
        <div className='skills'>
          <button>Ok</button>
          <button><NavLink to='/about'>Read More</NavLink></button> 
          <button><NavLink to='/contact'>Contact us</NavLink></button> 
        </div>
      </div>
    </div>
  )
}

export default Content
