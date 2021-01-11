import { Link } from 'gatsby';
import React from 'react'
import { ProjectsData } from './ProjectsData';

export default function Projects() {
  return (
    <div className="body-container">
      <h1>My Projects</h1>
      <div className='project-container'>
      <div className="projectContainer">
        {Object.entries(ProjectsData).map(([id, { name, img }]: any) => (
          <li key={id}>
            <Link to={`/Project/${id}`}>
              <h3 id="projects-names">{name}</h3>
              <img src={img} alt={name} />
            </Link>
          </li>
        ))}
      </div>
      </div>
    </div>
  )
}
