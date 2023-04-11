import React from "react";
import { Link } from "react-router-dom";
import img6 from "../Images/app-screenshot-investment-platform-nigeria.png";
import "../Style/Hsec6.css";

const Hsec6 = () => {
  return (
    <div>
      <div className="sec6-body">
        {" "}
        <div className="sec6-flex">
          <div className="sec6-cont">
            <h1>
              {" "}
              <b> Access investment opportunities</b>{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              optio quas illo aut. Cum minima repudiandae, et corrupti esse
              asperiores, 
              
            </p>
            <Link to="/signup" className="btn">
              Get Started
            </Link>
          </div>
          <div className="sec6-img">
            <img src={img6} alt="" width="60%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hsec6;
