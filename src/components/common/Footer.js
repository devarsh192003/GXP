import React from "react";
import "./Footer.css";

function Footer() {

  const onButtonClick = () => {
      fetch('GXPbrochure.pdf').then(response => {
          response.blob().then(blob => {
              const fileURL = window.URL.createObjectURL(blob);
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = 'GXPbrochure.pdf';
              alink.click();
          })
      })
  }


  return (
    <>
      <div className="footer">
        <div className="Container">
          {/* Column1 */}
        <div>
            <h3>GXP Solutions</h3>
            <p>TAILORED MADE SOLUTION FOR</p>
            <p>SKID-TANK-VESSEL From India</p>
            <button class="button-62" onClick={onButtonClick}>Download GXP Solution brochure</button>
        </div>
      
        <div className="Links">
            <ui className="plane-list">
              <li>About Us</li>
              <li>TankVessel</li>
              <li>GMPAutoclave</li>
              <li>Thermal Validation</li>
              <li>Process Equipment</li>
            </ui>
        </div>
      </div>
      <div className="dowload">
      
      </div>
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