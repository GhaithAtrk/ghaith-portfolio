"use client";

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Content = () => {
  return (
    <div className="content">
      <div className="section section-1">
        <div className="text">
          <h1 className="quesiton">What is My Role?</h1>
          <div className="answer-card">
            <p>
              Simply , to build the front-end of the website you are aiming to
              have
            </p>
          </div>
        </div>
        <div className="Animation">
          <Player
            autoplay
            loop
            src="https://assets5.lottiefiles.com/packages/lf20_kyu7xb1v.json"
            style={{ height: "400px", width: "450px" }}
          ></Player>
        </div>
      </div>
      <div className="section section-2">
        <div className="Animation">
          <Player
            autoplay
            loop
            src="https://assets3.lottiefiles.com/private_files/lf30_rkjmin40.json"
            style={{ height: "400px", width: "450px" }}
          ></Player>
        </div>
        <div className="text">
          <h1 className="quesiton">What is My Goal?</h1>
          <div className="answer-card">
            <div className="answer">
              <p>
                To get you have the website that satisfies your needs , where
                you can have your ideas presented out to the world the way you
                want them to be
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
