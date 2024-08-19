import { useState, useEffect, useRef } from 'react';
import './NavBar.css';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null); // Указываем тип HTMLDivElement

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current && window.scrollY >= navRef.current.offsetTop) {
        navRef.current.classList.add("sticky");
      } else if (navRef.current) {
        navRef.current.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="container">
        <div className="logo">
          <a href="#main">Daniel Nahshonov</a> {/* Заменил Link на a и to на href */}
        </div>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#work-experience">Work Experience</a></li>
          </ul>
        </div>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
}
