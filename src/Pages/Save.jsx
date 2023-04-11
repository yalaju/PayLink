import React from "react";
import img1 from "../Images/saveimg1.jpg";
import img2 from '../Images/saveimg2.jpg'
import img3 from '../Images/saveimg3.jpg'
import img4 from '../Images/saveimg4.jpg'

const Save = () => {
  return (
    <div>
      <div className="sec6-body" style={{ gap: "2%" }}>
        {" "}
        <div
          className="sec6-flex"
          style={{
            paddingTop: "22px",
            paddingBottom: "5%",
            gap: "2%",
          }}
        >
          <div
            className="sec6-cont"
            style={{ textAlign: "left", paddingLeft: "30px" }}
          >
            <h1>
              {" "}
              <b>• More savings are made automatically.</b>{" "}
            </h1>
            <p>
              It can be challenging to save money. We've been there before.
              However, there is a simpler method that you'll enjoy. First,
              download PayLink.
            </p>
          </div>
          <div className="sec6-img">
            <img
              src={img4}
              alt=""
              width="100%"
              height="100%"
              style={{ borderRadius: "30px" }}
            />
          </div>
        </div>
      </div>

      <div className="sec6-body" style={{ gap: "2%" }}>
        {" "}
        <div
          className="sec6-flex"
          style={{
            paddingTop: "20px",
            paddingBottom: "5%",
            gap: "2%",
          }}
        >
          <div className="sec6-img">
            <img
              src={img2}
              alt=""
              width="100%"
              height="100%"
              style={{ borderRadius: "30px" }}
            />
          </div>
          <div
            className="sec6-cont"
            style={{ textAlign: "left", paddingLeft: "30px" }}
          >
            <h1>
              {" "}
              <b> • It's possible to save effortlessly.</b>{" "}
            </h1>
            <p>
              Expenses are unavoidable. You cover your expenses in this way.
              Nevertheless, we can assist you in saving money for future
              purchases. With Spend+Save, all you have to do is choose a savings
              percentage and see your money grow.
            </p>
          </div>
        </div>
      </div>

      <div className="sec6-body" style={{ gap: "2%" }}>
        {" "}
        <div
          className="sec6-flex"
          style={{
            paddingTop: "22px",
            paddingBottom: "5%",
            gap: "2%",
          }}
        >
          <div
            className="sec6-cont"
            style={{ textAlign: "left", paddingLeft: "30px" }}
          >
            <h1>
              {" "}
              <b> • Reach all of your financial objectives. .</b>{" "}
            </h1>
            <p>
              Whether you save daily, weekly, or monthly is up to you.
              Regardless of the method, setting aside money on a monthly basis
              will be simple with our Flexible Savings plan. Finding out more
              about Flexible Savings (this should be linked to them ri where to
              register)
            </p>
          </div>
          <div className="sec6-img">
            <img
              src={img3}
              alt=""
              width="100%"
              height="100%"
              style={{ borderRadius: "30px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Save;
