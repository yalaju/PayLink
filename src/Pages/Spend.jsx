import React from 'react'
import img2 from '../Images/Sec4img1.png'
import img3 from '../Images/jaga.jpg'

const Spend = () => {
  return (
    <div>
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
            style={{
              textAlign: "left",
              paddingLeft: "30px",
              fontSize: "30px",
              paddingTop: "90px",
            }}
          >
            <h2>
              {" "}
              <b>
                {" "}
                <span style={{ fontSize: "50px" }}>
                  {" "}
                  • Send money without providing an account number.
                </span>{" "}
              </b>{" "}
            </h2>
            <p>
              There are several ways to send money for free. Create a PayLink
              Username to facilitate transfers to other PayLink Users.
            </p>
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
          <div
            className="sec6-cont"
            style={{
              textAlign: "left",
              paddingLeft: "30px",
              fontSize: "30px",
              paddingTop: "90px",
            }}
          >
            <h2>
              {" "}
              <b>
                {" "}
                <span style={{ fontSize: "50px" }}>
                  {" "}
                  • Live life on your own terms!
                </span>{" "}
              </b>{" "}
            </h2>
            <p>
              Add money to your PayLink and transfer to other bank accounts for
              free.
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
}

export default Spend