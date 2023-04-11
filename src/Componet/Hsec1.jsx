import React from "react";
// import landimg1 from "../Images/Sec4img1.png";
import "../Style/Hsec1.css";
import { Link } from "react-router-dom";
import landing1 from "../Images/section1img.png"


const Hsec1 = () => {
  return (
    <div className="sec1-body">
      {" "}
      <div className="sec1-flex">
        <div className="sec1-cont">
          <h1>
            {" "}
            <b>Put Your Money To Work For You.</b>{" "}
          </h1>
          <p>Make sensible investments. <br /> Control risk. Increase your riches.</p>
          <Link to="/signup" className="sec1-btn">
            Get Started
          </Link>
        </div>
        {/* <div className="sec1-img">
          <img src={landing1} alt="" width="170%"/>
        </div> */}
      </div>
    </div>
  );
};

export default Hsec1;