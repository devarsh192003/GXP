import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Card({ title, body, imageUrl, url }) {
  return (
    <div className="col">
      <div className="single-card">
        <div className="image">
          <img src={require("" + imageUrl)} alt="" className="card-image" />
        </div>
        
        <div className="text">
          <div className="text-inner">
            <h3>{title}</h3>
            <p>{body}</p>
            <HashLink to={`${url}#`} className="button">
              Read More
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
