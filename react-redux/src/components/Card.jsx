import React from "react";
import "./Card.css";

export default ({ title, children }) => {
  return (
    <div className="Card">
      <div className="Header">
        <span className="title">{title}</span>
      </div>
      <div className="Content">{children}</div>
    </div>
  );
};
