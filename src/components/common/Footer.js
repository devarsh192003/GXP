import React from "react";
import "./Footer.css";
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
            <ui className="footer-link">
            
              <li><HashLink to = "/About#" className="link">About</HashLink></li>
              <li><HashLink to = "/TankVessel#" className="link">TankVessel</HashLink></li>
              <li><HashLink to = "/GMPAutoclave#" className="link">GMPAutoclave</HashLink></li>
              <li><HashLink to =  "/Thermal#"className="link">Thermal Validation</HashLink></li>
              <li><HashLink to = "/Process#" className="link">Process Equipment</HashLink></li>
              
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
