import React from 'react';
import ServiceCart from '../ServiceCart/ServiceCart';
import './Services.css';
import { useSelector } from 'react-redux';

const Services = () => {

    const homePageData = useSelector((state) => {
        return state.data.homePageData;
    })

    return (
        <div id="service" className="container">
            <div className="service-header mt-3 mb-5">
                <h4 className="mb-3">Rent Your Dream Home</h4>
                <h3 className="">Make Your Home Experience Best With Royal Housing LTD</h3>
            </div>
            <div className="row mt-4">
            {
                homePageData.map(data =><ServiceCart service={data}/>)
            }
            </div>
        </div>
    );
};

export default Services;