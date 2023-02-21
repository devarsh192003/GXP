import React from 'react'
import Data from '../Data2.json'

function TankVessel() {
  return (
    <div classname='TankVessel'>
      <img src={process.env.PUBLIC_URL + '/CIP.png'} alt="LOADING" className='flyer' />
      <div className='Contents'>
        <br/>
      <img src={process.env.PUBLIC_URL + '/cip1.png'} alt="logo" style={{height:250,width:250,marginRight:"10%"}}/>
      <img src={process.env.PUBLIC_URL + '/cip2.png'} alt="logo" style={{height:250,width:250,marginLeft:"10%"}}/>
      <br/>
      <br/>
      <h2>{Data.data2.TankVessel.para1}</h2>
      <br/>
      <p>{Data.data2.TankVessel.Subtitle1}</p>
      <br/>
      <ul className='disc-list'>
        
      <img src={process.env.PUBLIC_URL + '/skid.png'} alt="logo" style={{height:250,width:250,float:'right'}}/>
        <li>{Data.data2.TankVessel.Content1}</li>
        <li>{Data.data2.TankVessel.Content8}</li>
        <li>{Data.data2.TankVessel.Content2}</li>
        <li>{Data.data2.TankVessel.Content3}</li>
        <li>{Data.data2.TankVessel.Content4}</li>
        <li>{Data.data2.TankVessel.Content9}</li>
        <li>{Data.data2.TankVessel.Content5}</li>
        <li>{Data.data2.TankVessel.Content6}</li>
        <li>{Data.data2.TankVessel.Content7}</li>
        <li>{Data.data2.TankVessel.Content10}</li>
      </ul>
      <br/>
      <h2>{Data.data2.TankVessel.Subtitle2}</h2>
      <br/>
      <p>{Data.data2.TankVessel.para2}</p>
      <br/>
      <ul className='dottes-list'>
      <img src={process.env.PUBLIC_URL + '/processvessel.png'} alt="logo" style={{height:250,width:250,float:'right'}}/>
        <li>{Data.data2.TankVessel.Content11}</li>
        <li>{Data.data2.TankVessel.Content12}</li>
        <li>{Data.data2.TankVessel.Content13}</li>
        <li>{Data.data2.TankVessel.Content14}</li>
        <li>{Data.data2.TankVessel.Content15}</li>
      </ul>
      <h2>{Data.data2.TankVessel.Subtitle3}</h2>
      <br/>
      <p>{Data.data2.TankVessel.para3}</p>
      <ul className='disc-list'>
      
      <li>{Data.data2.TankVessel.Content16}</li>
      <li>{Data.data2.TankVessel.Content17}</li>
      <li>{Data.data2.TankVessel.Content18}</li>
      <li>{Data.data2.TankVessel.Content19}</li>
      
    </ul>
    <img src={process.env.PUBLIC_URL + '/sip1.png'} alt="logo" style={{height:250,width:250,marginRight:"10%"}}/>
    
    <img src={process.env.PUBLIC_URL + '/sip2.png'} alt="logo" style={{height:250,width:250,marginLeft:"10%"}}/>
      </div>
    </div>
  )
}

export default TankVessel