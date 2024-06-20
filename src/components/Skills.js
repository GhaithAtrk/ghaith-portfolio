import Spline from "@splinetool/react-spline/next";

const Skills = () => {
  return (
    <div className="skills relative mx-auto flex h-[460px] min-h-[600px] max-w-[1240px] flex-col justify-center md:h-screen">
      <h2 className="my-4 mb-8 text-center text-4xl font-bold md:text-left">
        What Are My Skills?
      </h2>

      <div className="min-h-[250px]">
        <Spline scene="https://prod.spline.design/St2Z3gyT2msGRBVy/scene.splinecode" />
      </div>
    </div>
  );
};

export default Skills;
