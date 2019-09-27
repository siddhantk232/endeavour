import React from 'react'

import Particle from '../Particles/Particles';
import heroImg from './end_hero.png';
import leadText from './lead_text.png'
import './Hero.css';

export default function Hero() {
    return (
        <div className="Hero">
            <Particle />

            <div className="img-container">
                <img src={heroImg} alt="" className="heroImg1" />
                <img src={leadText} alt="" className="heroImg2" />
            </div>

        </div>
    )
}
