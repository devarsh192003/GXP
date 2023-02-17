import React from 'react'
import Data from '../Data2.json'

function TankVessel() {
  return (
    <div classname='TankVessel'>
      <div className='Contents'>
      <br/>
      <h2>{Data.data2.TankVessel.Subtitle1}</h2>
      <br/>
      <ul>
        <li>{Data.data2.TankVessel.Content1}</li>
        <li>{Data.data2.TankVessel.Content2}</li>
        <li>{Data.data2.TankVessel.Content3}</li>
        <li>{Data.data2.TankVessel.Content4}</li>
        <li>{Data.data2.TankVessel.Content5}</li>
        <li>{Data.data2.TankVessel.Content6}</li>
        <li>{Data.data2.TankVessel.Content7}</li>
        <li>{Data.data2.TankVessel.Content8}</li>
      </ul>
      <br/>
      <h2>{Data.data2.TankVessel.Subtitle2}</h2>
      <br/>
      <p>{Data.data2.TankVessel.para1}</p>
      <br/>
      <h2>{Data.data2.TankVessel.Subtitle3}</h2>
      <br/>
      <ul>
      <img src={process.env.PUBLIC_URL + '/mobileskid2.png'} alt="logo" style={{height:197,width:250,float:'right'}}/>
      <li>{Data.data2.TankVessel.Content9}</li>
      <li>{Data.data2.TankVessel.Content10}</li>
      <li>{Data.data2.TankVessel.Content11}</li>
      <li>{Data.data2.TankVessel.Content12}</li>
      <li>{Data.data2.TankVessel.Content13}</li>
      <li>{Data.data2.TankVessel.Content14}</li>
      <img src={process.env.PUBLIC_URL + '/mobileskid1.png'} alt="logo" style={{height:197,width:200,float:'left'}}/>

      <li>{Data.data2.TankVessel.Content15}</li>
      <li>{Data.data2.TankVessel.Content16}</li>
      <li>{Data.data2.TankVessel.Content17}</li>
      <li>{Data.data2.TankVessel.Content18}</li>
      <li>{Data.data2.TankVessel.Content19}</li>
      <li>{Data.data2.TankVessel.Content20}</li>
      </ul>
      <br/>
      <h2>{Data.data2.TankVessel.Subtitle4}</h2>
      <br/>
      <ul>
      <img src={process.env.PUBLIC_URL + '/integratedskid1.png'} alt="logo" style={{height:197,width:200,float:'left'}}/>
      <li>{Data.data2.TankVessel.Content22}</li>
      <li>{Data.data2.TankVessel.Content23}</li>
      <li>{Data.data2.TankVessel.Content24}</li>
      
      <li>{Data.data2.TankVessel.Content25}</li>
      <img src={process.env.PUBLIC_URL + '/integratedskid2.png'} alt="logo" style={{height:227,width:350,float:'right'}}/>
      <li>{Data.data2.TankVessel.Content26}</li>
      <li>{Data.data2.TankVessel.Content27}</li>
      
      <li>{Data.data2.TankVessel.Content28}</li>
      <li>{Data.data2.TankVessel.Content29}</li>
      <li>{Data.data2.TankVessel.Content30}</li>
      <img src={process.env.PUBLIC_URL + '/integratedskid3.png'} alt="logo" style={{height:197,width:180,float:'right'}}/>
      <li>{Data.data2.TankVessel.Content31}</li>
      <li>{Data.data2.TankVessel.Content21}</li>
      <li>{Data.data2.TankVessel.Content32}</li>
      <li>{Data.data2.TankVessel.Content33}</li>
      <li>{Data.data2.TankVessel.Content34}</li>
      <li>{Data.data2.TankVessel.Content35}</li>
      </ul>
      <br/>
      <h2>{Data.data2.TankVessel.Subtitle5}</h2>
      </div>
    </div>
  )
}

export default TankVessel