
import { Link } from "react-router-dom";
import "./Navbar.css";
import { navItems } from "./NavItems";
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  return (
    <>
      {/* <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img className="logo"
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="logo"
          />
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => 
          {
            return (
              <li key={item.id} className={item.cName}>
                <HashLink to={`${item.path}#`}>{item.title}</HashLink>
              </li>
            );
          })}
        </ul>
      </nav> */}

    <nav className="navbar">
        <div className="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
            {navItems.map((item) => 
          {
            return (
              <li key={item.id} className={item.cName}>
                <HashLink to={`${item.path}#`}>{item.title}</HashLink>
              </li>
            );
          })}
            </ul>
            <Link to="/" className="navbar-logo">
          <img className="logo"
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="logo"
          />
        </Link>
        </div>
    </nav>

    </>
  );
}

export default Navbar;
