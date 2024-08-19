import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Contact.css'; // Подключаем стили

export default function Contact() {
  return (
    <section id='contact'>

    <div className="contact-container">
      <h2 className="contact-heading">Contact Me</h2>
      <div className="contact-details">
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <a href="mailto:dnakhshunov@gmail.com" className="contact-link">dnakhshunov@gmail.com</a>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          <span className="contact-text">+ (972) 54-697-7557</span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
          <a href="https://www.linkedin.com/in/daniel-nahshonov-12bb181a7/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faGithub} className="contact-icon" />
          <a href="https://github.com/DanielNahshonov" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
        </div>
      </div>
    </div>
    </section>
  );
}
