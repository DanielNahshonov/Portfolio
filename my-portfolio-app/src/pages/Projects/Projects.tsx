 import ProjectComponent from '../../components/Project/ProjectComponent';
import projects from '../../components/Project/ProjectList'; 
import './Projects.css'

export default function Projects() {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectComponent
          key={index}
          name={project.name}
          img={project.img}
          description={project.description}
          repo={project.repo}
          link={project.link}
        />
      ))}
    </div>
  );
}
