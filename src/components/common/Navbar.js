
import { Link } from "react-router-dom";
import "./Navbar.css";
import { navItems } from "./NavItems";

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
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
