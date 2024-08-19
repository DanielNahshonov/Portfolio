 import './WorkExpirience.css';

export default function WorkExperience() {
  return (
    <section id='work-experience'>

    <div className="work-experience">
      <div className="experience-item">
        <h3 className="job-title">Full-Stack Developer at Circlez.ai</h3>
        <span className="job-date">01.05.2024 - Present</span>
        <ul className="job-responsibilities">
          <li>Develop features in React (Front-End) using TypeScript, and Node.js, Express, Nest.js (Back-End).</li>
          <li>Work in a team under an Agile workflow, using Git for version control.</li>
          <li>Use MySQL and PostgreSQL as the main databases for the project.</li>
          <li>Write various scripts and features in TypeScript and develop REST APIs.</li>
          <li>Collaborate in a fast-paced Start-Up environment with strict deadlines.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3 className="job-title">Analyst at Egged, Beit Dagan</h3>
        <span className="job-date">2023 - Present</span>
        <ul className="job-responsibilities">
          <li>Analyze data related to bus routes, schedules, and passenger demographics to optimize transportation efficiency.</li>
          <li>Develop reports and presentations to communicate findings and recommendations to management.</li>
          <li>Collaborate with cross-functional teams to implement improvements and address operational challenges.</li>
          <li>Utilize analytical tools and software for data gathering and decision-making.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3 className="job-title">Restaurant Manager at Japanika, Bat Yam</h3>
        <span className="job-date">2022 - 2023</span>
        <ul className="job-responsibilities">
          <li>Manage daily operations, including staff scheduling, inventory management, and customer service.</li>
          <li>Develop and implement strategies to improve efficiency and maximize profitability.</li>
          <li>Lead and train a team of employees to ensure high-quality service.</li>
          <li>Handle customer complaints and resolve issues in a timely and professional manner.</li>
        </ul>
      </div>
    </div>
    </section>
  );
}
