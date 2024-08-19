 import './MainPage.css'; // Подключаем CSS файл
// import profilePic from './profile-pic.jpg'; // Импортируем фото

export default function MainPage() {
  return (
    <section id='main'>

    <div className="main-page">
      <div className="greeting">
        {/* <img src={profilePic} alt="Profile" className="profile-pic" /> */}
        <h1>Hello, I'm Daniel Nahshonov</h1>
        <p>Welcome to my portfolio website. I'm a Full-Stack Developer with a passion for creating dynamic and responsive web applications.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/daniel-nahshonov-12bb181a7/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
          <a href="https://github.com/DanielNahshonov" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
        </div>
      </div>
    </div>
    </section>
  );
}
