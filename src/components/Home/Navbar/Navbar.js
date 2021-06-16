import React from 'react';
import './Navbar.css'
import Logo from '../../../images/logos/Royal.png'
import { Link } from 'react-router-dom';

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
                    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li class="nav-item me-3">
                    <Link class="nav-link" to="/service">Services</Link>
                    </li>
                    <li class="nav-item me-3">
                    <Link class="btn btn-danger" to="/login">Login</Link>
                    </li>                    
                </ul>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;