import React from 'react'

import './Projects.css'

export default function ProjectCard() {
  return (
    <div className="p-card">
      <div className="img-section">
        <img src="https://dillu9878.github.io/Endeavour/images/gallery_images/9.JPG" alt="project-image" />
      </div>
      <div className="text-content">
        <h4>Project Name</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, veritatis ad sequi, quis, asperiores vel earum aspernatur iusto nesciunt qui totam corporis quidem accusantium esse! Impedit commodi et eaque possimus?</p>
      </div>
    </div>
  )
}
