import React from 'react';
import './Review.css'
import img1 from '../../../images/logos/affordable 1.png'
import img2 from '../../../images/logos/apartment 1.png'
import img3 from '../../../images/logos/Group 33351.png'

const Review = () => {
    return (
        <div className="container review-sec">
            <h2 className="mt-3">What we Offer</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4 cards-div">
            <div class="col">
                <div class="card h-100 review-card">
                <img className="review-img" src={img1} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Top Class Management</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100 review-card">
                <img className="review-img" src={img2} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Services beyond you thought</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100 review-card">
                <img className="review-img" src={img3} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Perfect choice for you</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Review;