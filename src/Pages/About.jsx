import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      style={{
        textAlign: "center",
        width: "1150px",
        maxwidth: "1800px",
        margin: "0 auto",
        color:'#000099'
      }}
    >
      <h1>About Us</h1>
      <div
        style={{
          fontSize: "30px",
        }}
      >
        <p>
          PayLink offers solutions for managing your finances, increasing your
          savings, and tracking your spending patterns.
        </p>
        <p>
          We are fostering a culture of saving and investing among the
          millennials and the increasing underrepresented middle class in
          Nigeria.
        </p>
        <p>
          So, whatever you are and wherever you are in Nigeria, you are the
          reason we are. We will improve things so that they are easier for
          everyone to use because we are aware of the difficulty involved in
          utilizing a traditional bank.
        </p>
      </div>
      <div
        style={{
          fontSize: "30px",
          // fontFamily: "cursive",
        }}
      >
        <h1>Mission</h1>
        <p>
          To empower everyone with the tools they need to manage and
          expand their finances.
        </p>
      </div>
    </div>
  );
};

export default About;
