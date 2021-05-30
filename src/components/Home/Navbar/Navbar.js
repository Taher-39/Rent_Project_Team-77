import React from 'react';
import './Navbar.css'
import Logo from '../../../images/logos/Royal.png'

const Navbar = () => {
    return (
        <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"><img className="nav-img" src={Logo} alt=""/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item  me-3">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item me-3">
                    <a class="nav-link" href="#service">Services</a>
                    </li>
                    <li class="nav-item me-3">
                    <a class="btn btn-danger" href="/login">Login</a>
                    </li>                    
                </ul>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;