"use client";

import RoleSection from "@/components/RoleSection";
import Showcase from "@/components/Showcase";
import Skills from "@/components/Skills";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import GoalSection from "@/components/GoalSection";
import Crossroad from "@/components/Crossroad";
import Learning from "@/components/Learning";

export default function Home() {
  const content = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.matchMedia().add("(min-width: 800px)", () => {
        
        // Pulsar Object
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".roleSection",
              start: "top center",
              end: "35% center",
              scrub: true,
            },
          })
          .to(".object", {
            x: -650,
          });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".goalSection",
              start: "top center",
              end: "35% center",
              scrub: true,
            },
          })
          .to(".object", {
            x: 0,
          });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".skills",
              start: "top center",
              end: "50% center",
              scrub: true,
            },
          })
          .to(".object", {
            x: -300,
          });

        // Role Part
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".roleSection",
              start: "top center",
              end: "35% center",
              scrub: true,
            },
          })
          .to(".rolePart", {
            x: 250,
          });

        // Goal Part
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".goalSection",
              start: "top center",
              end: "center center",
              scrub: true,
            },
          })
          .to(".goalPart", {
            x: -250,
          });
      });
    });
    return () => context.revert();
  }, [content]);

  return (
    <div
      className="relative"
       ref={content}
    >
      <Showcase />
      <RoleSection />
      <GoalSection />
      <Skills />
      <Learning />
      <Crossroad />
    </div>
  );
}
