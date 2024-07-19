import React from "react";

function Cube() {
  return (
    <div className="cube">
      <div>
        <div className="top"></div>
        <span style={{ "--i": 0 }}></span>
        <span style={{ "--i": 1 }}></span>
        <span style={{ "--i": 2 }}></span>
        <span style={{ "--i": 3 }}></span>
      </div>
    </div>
  );
}

export default Cube;
