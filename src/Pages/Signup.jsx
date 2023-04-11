import React from 'react'
import "../Style/Signup.css"
import { Link } from "react-router-dom";


const Signup = () => {
  return (
    <div className="signupbody">
      <div className="signup-loginbody-L1">
        <form className="form">
          <div className="signup-form-text-h1">
            <h1>Create a Secure Account</h1>
          </div>
          <div className="signup-form-text-p">
            <p>Welcom to the future of Saving & investment</p>
          </div>
          <div className="signup-inputs">
            <input placeholder="Name" type="text" /> <br /> <br />
            <input placeholder="Valid Email" type="email" />
            <br /> <br />
            <input placeholder="Phone Number" type="number" />
            <br /> <br />
            <input placeholder="Create a Password" type="password" />
            <br /> <br />
            <input placeholder="Confirm Password" type="password" />
            <br /> <br />
            <button>Create a Free Account</button>
          </div>
          <div className="signup-forgetpass">
            {/* <p>
              Not you?{" "}
              <span
                style={{
                  color: "white",
                }}
              >
                Switch account
              </span>
            </p>{" "} */}
            <Link
              to="/login"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              {" "}
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup