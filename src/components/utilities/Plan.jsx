import React from "react";
import img from "../../assests/plan.svg";

const Plan = () => {
  return (
    <>
      <div className="bg-[#EBFBFF] flex flex-col justify-center items-center">
        <div className="md:text-[44px] text-[26px] font-bold text-center pt-[49px]">
          <h1 className="text-[#000C51] mb-[-10px]">
            The Stages of <span className="text-[#8873EF]">Agile Mobile Application</span>
          </h1>
          <h1>Development Life Cycle</h1>
        </div>
        <img src={img} alt="img/svg" />
        <div>
          <p className="text-[#52545A] leading-[38px] text-[24px] text-start w-[90%] m-auto">
            One software life cycle is not enough to create a complete product,
            but each iteration shows part of the software functionality that can
            be tested and/or changed. After each cycle, the software development
            team summarizes each and everything and may receive new project
            requirements, then some adjustments can easily be made to the
            software development plan.
          </p>
        </div>
      </div>
    </>
  );
};

export default Plan;
