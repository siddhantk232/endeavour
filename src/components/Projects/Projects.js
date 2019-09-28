import React from 'react'

import ProjectCard from './ProjectCard'
import Animation from './Animation';

export default function Projects() {
  return (
    <div className="projects-section white-text container center" id="projects">
      <h1 className="smt">Projects</h1>
      <p>Talent wins games, but teamwork and dedication surely wins championships. Our collective efforts and abilities direct us in accomplishing our objectives, a fuel that aids us in attaining uncommon results. Hereby, are some of our projects that we've worked and we are working on.</p>

      <div className="f-grid">
        <ProjectCard />
        <div className="r-anim">
          <Animation />
        </div>
      </div>

      <div className="f-grid">
        <div className="r-anim">
          <Animation />
        </div>
        <ProjectCard />
      </div>

      <div className="f-grid">
        <ProjectCard />
        <div className="r-anim">
          <Animation />
        </div>
      </div>

      <div className="f-grid">
        <div className="r-anim">
          <Animation />
        </div>
        <ProjectCard />
      </div>

      <div className="f-grid">
        <ProjectCard />
        <div className="r-anim">
          <Animation />
        </div>
      </div>
    </div>
  )
}
