import React from "react";
import "../Style/Hsec3.css";
import { Link } from "react-router-dom";


const Hsec3 = () => {
  return (
    <div>
      <div
        className="sec3body"
        style={{
          //   backgroundColor: "white"
          padding: "8% 2% 8% 5%",
        }}
      >
        <div
          className="sec3-cont"
          style={{
            backgroundColor: "white",
          }}
        >
          <h1>5 ways to build your investment.</h1>
          <p>
            Earn 5%-15% when you invest with any of these PayLink plans.
          </p>
          {/* <Link to="/signup" className="sec1-btn">
            Get Started
          </Link> */}
        </div>
        <div className="sec3-cont">
          <h4>1. Start Early and Invest Regularly:</h4>
          <p>
            Invest regularly to take advantage of compound interest and benefit
            from market fluctuations.
          </p>
        </div>
        <div className="sec3-cont">
          <h4>2. Diversify Your Portfolio:</h4>
          <p>Diversification is key to reducing risk and maximizing returns.</p>
        </div>
        <div
          className="sec3-cont"
          style={
            {
              // display:"none"
            }
          }
        >
          <h4>3. Keep an Eye on Fees:</h4>
          <p>
            Fees can reduce investment returns, so look for low-cost options.
          </p>
        </div>
        <div className="sec3-cont">
          <h4>4. Rebalance Your Portfolio:</h4>
          <p>Rebalance portfolio to align with long-term goals.</p>
        </div>
        <div className="sec3-cont">
          <h4>5.Stay Disciplined and Patient:</h4>
          <p>
            Investing takes time, discipline, and patience to build a
            successful portfolio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hsec3;
