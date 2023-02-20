import React, { Component } from 'react'
import "./download.css"

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
export default class Download extends Component {
  render() {
    return (
        <>
            
        <div className='Contents' style={{marginBottom:200,marginTop:10}}><h1 style={{marginLeft:350}}>Download</h1></div>
        <button class="button-30" onClick={onButtonClick}>Download GXP Solution brochure</button>
        <div class="form">
      <div class="title">Welcome</div>
      <div class="subtitle">Let's create your account!</div>
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
        </>
    )
  }
}
