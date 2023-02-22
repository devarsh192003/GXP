import React from 'react'
import Data from '../Data1.json'

function Process () {
  return (
    <div classname='Process'>
      <img src={process.env.PUBLIC_URL + '/Automation.png'} alt="LOADING" className='flyer' />
      <div className='Contents'>
        <br/>
        <p>{Data.data.Process.intro}</p>
        <br/>
        <ul className='About-list'>
          <li>{Data.data.Process.Content1}</li>
          <li>{Data.data.Process.Content2}</li>
          <li>{Data.data.Process.Content3}</li>
        </ul>
        <br/>
        <p>{Data.data.Process.Line1}</p>
        <br/>
        <ul className='dottes-list'>
          <li>{Data.data.Process.Content4}</li>
          <li>{Data.data.Process.Content5}</li>
          <li>{Data.data.Process.Content6}</li>
          <li>{Data.data.Process.Content7}</li>
          <li>{Data.data.Process.Content8}</li>
          <li>{Data.data.Process.Content9}</li>
          <li>{Data.data.Process.Content10}</li>
          <li>{Data.data.Process.Content11}</li>
          <li>{Data.data.Process.Content12}</li>
          <li>{Data.data.Process.Content13}</li>
        </ul>
        <br/>
        <h1>{Data.data.Process.Subtitle1}</h1>
        <br/>
        <p>{Data.data.Process.paragraph1}</p>
        <br/>
        <p>{Data.data.Process.Content14}</p>
        <p>{Data.data.Process.Content15}</p>
        <p>{Data.data.Process.Content16}</p>
        <p>{Data.data.Process.Content17}</p>
        <br/>
        <h3><b>Installation Qualification</b></h3><p>{Data.data.Process.paragraph2}</p>
        <br/>
        <p><h3><b>Operational Qualification</b></h3>{Data.data.Process.paragraph3}</p>
        <br/>
        <p><h3><b>Performance Qualification</b></h3>{Data.data.Process.paragraph4}</p>
        <br/>
        <p>{Data.data.Process.Content19}</p>
        <br/>
        <p>{Data.data.Process.Content20}</p>
        <br/>
        <img src={process.env.PUBLIC_URL + '/vmodel.png'} alt="LOADING"/>
        <br/>
        <h2>{Data.data.Process.Subtitle2}</h2>
        <br/>
        <ul className='disc-list'>
          <li>{Data.data.Process.Content21}</li>
          <li>{Data.data.Process.Content22}</li>
          <li>{Data.data.Process.Content23}</li>
          <li>{Data.data.Process.Content24}</li>
          <li>{Data.data.Process.Content25}</li>
          <li>{Data.data.Process.Content26}</li>
        </ul>
        <br/>
        <p>{Data.data.Process.paragraph5}</p>
        <br/>
        <p>{Data.data.Process.paragrah6}</p>
        <br/>
        <p>{Data.data.Process.paragrah7}</p>
        <br/>
  
        <ul className='About-list'>
          <li>{Data.data.Process.Content27}</li>
          <li>{Data.data.Process.Content28}</li>
          <li>{Data.data.Process.Content29}</li>
          <li>{Data.data.Process.Content30}</li>
          <li>{Data.data.Process.Content31}</li>
          <li>{Data.data.Process.Content32}</li>
          <li>{Data.data.Process.Content33}</li>
          <li>{Data.data.Process.Content34}</li>
          <li>{Data.data.Process.Content35}</li>
          <li>{Data.data.Process.Content36}</li>
        </ul>
        <br/>
      </div>
    </div>
  )
}

export default Process