const GoalSection = () => {
  return (
    <div className="goalSection h-screen relative">
      <div className="flex justify-center items-center h-full">
        <div className="goalPart container w-[340px] md:w-[650px]">
          <div className="front min-h-[520px] md:min-h-[320px]">
            <div className="inner">
              <h1 className="text-2xl md:text-4xl font-bold">
                What Is My Goal?
              </h1>
            </div>
          </div>
          <div className="back min-h-[520px] md:min-h-[320px]">
            <div className="inner">
              <div className="text-[18px] leading-[35px] md:leading-[45px]">
                <p>
                  To get you as a client satisfied with the end result by:
                  <br />
                  - Making sure the website represents the idea you want to
                  deliver.
                  <br />
                  - Writing clean code for easier futuar maintenance and update.
                  <br />
                  - Having your project delivered on time.
                  <br />- providing support for short period after project being
                  fully delivered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalSection;
