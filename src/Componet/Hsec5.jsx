import React from 'react'
import { Link } from "react-router-dom";
import img5 from "../Images/pleantyphone.jpg"
import "../Style/Hsec5.css"


const Hsec5 = () => {
  return (
    <div>
      <div className="sec5-body">
        {" "}
        <div className="sec5-flex">
          <div className="sec5-cont">
            <h1>
              {" "}
              <b>
                "The art is not in making money,
                <br /> but in keeping it."
              </b>{" "}
            </h1>
            <p>
              {/* helps over 4 million customers achieve their financial goals by
              helping them save and invest with ease.wer= */}
            </p>
            <Link to="/signup" className="sec1-btn">
              Get Started
            </Link>
          </div>
          <div className="sec5-img">
            <img src={img5} alt="" width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hsec5