import React from 'react'

function About (){
  return (
    <>
    <img src={process.env.PUBLIC_URL + '/About.png'} alt="LOADING" className='flyer' />
    <div className='Contents'>
      <br/>
        <br/>
    <p className='About-paragraph'>GXP is a leading solution provided to the life science industry
    for a wide range of sterilization<br/> and cleaning technologies and provide the
    integrated skid /manufacturing tanks /vessels mobile <br/>SIP CIP unit The technology is backed up by decades of expertise and knowledge shared
    with<br/> process engineers, microbiologist, quality control and validation personnel.</p>
    <br/>

    <h2 className='title'>GXP Product range</h2>
    <br/>
    <ul className='About-list'>
    <li>Auto clave /Steam sterilizer</li>
     <li>Dry heat sterilizer</li>
    <li> Vertical auto clave.</li>
     <li>Pressure vessels</li>
     <li>Manufacturing tanks</li>
     <li>Integrated skid</li>
     <li>Mobile skid</li>
     <li>Customized skid</li>
    <li>Automation Solution for Process Equipment</li>
     <li>Thermal Validation Service</li>
     <li>CQV Services for Process Equipment</li>
     </ul>
     <br/>
    <p>GXP Solutions process system are designed and constructed for zero dead leg pharmaceutical<br/> applications which required regulatory compliance
    with cGMP. We manufacture in-house and <br/>therefore able to determine the quality we deliver as well as meeting customer specific solutions.</p>
    <br/>
    <h2>Design Standard</h2>
    <br/>
    <ul>
     <li>All pressure vessels are designed and built to comply with ASME pressure vessel codes.</li>
     <li>Design and construction of the system complies with current GMP norms.</li>
     </ul>
     <br/>
    </div>
    </>
  )
}

export default About;