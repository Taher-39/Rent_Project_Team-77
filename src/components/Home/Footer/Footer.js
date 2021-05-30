import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import facebook from '../../../images/logos/Vector.png'
import insta from '../../../images/logos/Vector-2.png'
import youtube from '../../../images/logos/Vector-3.png'
import linkedIn from '../../../images/logos/Vector-1.png'


const Footer = () => {
    return (
        <div className="row footer-div">
            <div className="col-md-2 m-2 p-3"><p className="text-white"><FontAwesomeIcon icon={faMapMarker} /> House99,A. South Kalabagan, Dhaka.</p></div>
            <div className="col-md-2 m-2 p-3 text-white"><h4>Company</h4>
            <ul>
                <li>About</li>
                <li>Site</li>
                <li>Support Center</li>
                <li>Submit List</li>
            </ul>
            </div>
            <div className="col-md-2 m-2 p-2 text-white"><h4>Quick Links</h4>
            <ul>
                <li>Quick Links</li>
                <li>Rentals</li>
                <li>Sales</li>
                <li>Our Blog</li>
            </ul></div>
            <div className="col-md-2 m-2 p-2 text-white"><h4>Contact Us</h4>
            <div className="d-flex">
                 <div className="icon"><img src={facebook} alt="" /></div>
                 <div className="icon"><img src={insta} alt=""/></div>
                 <div className="icon"><img src={youtube} alt=""/></div>
                 <div className="icon"><img src={linkedIn} alt=""/></div>
            </div>
            </div>
            
        </div>
    );
};

export default Footer;