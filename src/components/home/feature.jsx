import React from "react";

function Feature(props) {
  return (
    <div className="icon-1-container">
      <div className="icon">
        <img src={props.image} className="headphone-icon" />
      </div>
      <div className="text-container">
        <p className="descrip">
          <h6>{props.heading}</h6>
          <span className="Descrip">{props.description}</span>
        </p>
      </div>
    </div>
  );
}

export default Feature;
