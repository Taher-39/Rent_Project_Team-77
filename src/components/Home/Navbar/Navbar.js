import React from 'react';
import './Navbar.css'
import Logo from '../../../images/logos/Logo.png'

const Navbar = () => {
    return (
        <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
            <div class="container-fluid">
                <a class="navbar-brand" to="/home"><img className="nav-img" src={Logo} alt=""/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item  me-3">
                    <a class="nav-link active" aria-current="page" to="/home">Home</a>
                    </li>
                    <li class="nav-item me-3">
                    <a class="nav-link" to="/about">About</a>
                    </li>
                    <li class="nav-item me-3">
                    <a class="nav-link" to="/resume">Services</a>
                    </li>
                    <li class="nav-item me-3">
                    <a class="nav-link" to="/blog">Customers</a>
                    </li>
                    <li class="nav-item me-3">
                    <a class="nav-link" to="/contact">Contact</a>
                    </li>
                    <li class="nav-item me-3">
                    <a class="nav-link" to="/contact">Login</a>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;