
import { Link } from "react-router-dom";
import "./Navbar.css";
import { navItems } from "./NavItems";
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  return (
    <>
      <nav className="navbar">
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
      </nav>
    </>
  );
}

export default Navbar;
