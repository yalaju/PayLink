import React from 'react'
import '../Style/Hsec4.css'
import img4 from "../Images/Trackerinvest.jpg"
import { Link } from "react-router-dom";


const Hsec4 = () => {
  return (
    <div>
      <div className="sec4-body">
        {" "}
        <div className="sec4-flex">
          <div className="sec4-img">
            <img src={img4} alt="" width="100%" />
          </div>
          <div className="sec4-cont">
            <h2>
              {" "}
              <b>Manage Your Finances.</b>{" "}
            </h2>
            <p>
              Keep track of your expenditures and budget to achieve long-term
              financial goals.
            </p>
            <Link to="/audit" className="sec4-btn">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hsec4