import React, { Component } from 'react'
import "./download.css"


export default class Download extends Component {
  render() {
    return (
        <>
            
        <div className='download'><h1>Download</h1></div>
        <div className='form-container'>
        <div class="form">
      <div class="download-title">BROCHURE</div>
      <div class="download-subtitle">Fill Your Details</div>
      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder=" " />
        <div class="cut cut-short"></div>
        <label for="firstname" class="placeholder">Name</label>
      </div>
      <div class="input-container ic2">
        <input id="lastname" class="input" type="tel" placeholder=" " />
        <div class="cut cut-short"></div>
        <label for="lastname" class="placeholder">Phone</label>
      </div>
      <div class="input-container ic2">
        <input id="lastname" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="lastname" class="placeholder">Organisation Name</label>
      </div>
      <div class="input-container ic2">
        <input id="email" class="input" type="email" placeholder=" " />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Email</label>
      </div>
      {/* <a href="#" class="buttonDownload">Download</a> */}
      <div className = "submit-container">
      <button type="text" class="buttonDownload">submit</button>
      </div>
      
    </div>
    </div>
        </>
    )
  }
}
