import React, { useEffect, useState } from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import dilevery from "../../assests/dilevery.svg";
import arrow1 from "../../assests/arrow1.svg";
import sprints from "../../assests/sprints.svg";
import arrow2 from "../../assests/arrow2.svg";
import improvement from "../../assests/improvement.svg";
import meetings from "../../assests/meetings.svg";
import strongTeam from "../../assests/strongTeam.svg";
import risks from "../../assests/risks.svg";
import Box1 from "./Box1";

const Business = () => {
  const [responsive, setResponsive] = useState(window.innerWidth > 768);
  useEffect(() => {
    const handleResize = () => {
      setResponsive(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-[#e3fbff]">
        <div className="text-center mt-[50px]">
          <h1 className="text-[40px] font-bold leading-[58px] text-[#000c51]">
            Why Choose <span className="text-[#8873EF]">Agile Development</span>
          </h1>
          <h1 className="text-[40px] font-bold text-[#000c51]">
            for Your Business?
          </h1>
        </div>
        {responsive ? (
          <div className="container">
            <div className="flex flex-wrap mt-5">
              <div className="lg:w-1/2 pr-4 pl-4">
                <div className="bg-[#fff] rounded-[20px] shadow-lg p-[20px] mb-[50px] min-h-[250px]">
                  <h3 className="text-[30px] font-bold text-[#000c51]">
                    Faster & <br /> High-Quality Delivery{" "}
                    <img
                      src={dilevery}
                      alt="img/delivery"
                      className=" float-right relative top-[-40px]"
                    />
                  </h3>
                  <p className="text-[18px] leading-[34px] pr-[10px] text-[#828fad]">
                    The Agile development team focuses on high-quality
                    development and testing. Projects are broken down into
                    manageable units and rigorously tested to identify and get
                    rid of the bugs easily.
                  </p>
                </div>
                <img
                  src={arrow2}
                  alt="img/arrow2"
                  className="mt-[130px] ml-[35%]"
                />
                <div className="bg-[#fff] rounded-[20px] shadow-lg p-[20px] mb-[50px] min-h-[250px]">
                  <h3 className="text-[30px] font-bold text-[#000c51]">
                    sprints
                    <img
                      src={sprints}
                      alt="img/delivery"
                      className=" float-right relative top-[-40px]"
                    />
                  </h3>
                  <p className="text-[18px] leading-[34px] pr-[10px] text-[#828fad]">
                    It is an iterative development cycle that works on the
                    regular breakdown of requirements into small and digestible
                    chunks, thus ensuring a smooth development process and fewer
                    errors.
                  </p>
                </div>
                <img
                  src={arrow2}
                  alt="img/arrow2"
                  className="mt-[150px] ml-[35%]"
                />
                <div className="bg-[#fff] rounded-[20px] shadow-lg p-[20px] mb-[50px] min-h-[250px]">
                  <h3 className="text-[30px] font-bold text-[#000c51]">
                    Faster & <br /> High-Quality Delivery{" "}
                    <img
                      src={dilevery}
                      alt="img/delivery"
                      className=" float-right relative top-[-40px]"
                    />
                  </h3>
                  <p className="text-[18px] leading-[34px] pr-[10px] text-[#828fad]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam, voluptas velit odit facilis error excepturi. Non
                    similique temporibus qui, voluptate dolor dolores?
                  </p>
                </div>
              </div>
              <div className="mt-[100px] lg:w-1/2 pr-4 pl-4">
                <img
                  src={arrow1}
                  alt="img/arrow1"
                  className="mt-[0px] ml-[-30px]"
                />
                <div className="bg-[#fff] rounded-[20px] shadow-lg p-[20px] mb-[50px] min-h-[250px] mt-0">
                  <h3 className="text-[30px] font-bold text-[#000c51]">
                    Faster & <br /> High-Quality Delivery{" "}
                    <img
                      src={dilevery}
                      alt="img/delivery"
                      className=" float-right relative top-[-40px]"
                    />
                  </h3>
                  <p className="text-[18px] leading-[34px] pr-[10px] text-[#828fad]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam, voluptas velit odit facilis error excepturi. Non
                    similique temporibus qui, voluptate dolor dolores?
                  </p>
                </div>
                <img
                  src={arrow1}
                  alt="img/arrow1"
                  className="mt-[100px] ml-[-30px]"
                />
                <div className="bg-[#fff] rounded-[20px] shadow-lg p-[20px] mb-[50px] min-h-[250px] mt-0">
                  <h3 className="text-[30px] font-bold text-[#000c51]">
                    Faster & <br /> High-Quality Delivery{" "}
                    <img
                      src={dilevery}
                      alt="img/delivery"
                      className=" float-right relative top-[-40px]"
                    />
                  </h3>
                  <p className="text-[18px] leading-[34px] pr-[10px] text-[#828fad]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam, voluptas velit odit facilis error excepturi. Non
                    similique temporibus qui, voluptate dolor dolores?
                  </p>
                </div>
                <img
                  src={arrow1}
                  alt="img/arrow1"
                  className="mt-[100px] ml-[-30px]"
                />
                <div className="bg-[#fff] rounded-[20px] shadow-lg p-[20px] mb-[50px] min-h-[250px] mt-0">
                  <h3 className="text-[30px] font-bold text-[#000c51]">
                    Faster & <br /> High-Quality Delivery{" "}
                    <img
                      src={dilevery}
                      alt="img/delivery"
                      className=" float-right relative top-[-40px]"
                    />
                  </h3>
                  <p className="text-[18px] leading-[34px] pr-[10px] text-[#828fad]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam, voluptas velit odit facilis error excepturi. Non
                    similique temporibus qui, voluptate dolor dolores?
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="flex flex-wrap mt-5">
              <div className="lg:w-1/2 pr-4 pl-4">
                <div className="bg-[#fff] rounded-[20px] shadow-lg p-[20px] mb-[50px] min-h-[250px]">
                  <h3 className="mb-3 font-bold text-[#000c51]">
                    Faster & <br /> High-Quality Delivery{" "}
                    <img
                      src={dilevery}
                      alt="img/delivery"
                      className=" float-right relative top-[-40px]"
                    />
                  </h3>
                  <p className="leading-[34px] pr-[10px] text-[#828fad]">
                    The Agile development team focuses on high-quality
                    development and testing. Projects are broken down into
                    manageable units and rigorously tested to identify and get
                    rid of the bugs easily.
                  </p>
                </div>

                <div className="bg-[#fff] rounded-[20px] shadow-lg p-[20px] mb-[50px] min-h-[250px]">
                  <h3 className="mb-3 font-bold text-[#000c51]">
                    Sprints
                    <img
                      src={sprints}
                      alt="img/delivery"
                      className=" float-right relative top-[-40px]"
                    />
                  </h3>
                  <p className="leading-[34px] pr-[10px] text-[#828fad]">
                    It is an iterative development cycle that works on the
                    regular breakdown of requirements into small and digestible
                    chunks, thus ensuring a smooth development process and fewer
                    errors.
                  </p>
                </div>

                <div className="bg-[#fff] rounded-[20px] shadow-lg p-[20px] mb-[50px] min-h-[250px]">
                  <h3 className="mb-3 font-bold text-[#000c51]">
                    Faster & <br /> High-Quality Delivery{" "}
                    <img
                      src={dilevery}
                      alt="img/delivery"
                      className=" float-right relative top-[-40px]"
                    />
                  </h3>
                  <p className="leading-[34px] pr-[10px] text-[#828fad]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam, voluptas velit odit facilis error excepturi. Non
                    similique temporibus qui, voluptate dolor dolores?
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 pr-4 pl-4">
                <div className="bg-[#fff] rounded-[20px] shadow-lg p-[20px] mb-[50px] min-h-[250px] mt-0">
                  <h3 className="mb-3 font-bold text-[#000c51]">
                    Faster & <br /> High-Quality Delivery{" "}
                    <img
                      src={dilevery}
                      alt="img/delivery"
                      className=" float-right relative top-[-40px]"
                    />
                  </h3>
                  <p className="leading-[34px] pr-[10px] text-[#828fad]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam, voluptas velit odit facilis error excepturi. Non
                    similique temporibus qui, voluptate dolor dolores?
                  </p>
                </div>
                <div className="bg-[#fff] rounded-[20px] shadow-lg p-[20px] mb-[50px] min-h-[250px] mt-0">
                  <h3 className="mb-3 font-bold text-[#000c51]">
                    Faster & <br /> High-Quality Delivery{" "}
                    <img
                      src={dilevery}
                      alt="img/delivery"
                      className=" float-right relative top-[-40px]"
                    />
                  </h3>
                  <p className="leading-[34px] pr-[10px] text-[#828fad]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam, voluptas velit odit facilis error excepturi. Non
                    similique temporibus qui, voluptate dolor dolores?
                  </p>
                </div>
                <div className="bg-[#fff] rounded-[20px] shadow-lg p-[20px] mb-[50px] min-h-[250px] mt-0">
                  <h3 className="mb-3 font-bold text-[#000c51]">
                    Faster & <br /> High-Quality Delivery{" "}
                    <img
                      src={dilevery}
                      alt="img/delivery"
                      className=" float-right relative top-[-40px]"
                    />
                  </h3>
                  <p className="leading-[34px] pr-[10px] text-[#828fad]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam, voluptas velit odit facilis error excepturi. Non
                    similique temporibus qui, voluptate dolor dolores?
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Business;
