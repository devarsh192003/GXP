import React from "react";
// import floral from "./img/floral.jpg";
// import diwali from "./img/diwali.jpg"
// import h from "./img/h.jpg"

function Card({ title, body, imageUrl }) {
  return (
      <div className="col">
        <div className="single-card">
          <div className="image">
            <img src={require(""+imageUrl)} alt="" />
          </div>
          <div className="text">
            <div className="text-inner">
              <h3>{title}</h3>
              <p>{body}</p>
              
                
                <a href="/" class="button">Read more</a>
               
              
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Card;