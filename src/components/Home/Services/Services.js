import React from 'react';
import washingTonImg from '../../../images/images/Rectangle 410.png'
import ServiceCart from '../ServiceCart/ServiceCart';
import './Services.css'

const serviceData= [
    {
        title: "Washington Plaza",
        room:"3 Bedrooms",
        bath:"2 Bathroom",
        location:"32/A Washington, USA",
        price: '$320',
        img:{washingTonImg}
    },
    {
        title: "Washington Plaza",
        room:"3 Bedrooms",
        bath:"2 Bathroom",
        location:"32/A Washington, USA",
        price: '$320',
        img:{washingTonImg}
    },
    {
        title: "Washington Plaza",
        room:"3 Bedrooms",
        bath:"2 Bathroom",
        location:"32/A Washington, USA",
        price: '$320',
        img:{washingTonImg}
    },
    {
        title: "Washington Plaza",
        room:"3 Bedrooms",
        bath:"2 Bathroom",
        location:"32/A Washington, USA",
        price: '$320',
        img:{washingTonImg}
    },
    {
        title: "Washington Plaza",
        room:"3 Bedrooms",
        bath:"2 Bathroom",
        location:"32/A Washington, USA",
        price: '$320',
        img:{washingTonImg}
    },
    {
        title: "Washington Plaza",
        room:"3 Bedrooms",
        bath:"2 Bathroom",
        location:"32/A Washington, USA",
        price: '$320',
        img:{washingTonImg}
    }
]


const Services = () => {
    return (
        <div className="container">
            <div className="service-header">
                <h5>Rent Your dream Home</h5>
                <h3>Make Your Home Experience best with Home77</h3>
            </div>
            <div className="row">
            {
                serviceData.map(service =><ServiceCart service={service}/>)
            }
            </div>
        </div>
    );
};

export default Services;