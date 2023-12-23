import React from "react";

export const Title = ({ text }) => {
  return (
    <div
      style={{
        fontFamily: "Galano Grotesque",
        fontSize: "20px",
        fontWeight: "500",
        lineHeight: "28px",
        letterSpacing: "0em",
        textAlign: "left",
      }}
    >
      {text}
    </div>
  );
};
