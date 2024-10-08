import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="Portfolio/" className="navbar-link" data-nav-link>
            About
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="Portfolio/resume" className="navbar-link" data-nav-link>
            Resume
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="Portfolio/portfolio" className="navbar-link" data-nav-link>
            Portfolio
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="Portfolio/contact" className="navbar-link" data-nav-link>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
