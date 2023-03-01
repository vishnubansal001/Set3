import React from "react";
import img from "../../assests/infinity.svg";

const Combining = () => {
  return (
    <>
      <div className="w-[90%] m-auto">
        <div className="flex justify-center items-center flex-col mt-5">
          <h1 className="font-bold md:text-[44px] mb-[20px] text-[21px] text-center text-[#000C51]">
            How AppStudio Combines{" "}
            <span className="text-[#8873EF]">DevOps and Agile?</span>
          </h1>
          <p className="text-[#828FAD] text-center mb-[30px] leading-[21px]">
            At our agile software development company, our team has expertise in
            application development and deployment. We optimize our product
            development process by implementing DevOps into Agile product
            development.
          </p>
        </div>
        <div className="flex justify-around items-center lg:flex-row flex-col">
          <img src={img} alt="img/svg" className="md:mb-1 mb-5" />
          <p className="text-[20px] leading-[34px] text-[#828FAD] md:pl-[40px] lg:pl-[124px] mb-7">
            Our{" "}
            <span className="text-[#8873EF]">
              mobile app development company
            </span>{" "}
            uses the DevOps framework and Agile approach to have a broader
            understanding of all development aspects. You get DevOps business
            value and the practicality of Agile together from our Agile software
            developers. Our team inherits more of the operational concern within
            the entire lifecycle to simplify our development process. We have
            expertise in integrating DevOps management techniques while handling
            sprints.
          </p>
        </div>
      </div>
    </>
  );
};

export default Combining;
