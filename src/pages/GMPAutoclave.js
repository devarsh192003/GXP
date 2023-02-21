import React from "react";
import Data from "../Data2.json";

function GMPAutoclave() {
  return (
    <div className="GMPAutoclave">
     
      <img src={process.env.PUBLIC_URL + '/GMP.png'} alt="LOADING" className='flyer' />
    
      <div className="Contents">
        <br/>
        <p>{Data.data2.GMPAutoclave.para1}</p>
        <p>{Data.data2.GMPAutoclave.para2}</p>
        <br />
        <h2>{Data.data2.GMPAutoclave.Subtitle1}</h2>
        <br />
        <img src={process.env.PUBLIC_URL + "/process.png"} alt="LOADING" />
        <br />
        <br />
        <h1>{Data.data2.GMPAutoclave.Subtitle2}</h1>
        
        <br />
        <h2>{Data.data2.GMPAutoclave.Subtitle3}</h2>
        <br />
        <p>{Data.data2.GMPAutoclave.para3}</p>
        <br />
        <h2>{Data.data2.GMPAutoclave.Subtitle4}</h2>
        <br />
        <p>{Data.data2.GMPAutoclave.para41}</p>
        <p>{Data.data2.GMPAutoclave.para42}</p>
        <p>{Data.data2.GMPAutoclave.para43}</p>
        <br />
        <h2>{Data.data2.GMPAutoclave.Subtitle5}</h2>
        <br />
        <ul>
          <li>{Data.data2.GMPAutoclave.Content1}</li>
          <li>{Data.data2.GMPAutoclave.Content2}</li>
          <li>{Data.data2.GMPAutoclave.Content3}</li>
          <li>{Data.data2.GMPAutoclave.Content4}</li>
          <li>{Data.data2.GMPAutoclave.Content5}</li>
          <li>{Data.data2.GMPAutoclave.Content6}</li>
          <li>{Data.data2.GMPAutoclave.Content7}</li>
          <li>{Data.data2.GMPAutoclave.Content8}</li>
          <li>{Data.data2.GMPAutoclave.Content9}</li>
          <br />
        </ul>
        <br />
        <img
          src={process.env.PUBLIC_URL + "/steamsterilizerhinge.jpg"}
          alt="LOADING"
          style={{ height: 250, width: 250 }}
        />
        <img
          src={process.env.PUBLIC_URL + "/steamsterilizerhorizontal.jpg"}
          alt="LOADING"
          style={{ height: 250, width: 250 }}
        />
        <img
          src={process.env.PUBLIC_URL + "/steamsterilizer.jpg"}
          alt="LOADING"
          style={{ height: 250, width: 250 }}
        />
        <br/>
        <br/>
        <h2>{Data.data2.GMPAutoclave.Subtitle8}</h2>
        <br/>
        <p>{Data.data2.GMPAutoclave.para6}</p>
        <p>{Data.data2.GMPAutoclave.para7}</p>
        <ul className="square-list">
          <li>{Data.data2.GMPAutoclave.para81}</li>
          <li>{Data.data2.GMPAutoclave.para82}</li>
          <li>{Data.data2.GMPAutoclave.para83}</li>
          <li>{Data.data2.GMPAutoclave.para84}</li>
        </ul>
        <br/>
        <p>{Data.data2.GMPAutoclave.para9}</p>
        <ul className="disc-list">
          <li>{Data.data2.GMPAutoclave.Content10}</li>
          <li>{Data.data2.GMPAutoclave.Content11}</li>
          <li>{Data.data2.GMPAutoclave.Content12}</li>
          <li>{Data.data2.GMPAutoclave.Content23}</li>
        </ul>
        <br />
      </div>
        <div className="table-container">
        <table className="table">
          <tr>
            <td>
              <img
                src={process.env.PUBLIC_URL + "/processdesign.png"}
                className="table-image"
                alt="LOADING"
              />
            </td>
            <td>
              <img
                src={process.env.PUBLIC_URL + "/design.png"}
                className="table-image"
                alt="LOADING"
              />
            </td>
            <td>
              <img
                src={process.env.PUBLIC_URL + "/manufacturing.png"}
                className="table-image"
                alt="LOADING"
              />
            </td>
            <td>
              <img
                src={process.env.PUBLIC_URL + "/commision.png"}
                className="table-image"
                alt="LOADING"
              />
            </td>
            <td>
              <img
                src={process.env.PUBLIC_URL + "/qualification.png"}
                className="table-image"
                alt="LOADING"
              />
            </td>
          </tr>
          <tr>
            <td>{Data.data2.GMPAutoclave.Content14}</td>
            <td>{Data.data2.GMPAutoclave.Content15}</td>
            <td>{Data.data2.GMPAutoclave.Content16}</td>
            <td>{Data.data2.GMPAutoclave.Content17}</td>
            <td>{Data.data2.GMPAutoclave.Content18}</td>
          </tr>
          <tr>
            <td>{Data.data2.GMPAutoclave.Content19}</td>
            <td>{Data.data2.GMPAutoclave.Content20}</td>
            <td>{Data.data2.GMPAutoclave.Content21}</td>
            <td>{Data.data2.GMPAutoclave.Content22}</td>
            <td>{Data.data2.GMPAutoclave.Content24}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default GMPAutoclave;
