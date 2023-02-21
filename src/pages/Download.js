import React, { Component } from 'react'
import "./download.css"


export default class Download extends Component {
  render() {
    return (
        <>
            
        <div className='download'><h1>Download</h1></div>
        <div className='form-container'>
        <div class="form">
      <div class="download-title">Welcome</div>
      <div class="download-subtitle">Let's create your account!</div>
      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="firstname" class="placeholder">First name</label>
      </div>
      <div class="input-container ic2">
        <input id="lastname" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="lastname" class="placeholder">Last name</label>
      </div>
      <div class="input-container ic2">
        <input id="email" class="input" type="text" placeholder=" " />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Email</label>
      </div>
      <button type="text" class="submit">submit</button>
    </div>
    </div>
        </>
    )
  }
}
