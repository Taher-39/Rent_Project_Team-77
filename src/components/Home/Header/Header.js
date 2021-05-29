import React from 'react';
import headerImg from '../../../images/images/Rectangle 403.png'
import './Header.css'


const Header = () => {
    
    
    return (
        <div className="container">
        <div className="row header-area">
            <div className="col-md-6 intro-des">
                <h2 className="text-secondary p-2">Welcome to Home77</h2>
                <p className="intro-about mt-3 p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam quas maiores, nulla at explicabo nihil?</p>
                <button type="" className="book-btn">Book Now</button>
            </div>
            <div className="col-md-5 p-0 header-img">
                <img className="intro-img ms-0" src={headerImg} alt=""/>
            </div>
        </div>
        </div>
    );
};

export default Header;