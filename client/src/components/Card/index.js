import React from "react";

function Card({ icon, title, children }) {
  return (
    <div className="card mt-4" style={{backgroundColor:"#e3e1e9"}}>
      <div className="card-header">
        <h3 style={{color:"#16437e"}}>
          <strong className="mostFont">
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
