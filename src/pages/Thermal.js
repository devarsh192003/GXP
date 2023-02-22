import React from 'react';
import Data from '../Data1.json';

function Thermal () {
  return (
    <div id = "Thermalpage"className='Thermal'>
      <img src={process.env.PUBLIC_URL + '/Thermal.png'} alt="LOADING" className='flyer' />
  
      <div className='Contents'>
      <br/>
      <p>{Data.data.Thermal.Intro1}</p>
      <p>{Data.data.Thermal.Intro2}</p>
      <img src={process.env.PUBLIC_URL + '/th.jpg'} alt="LOADING" style={{height:250,width:250,float:'right',marginLeft:'20%'}}/>
  
      <br/>
      <ul className='Thermal-list'>
        <li>{Data.data.Thermal.Content1}</li>
        <li>{Data.data.Thermal.Content2}</li>
        <li>{Data.data.Thermal.Content3}</li>
        <li>{Data.data.Thermal.Content4}</li>
        <li>{Data.data.Thermal.Content5}</li>
        <li>{Data.data.Thermal.Content6}</li>
        <li>{Data.data.Thermal.Content7}</li>
      </ul>
      <br/>
      <p>{Data.data.Thermal.Conclusion}</p>
      <br/>
      <br/>
      </div>
    </div>
  )
}

export default Thermal