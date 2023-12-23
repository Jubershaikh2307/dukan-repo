import "./Card.css";

import React from "react";
import question_mark from "../Asset/question_mark.png";

export const Card = ({
  show = { visibility: "visible" },
  text,
  amount,
  bottom = false,
  bg = {},
}) => {
  return (
    <div className="cardContainer" style={bg}>
      <div style={{ display: "flex", placeItems: "center" }}>
        <p>{text}</p>
        <img
          src={question_mark}
          alt=""
          srcset=""
          style={{
            width: "16px",
            height: "16px",
            marginLeft: "5px",
            padding: "0.8px 0.8px 0.8px 0.8px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          placeItems: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Galano Grotesque",
            fontSize: "32px",
            fontWeight: "500",
            letterSpacing: "0em",
            textAlign: "left",
            marginRight: "50px",
            marginTop: "0px",
          }}
        >
          {amount}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "-20px",
            ...show,
          }}
        >
          <p style={{ color: "#146EB4", marginTop: "0px" }}>
            <u>13 orders</u>
          </p>
          <img
            src={question_mark}
            alt=""
            srcset=""
            style={{
              width: "16px",
              height: "16px",
              marginLeft: "5px",
              padding: "0.8px 0.8px 0.8px 0.8px",
            }}
          />
        </div>
      </div>
      {bottom && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#0E4F82",
            width: "380px",
            height: "36px",
            marginLeft: "-15px",
            borderBottomLeftRadius: "4px",
            borderBottomRightRadius: "4px",
          }}
        >
          <p style={{ color: "#F2F2F2", margin: "5px" }}>Next payout date:</p>
          <p style={{ color: "#F2F2F2", margin: "5px" }}>Today, 04:00PM</p>
        </div>
      )}
    </div>
  );
};
