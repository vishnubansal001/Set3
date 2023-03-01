import React from "react";
import img from "../../assests/screen.svg";

const About = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-8 mb-5">
        <div className="flex justify-center items-center md:mb-2 mb-5">
          <img src={img} alt="img/svg" />
        </div>
        <div className="">
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-[#000C51] font-bold md:text-[44px] text-[26px] mb-5 md:ml-1 sm:ml-[-20px] text-center mt-4 lg:mt-1">
              What is <span className="text-[#8873EF]">Agile Development?</span>
            </h1>
            <p className="w-[85%] text-[20px] text-[#828FAD] leading-[34px]">
              Agile development is a popular software development technique that
              helps self-organizing and cross-functional teams to work as per
              customer requirements. The platform focuses on the requirements of
              customers and end-users to provide the best possible solutions. It
              offers rapid and flexible growth of the business by advocating
              adaptive planning, evolutionary development, continual
              improvement, and many more. An agile software development company
              like us always relies on this technique to nurture productivity
              and deliver impressive results on time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
