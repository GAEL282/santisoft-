import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <header>
     
      {/* Main Navigation */}
      <div className="header">
        <div className="logo">
          <Link to="/"> {/* Clicking this will navigate back to the home page */}
            <img src="images/santisoft-04.png" alt="Santisoft Logo" className="logo-image" />
          </Link>
        </div>

        <nav>
          <ul>
            <li className="dropdown">
              <Link to="/trainings">Trainings ▼</Link>
              <ul className="dropdown-menu">
                <li><Link to="/trainings/web-development">Web Development</Link></li>
                <li><Link to="/trainings/data-science">Data Science</Link></li>
                <li><Link to="/trainings/cyber-security">Cyber Security</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="/jobs">Services ▼</Link>
              <ul className="dropdown-menu">
                <li><Link to="/services/consulting">Consulting</Link></li>
                <li><Link to="/services/design">Design</Link></li>
                <li><Link to="/services/marketing">Marketing</Link></li>
              </ul>
            </li>
            <li><Link to="/school">Support</Link></li>
            <li><Link to="/cpf">About</Link></li>
            <li><Link to="/items">Contact</Link></li>
          </ul>
        </nav>

        {/* Buttons */}
        <div className="header-actions">
          <button className="doc-button">Contact us on </button>
         
        </div>
      </div>
    </header>
  );
};

export default Header;
