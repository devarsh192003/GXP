import React from "react";
import "./Footer.css";
import { NavLink } from 'react-router-dom';
import About from './../../pages/About';
import TankVessel from './../../pages/TankVessel';
import GMPAutoclave from './../../pages/GMPAutoclave';

function Footer() {
  return (
    
    <>
      <div className="footer">
        <div className="Container">
          {/* Column1 */}
          <div>
            <h3>GXP Solutions</h3>
            <p>TAILORED MADE SOLUTION FOR</p>
            <p>SKID-TANK-VESSEL From India</p>
          </div>

          <div className="Links">
            <ui className="plane-list">
              <li><NavLink to = "/About" className="link">About</NavLink></li>
              <li><NavLink to = "/TankVessel" className="link">TankVessel</NavLink></li>
              <li><NavLink to = "/GMPAutoclave" className="link">GMPAutoclave</NavLink></li>
              <li><NavLink to = "/Thermal" className="link">Thermal Validation</NavLink></li>
              <li><NavLink to = "/Process" className="link">Process Equipment</NavLink></li>
            </ui>
          </div>
        </div>
        <div className="dowload"></div>
        <div className="bottom">
          <p>
            &copy;{new Date().getFullYear()} GXP Solutions | All rights reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
