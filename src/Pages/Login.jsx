import React from "react";
import "../Style/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="loginbody">
      <div className="loginbody-L1">
        <form className="form">
          <div className="form-text-h1">x
            <h1>
              Welcome back,
              <br /> Maryam
            </h1>
          </div>
          <div className="form-text-p">
            <p>Pay yourself first.</p>
          </div>
          <div className="inputs">
            <input placeholder="username" type="text" /> <br /> <br />
            <input placeholder="password" type="password" />
            <br /> <br />
            <button>LOGIN</button>
          </div>
          <div className="forgetpass">
            <p>
              Not you?{" "}
              <span
                style={{
                  color: "white",
                }}
              >
                Switch account
              </span>
            </p>{" "}
            <Link
              to="/forget"
              style={{
                  color: "white",
                  textDecoration: 'none',
              }}
            >
              {" "}
              Forgot Password ?
            </Link>
          </div>              
        </form>
      </div>
    </div>
  );
};

export default Login;
