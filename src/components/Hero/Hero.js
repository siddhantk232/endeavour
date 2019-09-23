import React from 'react'

import Particle from '../Particles/Particles';
import logo from './e_logo_final_txt.png';
import './Hero.css';

export default function Hero() {
    return (
        <div className="Hero">
            <Particle />
            <div className="text">
                <img src={logo} alt="" />
            </div>
        </div>
    )
}
