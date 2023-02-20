import React, { Component } from 'react'

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
        <div className='Contents' style={{marginBottom:500,marginTop:10}}><h1 style={{marginLeft:350}}>Download</h1></div>
        <button class="button-62" onClick={onButtonClick}>Download GXP Solution brochure</button>
        </>
    )
  }
}
