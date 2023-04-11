import React from 'react'
import "../Style/Hsec2.css"
import logo from "../Images/PayLink Logo.jpg"
import { Link } from 'react-router-dom';

const Hsec2 = () => {
  return (
    <div>
      <div className="Sec2body">
        <div>
          <h3>
            Obtain investment possibilities <br />{" "}
            <span
              style={{
                fontSize: "20px",
              }}
            >
              (Up To 25% Returns)
            </span>
          </h3>
          <h5>
            Mobile investing security and assurance. By making investments in
            thoroughly screened investment options, you may confidently grow
            your money.
          </h5>
        </div>
        <div className="sec2-btn">
          <Link to="/investment" >
            {" "}
            <button>Learn more about investments</button>
          </Link>
        </div>
        {/* <div className='sec5img'> */}
        {/* <img src={logo} alt="" /> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Hsec2