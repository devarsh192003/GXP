import React from "react";
import { NavLink } from "react-router-dom";

function Card({ title, body, imageUrl, url }) {
  return (
    <div className="col">
      <div className="single-card">
        <div className="image">
          <img src={require("" + imageUrl)} alt="" />
        </div>
        <div className="text">
          <div className="text-inner">
            <h3>{title}</h3>
            <p>{body}</p>
            <NavLink to={url} className="button">
              Read More
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
