import "./Button.css";

import React from "react";

export const Button = ({ text, bg = {} }) => {
  return (
    <div className="buttonStyle" style={bg}>
      {text}
    </div>
  );
};
