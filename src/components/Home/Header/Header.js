import React from 'react';
import headerImg from '../../../images/images/Rectangle 403.png'
import './Header.css'


const Header = () => {
      
    return (
        <div className="container">
        <div className="row header-area">
            <div className="col-md-6 intro-des">
                <h1 className="text-secondary p-2">Discover Your New Home</h1>
                <p className="intro-about mt-3 p-2 fs-4 text-white">We Have World Class Luxurious Apartment For You. </p>
                <button className="book-btn">Book Now</button>
            </div>
            <div className="col-md-5 p-0 header-img">
                <img className="intro-img ms-0" src={headerImg} alt=""/>
            </div>
        </div>
        </div>
    );
};

export default Header;