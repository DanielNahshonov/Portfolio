import './About.css'; // Подключаем CSS файл
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faCss3, faReact } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs , } from '@fortawesome/free-brands-svg-icons';
import { faGit, faGithub, faSlack } from '@fortawesome/free-brands-svg-icons';
import { faFileExcel, faFilePowerpoint, faFileWord } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Me</h1>
      <div className="about-section">
        <p>
          Full-Stack Web Developer with experience in both development and
          management. Highly motivated, able to excel under pressure, and a
          responsible team player with a keen eye for detail. Possess excellent
          interpersonal skills and a great passion for programming.
        </p>
      </div>
        <h2 className="Education-heading">Education</h2>
      <div className="about-section about-education">
        <p>2024 | Full stack web developer | SV College, Rehovot, Israel</p>
        <p>2023 | Bachelor of Science in Economics and Management | MTA, Tel Aviv, Israel</p>
      </div>
        <h2>Professional Knowledge</h2>
      <div className="about-section about-professional-knowledge">
        <div className="category">
          <h3>Front-End</h3>
          <ul>
            <li><FontAwesomeIcon icon={faJs} className="icon" /> JavaScript</li>
            <li><FontAwesomeIcon icon={faReact} className="icon" /> React.js</li>
            <li><FontAwesomeIcon icon={faCss3} className="icon" /> HTML5/CSS3</li>
            <li><FontAwesomeIcon icon={faJs} className="icon" /> TypeScript</li>
          </ul>
        </div>
        <div className="category">
          <h3>Back-End</h3>
          <ul>
            <li><FontAwesomeIcon icon={faNodeJs} className="icon" /> Node.js</li>
          </ul>
        </div>
        <div className="category">
          <h3>Databases</h3>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div className="category">
          <h3>Development Tools</h3>
          <ul>
            <li><FontAwesomeIcon icon={faGit} className="icon" /> Git</li>
            <li><FontAwesomeIcon icon={faGithub} className="icon" /> GitHub</li>
            <li><FontAwesomeIcon icon={faSlack} className="icon" /> Slack</li>
          </ul>
        </div>
        <div className="category">
          <h3>Other</h3>
          <ul>
            <li><FontAwesomeIcon icon={faFileExcel} className="icon" />Microsoft Office Excel</li>
            <li><FontAwesomeIcon icon={faFilePowerpoint}className="icon" />Microsoft Office PowerPoint</li>
            <li><FontAwesomeIcon icon={faFileWord} className="icon"/>Microsoft Office Word</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
