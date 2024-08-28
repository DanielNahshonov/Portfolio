import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faCss3, faReact } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faGit, faGithub, faSlack } from "@fortawesome/free-brands-svg-icons";
import {
  faFileExcel,
  faFilePowerpoint,
  faFileWord,
} from "@fortawesome/free-solid-svg-icons";

export default function Resume() {
  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              {" "}
              SV College, Rehovot, Israel
            </h4>
            <span>2023 — 2024</span>
            <p className="timeline-text">
              The Full Stack Web Development and Application course taught me
              how to build and design responsive websites using HTML5, CSS3, and
              JavaScript ES6. I learned to develop dynamic, interactive web
              applications with React and manage state with Redux. The course
              also emphasized best practices for building scalable and
              mobile-friendly websites, with hands-on projects throughout.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">MTA, Tel Aviv, Israel</h4>
            <span>2020-2023</span>
            <p className="timeline-text">
              I hold a Bachelors degree in Economics and Management, where I
              studied data analysis with Python and SQL alongside traditional
              business courses. This background has equipped me with strong
              analytical skills and a solid understanding of data-driven
              decision-making.
            </p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Full-Stack Developer at Circlez.ai
            </h4>
            <span>05.2024 — Present</span>
            <p className="timeline-text">
              -Develop features in React (Front-End) using TypeScript, and
              Node.js, Express,Nest.js (Back-End). <br /> -Work in a team under
              an Agile workflow, using Git for version control. <br />
              -Use MySQL and PostgreSQL as the main databases for the project.
              <br /> -Write various scripts and features in TypeScript and
              develop REST APIs. <br />
              -Collaborate in a fast-paced Start-Up environment with strict
              deadlines.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Analyst at Egged, Beit Dagan
            </h4>
            <span>2023-Present</span>
            <p className="timeline-text">
              -Analyze data related to bus routes, schedules, and passenger
              demographics to optimize transportation efficiency. <br />
              -Develop reports and presentations to communicate findings and
              recommendations to management. <br />
              -Collaborate with cross-functional teams to implement improvements
              and address operational challenges. <br />
              -Utilize analytical tools and software for data gathering and
              decision-making. <br />
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Restaurant Manager at Japanika,Bat Yam
            </h4>
            <span>2022-2023</span>
            <p className="timeline-text">
              -Manage daily operations, including staff scheduling, inventory
              management, and customer service. <br />
              -Develop and implement strategies to improve efficiency and
              maximize profitability. <br />
              -Lead and train a team of employees to ensure high-quality
              service. <br />
              -Handle customer complaints and resolve issues in a timely and
              professional manner.
            </p>
          </li>
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <div className="about-section about-professional-knowledge">
          <div className="skills-container">
            <ul className="skills-list">
              <li className="skills-item">MySQL</li>
              <li className="skills-item">MongoDB</li>
              <li className="skills-item">PostgreSQL</li>
              <li className="skills-item">
                <FontAwesomeIcon icon={faJs} className="icon" /> JavaScript
              </li>
              <li className="skills-item">
                <FontAwesomeIcon icon={faReact} className="icon" /> React.js
              </li>
              <li className="skills-item">
                <FontAwesomeIcon icon={faCss3} className="icon" /> HTML5/CSS3
              </li>
              <li className="skills-item">
                <FontAwesomeIcon icon={faJs} className="icon" /> TypeScript
              </li>
              <li className="skills-item">
                <FontAwesomeIcon icon={faNodeJs} className="icon" /> Node.js
              </li>
              <li className="skills-item">
                <FontAwesomeIcon icon={faGit} className="icon" /> Git
              </li>
              <li className="skills-item">
                <FontAwesomeIcon icon={faGithub} className="icon" /> GitHub
              </li>
              <li className="skills-item">
                <FontAwesomeIcon icon={faSlack} className="icon" /> Slack
              </li>
              <li className="skills-item">
                <FontAwesomeIcon icon={faFileExcel} className="icon" />
                Microsoft Office Excel
              </li>
              <li className="skills-item">
                <FontAwesomeIcon icon={faFilePowerpoint} className="icon" />
                Microsoft Office PowerPoint
              </li >
              <li className="skills-item">
                <FontAwesomeIcon icon={faFileWord} className="icon" />
                Microsoft Office Word
              </li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
