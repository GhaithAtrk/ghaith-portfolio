import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Spline from "@splinetool/react-spline";

const Showcase = () => {
  const component = useRef(null);

  const renderLetters = (title, key) => {
    return title.split("").map((character, index) =>
      character === " " ? (
        <span key={index} className={`space-${key}`}>
          &nbsp;
        </span>
      ) : (
        <span
          key={index}
          className={`letter letter-${key} inline-block opacity-0 `}
        >
          {character}
        </span>
      )
    );
  };

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".letter",
        { y: 400, opacity: 0, rotate: -10 },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          ease: "elastic.out(1,0.2)",
          transformOrigin: "left top",
          stagger: {
            each: 0.1,
          },
          duration: 0.5,
        }
      );
    });

    return () => context.revert();
  }, [component]);

  return (
    <div className="showcase h-screen grid grid-rows-2 md:grid-cols-3 md:grid-rows-1">
      <div
        className="place-content-center text-4xl text-center col-span-1 md:text-6xl md:col-span-2"
        ref={component}
      >
        <div className="block">{renderLetters("AvoCode", "first-line")}</div>
        <div className="block">
          {renderLetters("Web Development", "second-line")}
        </div>
      </div>
      <div className="place-content-center col-span-1" ref={component}>
        <div
          id="object"
          className="object fixed w-[420px] h-[400px] top-[280px] md:top-[230px] md:right-[230px]"
        >
          <Spline scene="https://draft.spline.design/j93qj-Io-gv7nCHa/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
