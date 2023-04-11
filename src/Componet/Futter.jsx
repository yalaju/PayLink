import React from 'react'
import img6 from "../Images/social.png"
import "../Style/Hsec7.css"

const Futter = () => {
  return (
      <div style={{ margin:'0 auto', width:'80%', justifyContent:'center'}}>
      <div className="futter">
        {/* <div className="fut1">
          <p>
            <b>products</b>
          </p>
          <p>Alt</p>
          <p>Fiat</p>
          <p>Refill</p>
          <p>P2P</p>
        </div> */}

        <div className="fut2">
          <p>
            <b>Learn</b>
          </p>
          <p>Blog</p>
          <p>Help Center</p>
        </div>

        <div className="fut3">
          <p>
            <b>Contact</b>
          </p>
          <p>hello@paylink.com</p>
          <p>support@paylink.com</p>
          <img src={img6} alt="" />
        </div>

        <div className="fut4">
          <p>
            <b>Company</b>
          </p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Rates</p>
          <p>Mobile</p>
        </div>

        <div className="fut5">
          <p>
            <b>Legal</b>
          </p>
          <p>Privacy Policy</p>
          <p>Anti-Money Laundering</p>
          <p>Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
}

export default Futter