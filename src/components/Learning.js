import Spline from "@splinetool/react-spline/next";

const Learning = () => {
  return (
    <div className="learning relative mx-auto flex h-screen max-w-[1240px] flex-col justify-center">
      <h2 className="my-4 mb-8 text-center text-4xl font-bold md:text-left">
        What Am I Learning Currently?
      </h2>
      <div className="flex flex-col items-center justify-around md:flex-row">
        <div
          className={`w-[90%] rounded-md border-2 border-black bg-white/85 p-6 leading-loose md:w-[500px]`}
        >
          <h2 className="mb-4 text-center text-4xl">Nest.js</h2>
          <p className="text-center text-xl leading-10">
            On my way to become a full-stack web developer, choosing Nest.js as
            a my backend framework since it is efficient, reliable and scalable
          </p>
        </div>

        <div className="h-[400px] w-[90%] md:h-[500px] md:w-[500px]">
        <Spline scene="https://prod.spline.design/RtNKUIjyI4f0ujvn/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default Learning;
