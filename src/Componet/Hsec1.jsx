import React from "react";
// import landimg1 from "../Images/Sec4img1.png";
import "../Style/Hsec1.css";
import { Link } from "react-router-dom";
// import landing1 from "../Images/section1img.png"
import apple from '../Images/Sec1imgflex.png'
import play from '../Images/Sec1imgflex1.png'


const Hsec1 = () => {
  return (
    <div className="sec1-body">
      {" "}
      <div className="sec1-flex">
        <div className="sec1-cont">
          <h1>
            {/* <b> */}
              Invest A Piece Of <br /> Your Tomorrow <br /> Today.
            {/* </b> */}
          </h1>
          <p>
            Make sensible investments. <br /> Control risk.
            Increase your riches.
          </p>
          <Link to="/signup" className="sec1-btn">
            Get Started
          </Link>
          <div className="sec1flex">
            <div className="secflex-in1">
              <img src={play} alt="" />
            </div>
            <div className="secflex-in2">
              <img src={apple} alt="" />
            </div>
          </div>
        </div>
        {/* <div className="sec1-img">
          <img src={landing1} alt="" width="170%"/>
        </div> */}
      </div>
    </div>
  );
};

export default Hsec1;