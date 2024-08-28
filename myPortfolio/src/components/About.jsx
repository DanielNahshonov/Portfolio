
import designIcon from "../assets/images/icon-design.svg";
import devIcon from "../assets/images/icon-dev.svg";

export default function About() {
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I am a Full-Stack Web Developer with a strong foundation in both
          development and management. My experience spans front-end development
          with React and TypeScript, and back-end development using Node.js,
          Express, and Nest.js. I am skilled in working with databases like
          MySQL and PostgreSQL, and thrive in dynamic, fast-paced start-up
          environments.
        </p>
        <p>
          Currently, I am developing features at Circlez.ai, collaborating
          within an Agile team, and creating REST APIs. Previously, I have
          worked as an Analyst at Egged, where I optimized transportation
          efficiency through data analysis, and as a Restaurant Manager at
          Japanika, where I honed my leadership and operational skills.
        </p>
        <p>
          Fluent in Hebrew, English, and Russian, I bring a keen eye for detail,
          excellent interpersonal skills, and a genuine passion for programming
          and problem-solving to every project I undertake.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i am doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img src={designIcon} alt="design icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web design</h4>
              <p className="service-item-text">
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src={devIcon} alt="Web development icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>
              <p className="service-item-text">
                High-quality development of sites at the professional level.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}
