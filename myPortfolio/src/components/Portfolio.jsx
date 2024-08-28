import LolaBeachBar from "../assets/images/LolaBeachBar.png";

export default function Portfolio() {
  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="project-list">
          <li className="project-item active" data-filter-item data-category="web development">
            <a href="https://danielnahshonov.github.io/restaurant/" target="_blank" rel="noopener noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>
                <img src={LolaBeachBar} alt="Lola Beach Bar restaurant" loading="lazy" />
              </figure>
              <h3 className="project-title">Restaurant</h3>
              <p className="project-category">Web Development</p>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}
