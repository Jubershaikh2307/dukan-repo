import "./Sidebar.css";

import React from "react";
import downArrow from "../Asset/downArrow.png";
import logo from "../Asset/logo.png";
import { sidebarData } from "../Constant";
import wallet from "../Asset/wallet.png";

export const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img
          src={logo}
          alt=""
          srcset=""
          style={{ width: "39px", height: "39px", borderRadius: "4px" }}
        />
        <div style={{ margin: 0, marginLeft: "-80px" }}>
          <p
            style={{
              color: "#FFFFFF",
              fontFamily: "Inter",
              fontSize: "15px",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            Nishyan
          </p>
          <p
            style={{
              fontFamily: "Galano Grotesque",
              fontSize: "13px",
              fontWeight: "300",
              textAlign: "left",
              marginTop: "-10px",
            }}
          >
            Visit store
          </p>
        </div>
        <img
          src={downArrow}
          alt=""
          style={{ width: "15px", height: "8.68px", textAlign: "center" }}
        />
      </div>
      <ul className="nav-links">
        {sidebarData.map((el) => {
          return (
            <li>
              <img src={el.img} alt="" srcset="" />
              <a href="#home">{el.text}</a>
            </li>
          );
        })}
      </ul>
      <div className="sideBarBottom">
        <img
          src={wallet}
          alt=""
          srcset=""
          style={{ width: "39px", height: "39px", borderRadius: "4px" }}
        />
        <div style={{ margin: 0, marginLeft: "20px" }}>
          <p
            style={{
              color: "#FFFFFF",
              fontFamily: "Inter",
              fontSize: "13px",
              fontWeight: "300",
              textAlign: "left",
            }}
          >
            Available credits
          </p>
          <p
            style={{
              fontFamily: "Galano Grotesque",
              fontSize: "15px",
              fontWeight: "300",
              textAlign: "left",
              marginTop: "-10px",
            }}
          >
            222.10
          </p>
        </div>
      </div>
    </div>
  );
};
