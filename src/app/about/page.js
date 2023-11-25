import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="quote">
        <h1>
          &quot;If you love what you do, you will never work a day in your
          life&quot;
        </h1>
        <p>I truley believe in this qoute</p>
      </div>
      <div className="hobbies-section">
        <div className="section">
          <h2>Personal part</h2>
          <p>My name is Ghaith.</p>
          <p>Developing webites is one of my interests in life.</p>
          <p>As well i enjoy playing chess, soving riddles, indoor climbing and watching movies</p>
          <br />
          <h2>Technical part</h2>
          <p>React (Next.js) is what i use to build my projects.</p>
          <p>MUI, NextUI, Bootstrap and Ant Design as styled frameworks</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: "300px", background: "#90a955" }}>
            <img
              src="/me.jpg"
              alt="me"
              style={{ width: "300px", transform: "rotate(15deg)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
