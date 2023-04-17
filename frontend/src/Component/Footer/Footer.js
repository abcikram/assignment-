import React from "react";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi"
import "./Footer.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                     Welcome to ACB comapny, where we are passionate about providing data magement. We believe in providing exceptional data that exceed our customers' expectations. we pride ourselves on our commitment to quality, innovation, and customer satisfaction. Our team of experts has years of experience, and we use that expertise to develop the best possible solutions for our customers.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FiMapPin />
                        <div className="text">
                            Gouma Road , Pune , Maharastra , pin :- 781255, India
                        </div>
                    </div>
                    <div className="c-item">
                        <FiPhone />
                        <div className="text">Phone:8989888522</div>
                    </div>
                    <div className="c-item">
                        <FiMail />
                        <div className="text">Email:bikram5454@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text"> Headphone </span>
                    <span className="text"> Smart Watches </span>
                    <span className="text"> Bluetooth Watch </span>
                    <span className="text"> Wireless Earbuds </span>
                    <span className="text"> Home Theatre </span>
                    <span className="text"> Projectors </span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <NavLink to='/'><span className="text"> Home </span></NavLink> 
                    <NavLink to='/about'><span className="text"> About </span></NavLink>  
                    <span className="text"> Privacy Policy </span>
                    <span className="text"> Returns </span>
                    <span className="text"> Terms & Conditions </span>
                    <NavLink to='/contact'><span className="text"> Contact Us </span> </NavLink>
                </div>
            </div>
            <div className="buttom-bar">
                <div className="buttom-bar-content">
                    <div className="text">    
                </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
