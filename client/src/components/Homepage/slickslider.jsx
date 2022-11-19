import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slickslider = () => {
    return (
        <Carousel>
            <div>
                <img src="https://cdn6.agoda.net/images/WebCampaign/wcSP20220307MV/home_banner_web/en-us.png" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="https://www.dazzphotography.com/wp-content/uploads/2018/07/Monsoon-Magic-Pune-Photography-Offer.jpg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="https://i0.wp.com/lizscavilla.com/wp-content/uploads/2019/01/FLASH-SALE-50-OFF.png?fit=800%2C800&ssl=1" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
}

export default Slickslider;

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>