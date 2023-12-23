import "./Navbar.css";

import React from "react";
import anouncement from "../Asset/anouncement.png";
import downArrow from "../Asset/downArrow.png";
import question_mark from "../Asset/question_mark.png";
import search from "../Asset/search.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="info-section">
        <h5
          style={{
            fontFamily: "Galano Grotesque",
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: "28px",
            letterSpacing: "0em",
            textAlign: "left",
            marginRight: "30px",
          }}
        >
          Payout
        </h5>
        <span className="help-text">
          <img
            src={question_mark}
            alt=""
            srcset=""
            style={{ marginRight: "10px" }}
          />{" "}
          How it works
        </span>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search features, tutorials, etc."
            style={{
              width: "100%",
              height: "100%",
              outline: "none",
              border: "none",
              backgroundColor: "transparent",
            }}
          />
          <button>
            <img
              src={search}
              alt=""
              srcset=""
              style={{ marginRight: "10px" }}
            />{" "}
          </button>
        </div>
      </div>
      <div className="icon-section">
        <img
          src={anouncement}
          alt=""
          srcset=""
          style={{
            backgroundColor: "#E6E6E6",
            padding: "15px",
            borderRadius: "50%",
          }}
        />
        <img
          src={downArrow}
          alt=""
          srcset=""
          style={{
            backgroundColor: "#E6E6E6",
            padding: "15px",
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
};
