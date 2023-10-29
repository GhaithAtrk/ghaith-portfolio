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
              In simple words.. to bring your website to live and advertise your
              ideas/products/services the way you intended.
            </p>
            <p>
              having it visually stunning, user friendly, responsive and
              interactive if needed to get your visitors' and potential clients' attention.
            </p>
            <p>
              Taking care of The style, design, colors, and even content if you were missing on any of them.
            </p>
          </div>
        </div>
        <div className="animation">
          <Player
            autoplay
            loop
            src="https://assets5.lottiefiles.com/packages/lf20_kyu7xb1v.json"
            style={{ height: "400px", width: "450px" }}
            className="animation1"
          ></Player>
        </div>
      </div>
      <div className="section section-2">
        <div className="animation">
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
                To get you as a client satisfied with the end result by:
                <br />
                1- Making sure the website represents the idea you want to deliver.
                <br />
                2- Making sure the website is functioning well just as planned.
                <br />
                3- Making sure the website is functioning well just as planned.
                <br />
                4- Making sure the website is functioning well just as planned.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
