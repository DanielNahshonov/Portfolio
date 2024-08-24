import './About.css'; // Подключаем CSS файл
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faCss3, faReact } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faGit, faGithub, faSlack } from '@fortawesome/free-brands-svg-icons';
import { faFileExcel, faFilePowerpoint, faFileWord } from '@fortawesome/free-solid-svg-icons';

import svCollegeCert from '../../assets/SV College.png'; // Пример пути к файлу
import mtaCert from '../../assets/BA Economics and Managment.png'; // Пример пути к файлу

export default function About() {
  return (
    <section id="about">
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
          <div className="education-item">
            <p>2024 | Full stack web developer | SV College, Rehovot, Israel</p>
            <img src={svCollegeCert} alt="SV College Certificate" className="education-cert" />
            <p>During my Full Stack Web Development course, I started by mastering the fundamentals of building client-side websites using HTML5 and CSS3. These tools provided me with the foundation to design and develop websites and applications from scratch, tailoring them to specific needs and preferences. The course emphasized the importance of proper and flexible architecture, allowing for easy modifications and mobile responsiveness.

After laying down the website's structure, I progressed to learning JavaScript ES6, a powerful programming language that enabled me to add dynamic functionality and interact with servers. This step was crucial in transforming static websites into dynamic, fully functional web applications.

In the final stage of the course, I dove into React, the most popular platform for modern web development. I learned how to seamlessly integrate React into projects and manage application state using Redux. This experience taught me how to create interactive and engaging user experiences, pushing me to think creatively and develop websites that are not only functional but also accessible and user-friendly.

Throughout the course, I had the opportunity to work on several projects, which allowed me to apply my knowledge in a practical setting and gain valuable hands-on experience in full-stack development.</p>
            <p>
              Completed a comprehensive Full Stack Web Development course at SV College, focusing on both front-end and back-end technologies.
            </p>
          </div>
          <div className="education-item">
            <p>2023 | Bachelor of Science in Economics and Management | MTA, Tel Aviv, Israel</p>
            <img src={mtaCert} alt="MTA Certificate" className="education-cert" />
            <p>During my studies in the Economics and Management program, I focused on two main areas: acquiring the most up-to-date knowledge in marketing and gaining a deep understanding of the entrepreneurial process. The program was designed to provide a multidisciplinary approach to marketing, with a strong emphasis on customer-centric strategies.

Throughout the course, I explored the challenges and opportunities faced by entrepreneurs and marketing managers, from product development to customer acquisition and retention. The curriculum also included practical training, where I was exposed to real-world case studies of successful marketing companies and startups. This allowed me to engage in discussions with senior professionals in the field, helping me develop strong connections with the business community and gain insights into the latest industry trends.

Additionally, the program highlighted the importance of entrepreneurial thinking in today’s business environment, especially in light of the complexities introduced by the COVID-19 pandemic. Combining creativity, boldness, and strategic marketing has become a key competitive advantage for companies, and this is something I deeply explored during my studies.</p>
            <p>
              Earned a Bachelor's degree in Economics and Management, gaining a strong foundation in business principles and analytical skills.
            </p>
          </div>
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
              <li><FontAwesomeIcon icon={faFilePowerpoint} className="icon" />Microsoft Office PowerPoint</li>
              <li><FontAwesomeIcon icon={faFileWord} className="icon"/>Microsoft Office Word</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
