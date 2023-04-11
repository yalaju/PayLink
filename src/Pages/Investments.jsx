import React from "react";
import { Link } from "react-router-dom";
// import img6 from "../Images/phone.jpg";
// import img6 from '../Images/invimg122.jpg'
import img6 from "../Images/imginv.jpg";

const Investments = () => {
  return (
    <div>
      <div
        className="sec6-body"
        style={{
          paddingTop: "0px",
        }}
      >
        {" "}
        <div className="sec6-flex" style={{ paddingBottom: "20px" }}>
          <div className="sec6-cont">
            <h1>
              {" "}
              <b> At reasonable rates, invest in US stocks.</b>{" "}
            </h1>
            <p>
              Anyone with a PayLink account now has simple access to using their
              naira to purchase US equities.
            </p>
          </div>
          <div className="sec6-img">
            <img
              src={img6}
              alt=""
              width="60%"
              style={{
                // border: "2px solid red",
                borderRadius: "76px",
              }}
            />
          </div>
        </div>
        <div style={{ fontSize:'25px'}}>
          <b>
            <lu>
              <li>View a variety of US stocks</li>
              <li>Easily purchase stocks using naira</li>
              <li>Receive real-time trade alerts and stock prices.</li>
              <li>
                You can now make money by selling stocks and receiving
                dividends.
              </li>
            </lu>
          </b>
        </div>
        <p style={{fontSize:'20px'}}>
          Whether you save daily, weekly, or monthly is up to you. Regardless of
          our Flexible Savings plan. Finding out more about Flexible Savings
        </p>
        <Link to="/signup" className="btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Investments;
