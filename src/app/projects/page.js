"use client";

import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const participated = [
    {
      siteName: "Deeplogi",
      siteImage: "/projects/deeplogi.png",
      siteLink: "https://deeplogi.com",
      description:
        "a project focus on connecting shipping companies and clients and allow them to manage shipping orders for their companies, stores, merchants & Ecommerce shops.",
      skills: [
        "/skills/nextjs.png",
        "/skills/graphql.png",
        "/skills/material-ui.png",
      ],
    },
    {
      siteName: "Almashoorah",
      siteImage: "/projects/almashoorah.png",
      siteLink: "https://almashoorah.com",
      description:
        "a psychological, family, educational and social counseling center, providing their services for directed to husbands, wives, parents, and children in the stages of childhood, adolescence, youth, and maturity",
      skills: [
        "/skills/nextjs.png",
        "/skills/graphql.png",
        "/skills/material-ui.png",
      ],
    },
  ];

  const practiced = [
    // {
    //   siteName: "Popsicle",
    //   siteImage: "/projects/popsicle.png",
    //   siteLink: "#",
    //   description:
    //     "one two three four five six seven eight nine ten eleven twelve",
    // },
    {
      siteName: "Gravity",
      siteImage: "/projects/gravity.png",
      siteLink: "https://gravity-space.vercel.app",
      description:
        "A project i have practiced CMS with to get the concept of how things work with this 'CMS' tech",
      skills: ["/skills/nextjs.png", "/skills/prismic.png"],
    },
    {
      siteName: "Bread Bakery",
      siteImage: "/projects/bread-bakery.png",
      siteLink: "https://bread-bakery.vercel.app",
      description:
        "A project i have practiced using Aceternity with to get to see how components can be implemmented on an actual project",
      skills: ["/skills/nextjs.png", "/skills/aceternity.png"],
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      <div className="relative mx-auto max-w-[1240px]">
        <div className="mb-20">
          <h2 className="mx-4 mb-10 mt-4 text-xl md:text-5xl">
            Projects i have participated in..
          </h2>
          <div>
            {participated.map((data, index) => (
              <div className="project-container" key={index}>
                <div className="project-row my-20 rounded-full md:w-[600px]">
                  <Link
                    target={"_blank"}
                    href={data.siteLink}
                    className="w-fit"
                  >
                    <div className="project relative min-w-[250px] cursor-pointer overflow-hidden rounded-full border-8 border-[#C4873C] bg-[#fdc158] md:w-[600px]">
                      <Image
                        src={data.siteImage}
                        width={600}
                        height={250}
                        alt=""
                        className="relative left-0 top-0 z-10 rounded-full"
                      />
                      <div className="info-layer z-1 absolute left-0 top-0 flex h-full w-full items-center justify-end rounded-full bg-white/85 p-2 text-end md:w-[600px]">
                        <div className="max-w-[350px] px-2 text-center">
                          <div className="my-2 text-2xl font-bold">{data.siteName}</div>
                          <div className="text-md my-2 text-balance">
                            {data.description}
                          </div>
                          <div className="my-2 flex items-center justify-center gap-2">
                            skills:
                            {data.skills?.map((skill, index) => (
                              <Image
                                key={index}
                                src={skill}
                                alt=""
                                width={25}
                                height={20}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="my-20">
            <h2 className="mx-4 mb-10 mt-4 text-xl md:text-5xl">
              Projects i did for practice..
            </h2>
            <div>
              {practiced.map((data, index) => (
                <div className="project-container flex justify-start" key={index}>
                  <div className="project-row my-20 rounded-full md:w-[600px]">
                    <Link
                      target={"_blank"}
                      href={data.siteLink}
                      className="w-fit"
                    >
                      <div className="project relative min-w-[250px] cursor-pointer overflow-hidden rounded-full border-8 border-[#C4873C] bg-[#fdc158] md:w-[600px]">
                        <Image
                          src={data.siteImage}
                          width={600}
                          height={250}
                          alt=""
                          className="relative left-0 top-0 z-10 rounded-full"
                        />
                        <div className="info-layer z-1 absolute left-0 top-0 flex h-full w-full items-center justify-end rounded-full bg-white/85 p-2 text-end md:w-[600px]">
                          <div className="max-w-[350px] px-2 text-center">
                            <div className="my-2 text-2xl font-bold">{data.siteName}</div>
                            <div className="text-md my-2 text-balance">
                              {data.description}
                            </div>
                            <div className="my-2 flex items-center justify-center gap-2">
                              skills:
                              {data.skills?.map((skill, index) => (
                                <Image
                                  key={index}
                                  src={skill}
                                  alt=""
                                  width={25}
                                  height={20}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
