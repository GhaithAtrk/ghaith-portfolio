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
        "one two three four five six seven eight nine ten eleven twelve",
    },
    {
      siteName: "Almashoorah",
      siteImage: "/projects/almashoorah.png",
      siteLink: "https://almashoorah.com",
      description:
        "one two three four five six seven eight nine ten eleven twelve",
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
        "one two three four five six seven eight nine ten eleven twelve",
    },
    {
      siteName: "Bread Bakery",
      siteImage: "/projects/bread-bakery.png",
      siteLink: "https://bread-bakery.vercel.app",
      description:
        "one two three four five six seven eight nine ten eleven twelve",
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-[1240px] relative mx-auto ">
        <div className="mb-20">
          <h2 className="text-xl mx-4 md:text-4xl mt-4 mb-10">
            Projects i have participated in..
          </h2>
          <div className="flex flex-col md:flex-row justify-around ">
            {participated.map((data) => (
              <Link target={"_blank"} href={data.siteLink}>
                <div className="border-8 max-w-[400px] rounded-md border-[#C4873C] bg-[#fdc158] p-2 mb-4 cursor-pointer flex flex-col items-center hover:scale-105 hover:translate-y-[-10px] transition duration-300 ease-in-out">
                  <div className="bg-white ">
                    <Image
                      src={data.siteImage}
                      width={600}
                      height={250}
                      alt=""
                    />
                  </div>
                  <div className="text-xl font-bold my-2 bg-white rounded-sm w-full p-2">
                    {data.siteName}
                  </div>
                  {/* <div className="text-xl bg-white rounded-sm w-full p-2">
                    {data.description}
                  </div> */}
                </div>
              </Link>
            ))}
          </div>
          <div className="my-20">
            <h2 className="text-xl mx-4 md:text-4xl mt-4 mb-10">
              Projects i did for practice in..
            </h2>
            <div className="flex flex-col md:flex-row justify-around ">
              {practiced.map((data) => (
                <Link
                  target={data.siteName == "Popsicle" ? "" : "_blank"}
                  href={data.siteLink}
                >
                  <div className="border-8 max-w-[400px] rounded-md border-[#C4873C] bg-[#fdc158] p-2 mb-4 cursor-pointer flex flex-col items-center hover:scale-105 hover:translate-y-[-10px] transition duration-300 ease-in-out">
                    <div className="bg-white ">
                      <Image
                        src={data.siteImage}
                        width={600}
                        height={250}
                        alt=""
                      />
                    </div>
                    <div className="text-xl font-bold my-2 bg-white rounded-sm w-full p-2">
                      {data.siteName}
                    </div>
                    {/* <div className="text-xl bg-white rounded-sm w-full p-2">
                      {data.description}
                    </div> */}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
