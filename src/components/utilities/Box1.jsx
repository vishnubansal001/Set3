import React from "react";

const Box1 = ({ img, title, text }) => {
  return (
    <>
      <div className="bg-white rounded-3xl w-[540px] mb-6 px-4 py-7">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-[30px] ml-5 font-semibold w-[50%] text-[#000c51]">
            {title}
          </h1>
          <img src={img} alt="img/svg" className="mr-4" />
        </div>
        <p className="text-[18px] leading-[34px] text-[#828FAD]">{text}</p>
      </div>
    </>
  );
};

export default Box1;
