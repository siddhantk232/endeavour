import React from 'react';
import Swiper from 'react-id-swiper';

import './TestiSlide.css';

const TestiSlide = () => {
    const params = {
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    }
    return (
        <Swiper {...params}>
            <div className="cucard-container">
                {/* <img src="https://dillu9878.github.io/Endeavour/images/gallery_images/12.JPG" alt="testimonial" />
                <h4>Testi Name</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta exercitationem voluptates quisquam quo, atque deleniti sapiente beatae minus inventore quibusdam. Maxime, ad! Aliquam tenetur expedita cupiditate quis, natus omnis iure!</p> */}
                hello
            </div>
            <div className="cucard-container">
                {/* <img src="https://dillu9878.github.io/Endeavour/images/gallery_images/12.JPG" alt="testimonial" />
                <h4>Testi Name</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta exercitationem voluptates quisquam quo, atque deleniti sapiente beatae minus inventore quibusdam. Maxime, ad! Aliquam tenetur expedita cupiditate quis, natus omnis iure!</p> */}
                hello
            </div>
            {/* <div className="cucard-container">
                <img src="https://dillu9878.github.io/Endeavour/images/gallery_images/12.JPG" alt="testimonial" />
                <h4>Testi Name</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta exercitationem voluptates quisquam quo, atque deleniti sapiente beatae minus inventore quibusdam. Maxime, ad! Aliquam tenetur expedita cupiditate quis, natus omnis iure!</p>
            </div>
            <div className="cucard-container">
                <img src="https://dillu9878.github.io/Endeavour/images/gallery_images/12.JPG" alt="testimonial" />
                <h4>Testi Name</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta exercitationem voluptates quisquam quo, atque deleniti sapiente beatae minus inventore quibusdam. Maxime, ad! Aliquam tenetur expedita cupiditate quis, natus omnis iure!</p>
            </div> */}
        </Swiper>
    )
};
export default TestiSlide;