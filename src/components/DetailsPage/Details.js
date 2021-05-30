import React from 'react';
import ReactImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { useSelector } from 'react-redux';
import Navbar from '../Home/Navbar/Navbar';
import './Details.css';
import Footer from '../Home/Footer/Footer'

const Details = () => {

    const detailData = useSelector((state) => {
        return state.data.detailPageData[0]
    })

    const {img} = detailData;
    const {imgDetail} = detailData;
    const {details} = detailData;

    const images = [
        {
            original: img,
            thumbnail: img
        },
        {
            original: imgDetail.num4,
            thumbnail: imgDetail.num4
        },
        {
            original: imgDetail.num5,
            thumbnail: imgDetail.num5
        },
        {
            original: imgDetail.num1,
            thumbnail: imgDetail.num1
        },
        {
            original: imgDetail.num2,
            thumbnail: imgDetail.num2
        },
        {
            original: imgDetail.num3,
            thumbnail: imgDetail.num3
        },
    ];

  

    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-3 container detail-header">
                <div className="transparent-div container-fluid text-center">
                    <span className="fs-3 text-white fw-bold">Apartment</span>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row justify-content-around">
                    <div className="col-md-7">
                        <ReactImageGallery className="col-md-7" showNav={false} autoPlay={false} showPlayButton={false} useBrowserFullscreen={false} items={images} />
                    </div>
                    <div className="col-md-4 form-div">
                        <form action="">
                            <input type="text"  className="mb-3" placeholder= "Full name"/>
                            <br />
                            <input type="number" className="mb-3" placeholder="Mobile Number"/>
                            <br />
                            <input type="text" className="" placeholder="Email"/>
                            <br />
                            <textarea name="" style={{width: "100%"}} placeholder="Message" className="mt-3" id="" cols="20" rows="5"></textarea>
                            <br />
                            <input className="btn mt-3 btn-success" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-7 ps-5">
                        <h3 className="text-success fw-bold">Family Apartment<span className="text-danger price">$250</span></h3>
                        <p className="mt-3">{details.PropertyDetail}</p>
                        <p className="text-dark mt-3"><span className="fs-4 fw-bold text-success">Property Details : </span><br/>{details.MoreInfo}</p>
                    </div>
                </div>
            </div>
            <div className="mt-5">
            <Footer/>
            </div>
           
        </div>
    );
};

export default Details;