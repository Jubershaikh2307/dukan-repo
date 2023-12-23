import "./Payout.css";

import { Button } from "./Button";
import { Card } from "./Card";
import React from "react";
import { Title } from "./Title";
import anouncement from "../Asset/anouncement.png";
import downArrow from "../Asset/Combined Shape.png";
import search from "../Asset/search.png";

export const Payout = () => {
  return (
    <div className="main-overview">
      <div className="top-nav">
        <Title text="Overview" />
        <div style={{ border: "1px solid #D9D9D9" }}>
          <select
            name="cars"
            id="cars"
            style={{
              border: "none",
              padding: "5px",
              fontFamily: "Galano Grotesque",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
      <div className="cards">
        <Card
          text="Amount Processed"
          amount="₹23,92,312.19"
          show={{ visibility: "hidden" }}
          bottom={true}
          bg={{ backgroundColor: "#146EB4", color: "white" }}
        />
        <Card text="Amount Pending" amount="₹92,312.20" />
        <Card
          text="Amount Processed"
          amount="₹23,92,312.19"
          show={{ visibility: "hidden" }}
        />
      </div>
      <div className="bottomContainer">
        <Title text="Transactions | This Month" />
        <div style={{ display: "flex", marginTop: "20px" }}>
          <Button text="Payouts (22)" />
          <Button
            bg={{ backgroundColor: "#146EB4", color: "white" }}
            text="Refunds (6)"
          />
        </div>
      </div>
      <div className="tableContainer">
        <div
          style={{
            display: "flex",
            height: "40px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 10 }}>
            <img
              src={search}
              alt=""
              srcset=""
              style={{
                marginRight: "10px",
                width: "36px",
                height: "20px",
                marginTop: "10px",
              }}
            />
            <input
              type="text"
              placeholder="Order ID, phone or a name..."
              style={{
                width: "200px",
                outline: "none",
                border: "none",
                backgroundColor: "transparent",
              }}
            />{" "}
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <div
              style={{
                display: "flex",
                placeItems: "center",
                border: "1px solid black",
                padding: "2px",
              }}
            >
              <p>Sort</p>
              <img
                src={anouncement}
                alt=""
                srcset=""
                style={{
                  padding: "15px",
                }}
              />
            </div>
            <img
              src={downArrow}
              alt=""
              srcset=""
              style={{
                border: "1px solid black",
                padding: "10px",
              }}
            />
          </div>
        </div>
        <div style={{ height: "100%", overflow: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Status</th>
                <th>Transition ID</th>
                <th>Refund date</th>
                <th>Order Amount</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};
