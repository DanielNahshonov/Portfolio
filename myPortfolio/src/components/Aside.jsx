import  { useState } from 'react';
import MyAvatar from "../assets/images/my-avatar.jpeg";

export default function Aside() {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const toggleInfo = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  return (
    <aside className={`sidebar ${isInfoVisible ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={MyAvatar} alt="Daniel Nahshonov" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Daniel Nahshonov">Daniel Nahshonov</h1>
          <p className="title"> Full Stack Web Developer</p>
        </div>
        <button className="info_more-btn" data-sidebar-btn onClick={toggleInfo}>
          <span>{isInfoVisible ? 'Hide Contacts' : 'Show Contacts'}</span>
          <ion-icon name={isInfoVisible ? "chevron-up" : "chevron-down"}></ion-icon>
        </button>
      </div>
      <div className={`sidebar-info_more ${isInfoVisible ? 'visible' : ''}`}>
        <div className="separator"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:dnakhshunov@gmail.com" className="contact-link">dnakhshunov@gmail.com</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+972546977557" className="contact-link">+(972) 54-697-7557</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1994-03-28">March 28, 1994</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Rishon Letzion, Israel</address>
            </div>
          </li>
        </ul>
        <div className="separator"></div>
        <ul className="social-list">
          <li className="social-item">
            <a href="https://github.com/DanielNahshonov" target="_blank" rel="noopener noreferrer">
              <div className="icon-box">
                <ion-icon name="logo-github"></ion-icon>
              </div>
            </a>
          </li>
          <li className="social-item">
            <a href="https://www.linkedin.com/in/daniel-nahshonov-12bb181a7/" target="_blank" rel="noopener noreferrer">
              <div className="icon-box">
                <ion-icon name="logo-linkedin"></ion-icon>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
