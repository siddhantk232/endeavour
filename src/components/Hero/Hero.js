import React from 'react'

import Particle from '../Particles/Particles';
import logo from './e_logo_final_txt.png';
import './Hero.css';

export default function Hero() {
    return (
        <div className="Hero">
            <Particle />
            <h1 className="center">
                <img src={logo} alt="" />
            </h1>
        </div>
    )
}
