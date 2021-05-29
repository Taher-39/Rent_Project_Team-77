import React from 'react';
import './login.css';

const Login = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="/">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto ">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/service">Service</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="mt-5">
                <div className="border p-5 login-child-div">
                    <div className="input-form">
                        <h4 className="">Login</h4>
                        <div className="mt-4 mb-4">
                            <input placeholder="Username or Email" type="text" />
                        </div>
                        <div className="mb-4">
                            <input placeholder="Password" type="text" />
                        </div>
                        <button className="brn login-btn btn-success">Login</button>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <div className="border border-secondary" style={{ display: "inline-block", width: "150px", height: "1px" }}></div>
                <span className="me-2 ms-2 text-secondary fw-bold">or</span>
                <div className="border border-secondary" style={{ display: "inline-block", width: "150px", height: "1px" }}></div>
            </div>
            <div className="mt-4">
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Login;