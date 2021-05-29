import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker,faBed, faBath } from '@fortawesome/free-solid-svg-icons'
import './ServiceCart.css'
import washingTonImg from '../../../images/images/Rectangle 410.png'

const ServiceCart = ({service}) => {
    console.log(service)
    
    return (
            <div class="col-md-4 service-cart">
            <div class="card h-100">
            <img src={washingTonImg} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{service.title}</h5>
                <div>
                <p className="icon-area"><FontAwesomeIcon icon={faMapMarker} /> {service.room}</p>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <p className="icon-area"><FontAwesomeIcon icon={faBed} /> {service.room}</p>
                    </div>
                    <div className="col-md-6">
                        <p className="icon-area"><FontAwesomeIcon icon={faBath} /> {service.bath}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6"><h3 className="price">{service.price}</h3></div>
                    <div className="col-md-6"> <button type="" className="view-btn">View Details</button> </div>
                </div>
            </div>
            </div>
        </div>
       
    );
};

export default ServiceCart;