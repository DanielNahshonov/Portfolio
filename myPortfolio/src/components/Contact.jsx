
export default function Contact() {
  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54151.56723193519!2d34.73718735961758!3d31.975192155666996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b43827ab66ff%3A0x17bcc54a571a7ab8!2sRishon%20LeTsiyon!5e0!3m2!1sen!2sil!4v1724833108660!5m2!1sen!2sil"
            width="400"
            height="300"
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </figure>
      </section>

      <section>
        <h2 className="h2 article-title">My Links:</h2>
        <h3 className="links">
          GitHub:
          <a
            href="https://github.com/DanielNahshonov"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/DanielNahshonov
          </a>
        </h3>
        <h3 className="links">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/daniel-nahshonov-12bb181a7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/daniel-nahshonov-12bb181a7/
          </a>
        </h3>
        <h3 className="links">
          Email:{" "}
          <a href="mailto:dnakhshunov@gmail.com">dnakhshunov@gmail.com</a>
        </h3>
      </section>
    </article>
  );
}
