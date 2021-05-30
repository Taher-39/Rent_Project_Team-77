import React from 'react';
import './Apartment.css'
const Apartment = () => {
    return (
        <div>
            <header className="apartment-banner">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6x2MeF5TbLN0nu6R6TWnlqmttEKN2-jifZg&usqp=CAU" width="100%" height="250vh" />
                <h2 className="logo-overly text-light" width="100px">Apartment</h2>
                <div className="color-overlay"></div>
            </header>
            <main className='container'>
                <div className='row'>
                    <div className='col-md-8'>
                        
                    </div>
                    <div className='col-md-4'>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Apartment;