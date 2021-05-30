import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Services/>
            <Review/>
            <Footer/>
        </div>
    );
};

export default Home;