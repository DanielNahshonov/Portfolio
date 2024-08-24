import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
        <div className="logo">
          <a href="#main">Daniel Nahshonov</a>{" "}
        </div>
        <div>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#work-experience">Work Experience</a>
            </li>
          </ul>
        </div>
    </nav>
  );
}
