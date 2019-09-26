import React from 'react'
import Carousel from '../Carousel/Carousel'

import './Showcase.css'

export default function Showcase() {
    return (
        <div>
            <h1 className="main">Mission & Vision</h1>
            <p className="lead">Proud to be part of team SLIET</p>
            <div className="container-showcase">
                <Carousel />
            </div>
        </div>
    )
}
