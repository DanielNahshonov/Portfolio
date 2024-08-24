import React from 'react';
import './ProjectComponent.css'; // Подключаем CSS файл

interface ProjectProps {
  name: string;
  img: string;
  description: string;
  repo: string;
  link: string;
}

export default function ProjectComponent({ name, img, description, repo, link }: ProjectProps) {
  return (
    <div className="project-card">
      <div className="project-content">
        <h2 className="project-name">{name}</h2>
        <p className="project-description">{description}</p>
        <iframe
          src={link}
          className="project-preview"
          title={name}
          sandbox="allow-scripts allow-same-origin"
        />
        <div className="project-links">
          <a href={repo} target="_blank" rel="noopener noreferrer" className="project-link">
            GitHub Repository
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
