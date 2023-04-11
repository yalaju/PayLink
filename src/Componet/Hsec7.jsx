import React from "react";
import { Link } from "react-router-dom";
import "../Style/Futter.css";
import sec7img from "../Images/phone.jpg"

const Hsec7 = () => {
  return (
    <div>
      <div className="sec7-body">
        {" "}
        <div className="sec7-flex">
          <div className="sec7-img">
            <img src={sec7img} alt="" width="80%" />
          </div>
          <div className="sec7-cont">
            <h2 style={{ fontFamily: "cursive" }}>
              {" "}
              <b>
                We always <br /> want to assist you
              </b>
            </h2>
            <h4>
              You can phone, write an email, tweet, drop into our DMs on
              Instagram, start a discussion with us on the app, or leave a
              remark. There will always be someone who is willing to help, no
              matter how you decide to do it. . . . . . .
            </h4>
            <Link to="/contact" className="sec4-btn">
              Get in Touch
            </Link>
            {/* <Link to="/signup" className="sec7-btn">
              Get Started
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hsec7;
