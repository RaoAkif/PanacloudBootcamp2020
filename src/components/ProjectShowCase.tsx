import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectsData } from './ProjectsData';
import { NotFound } from './404';
import '../pages/App.css'

export const ProjectShowCase = () => {
  let { id }: any = useParams();
  let project = ProjectsData[id];

  if (!project) {
    return <NotFound />;
  }

  return (
      <div className="body-container">
        <h2>{project.name}</h2>
        <img src={project.img} alt={project.name} />
      </div>
  );
};