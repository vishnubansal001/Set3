import React,{useState,useEffect} from "react";
import tick from "../../assests/tick.svg";
import img from "../../assests/side-dot.svg";
import img2 from "../../assests/side-dot2.svg";

const Methodology = () => {
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
      <div className="pt-[100px] mt-[50px] mb-[100px] pb-[20px] bg-[#bdb0fa]">
        {responsive ? (
          <div className="container">
            <div className="text-center flex justify-center items-center">
              <h1 className="text-white text-[44px] font-bold">
                Principles of {"  "}
                <span className="text-[#8873EF]">
                  Agile Development
                  <br></br>
                </span>
                Methodology
              </h1>
            </div>
            <div className="flex flex-wrap mt-5">
              <div className="lg:w-full pr-4 pl-4 md:w-full">
                <div className="flex">
                  <div className="max-w-[660px] bg-white rounded-[15px] shadow-[0_10px_20px_#dde2ff80] p-[40px_20px_30px] min-h-0 h-auto mb-[40px]">
                    <div className="flex">
                      <div className="w-[90%]">
                        <h1 className="font-semibold text-[22px] leading-[30px] text-[#000c51] flex items-center">
                          <img src={tick} alt="" className="mr-3" />
                          {"  "}Customer <br /> Oriented
                        </h1>
                      </div>
                      <div className="w-[9%]">
                        <h1 className="text-[94px] mt-[-40px] text-[#3d5afe] opacity-[0.1]">
                          1
                        </h1>
                      </div>
                    </div>
                    <p className="text-[#828fad] p-[20px_0] mt-[-30px] text-[18px] leading-[34px]">
                      Agile software development solutions focus on customer
                      satisfaction by early and continuous delivery of valuable
                      software.
                    </p>
                  </div>
                  <div className="md:w-[50%] md:mt-[180px] w-[30%] mt-[80px]">
                    <img src={img} alt="" />
                  </div>
                </div>
                <div className="flex">
                  <div className="md:w-[50%] md:mt-[180px] w-[30%] mt-[80px]">
                    <img src={img2} alt="" className="float-right" />
                  </div>
                  <div className="max-w-[660px] bg-white rounded-[15px] shadow-[0_10px_20px_#dde2ff80] p-[40px_20px_30px] min-h-0 h-auto mb-[40px]">
                    <div className="flex">
                      <div className="w-[90%]">
                        <h1 className="font-semibold text-[22px] leading-[30px] text-[#000c51] flex items-center">
                          <img src={tick} alt="" className="mr-3" />
                          {"  "}Working <br /> Software
                        </h1>
                      </div>
                      <div className="w-[9%]">
                        <h1 className="text-[94px] mt-[-40px] text-[#3d5afe] opacity-[0.1]">
                          2
                        </h1>
                      </div>
                    </div>
                    <p className="text-[#828fad] p-[20px_0] mt-[-30px] text-[18px] leading-[34px]">
                      The aim is to deliver software frequently by keeping a
                      shorter timescale in mind. The duration to deliver working
                      software may vary from a couple of weeks to a couple of
                      months.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="max-w-[660px] bg-white rounded-[15px] shadow-[0_10px_20px_#dde2ff80] p-[40px_20px_30px] min-h-0 h-auto mb-[40px]">
                    <div className="flex">
                      <div className="w-[90%]">
                        <h1 className="font-semibold text-[22px] leading-[30px] text-[#000c51] flex items-center">
                          <img src={tick} alt="" className="mr-3" />
                          {"  "}Responding <br /> to Change
                        </h1>
                      </div>
                      <div className="w-[9%]">
                        <h1 className="text-[94px] mt-[-40px] text-[#3d5afe] opacity-[0.1]">
                          3
                        </h1>
                      </div>
                    </div>
                    <p className="text-[#828fad] p-[20px_0] mt-[-30px] text-[18px] leading-[34px]">
                      Agile development processes bring change as per the
                      customer’s competitive advantage by changing the
                      requirements even after the deployment.
                    </p>
                  </div>
                  <div className="md:w-[50%] md:mt-[180px] w-[30%] mt-[80px]">
                    <img src={img} alt="" />
                  </div>
                </div>
                <div className="flex">
                  <div className="md:w-[50%] md:mt-[180px] w-[30%] mt-[80px]">
                    <img src={img2} alt="" className="float-right" />
                  </div>
                  <div className="max-w-[660px] bg-white rounded-[15px] shadow-[0_10px_20px_#dde2ff80] p-[40px_20px_30px] min-h-0 h-auto mb-[40px]">
                    <div className="flex">
                      <div className="w-[90%]">
                        <h1 className="font-semibold text-[22px] leading-[30px] text-[#000c51] flex items-center">
                          <img src={tick} alt="" className="mr-3" />
                          {"  "}Customer <br /> Colaboration
                        </h1>
                      </div>
                      <div className="w-[9%]">
                        <h1 className="text-[94px] mt-[-40px] text-[#3d5afe] opacity-[0.1]">
                          4
                        </h1>
                      </div>
                    </div>
                    <p className="text-[#828fad] p-[20px_0] mt-[-30px] text-[18px] leading-[34px]">
                      The team changes its behavior regularly as per the market
                      requirements reflecting how to make the products more
                      effective. Excellent design and technical methodologies to
                      improve agility by continuous attention.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="max-w-[660px] bg-white rounded-[15px] shadow-[0_10px_20px_#dde2ff80] p-[40px_20px_30px] min-h-0 h-auto mb-[40px]">
                    <div className="flex">
                      <div className="w-[90%]">
                        <h1 className="font-semibold text-[22px] leading-[30px] text-[#000c51] flex items-center">
                          <img src={tick} alt="" className="mr-3" />
                          {"  "}Comprehensive <br /> Documentation
                        </h1>
                      </div>
                      <div className="w-[9%]">
                        <h1 className="text-[94px] mt-[-40px] text-[#3d5afe] opacity-[0.1]">
                          5
                        </h1>
                      </div>
                    </div>
                    <p className="text-[#828fad] p-[20px_0] mt-[-30px] text-[18px] leading-[34px]">
                      Agile development does not eliminate documentation, but it
                      gives developers all the knowledge of exactly what the
                      business needs. Agile documents help software developers
                      in building a new function.
                    </p>
                  </div>
                  <div className="md:w-[50%] md:mt-[180px] w-[30%] mt-[80px]"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="text-center flex justify-center items-center">
              <h1 className="text-white text-[44px] font-bold">
                Principles of {"  "}
                <span className="text-[#8873EF]">
                  Agile Development
                  <br></br>
                </span>
                Methodology
              </h1>
            </div>
            <div className="flex flex-wrap mt-5">
              <div className="lg:w-full pr-4 pl-4 md:w-full">
                <div className="flex">
                  <div className="max-w-[660px] bg-white rounded-[15px] shadow-[0_10px_20px_#dde2ff80] p-[40px_20px_30px] min-h-0 h-auto mb-[40px]">
                    <div className="flex">
                      <div className="w-[90%]">
                        <h1 className="font-semibold text-[22px] leading-[30px] text-[#000c51] flex items-center">
                          <img src={tick} alt="" className="mr-3" />
                          {"  "}Customer <br /> Oriented
                        </h1>
                      </div>
                      <div className="w-[9%]">
                        <h1 className="text-[94px] mt-[-40px] text-[#3d5afe] opacity-[0.1]">
                          1
                        </h1>
                      </div>
                    </div>
                    <p className="text-[#828fad] p-[20px_0] mt-[-30px] text-[18px] leading-[34px]">
                      Agile software development solutions focus on customer
                      satisfaction by early and continuous delivery of valuable
                      software.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="max-w-[660px] bg-white rounded-[15px] shadow-[0_10px_20px_#dde2ff80] p-[40px_20px_30px] min-h-0 h-auto mb-[40px]">
                    <div className="flex">
                      <div className="w-[90%]">
                        <h1 className="font-semibold text-[22px] leading-[30px] text-[#000c51] flex items-center">
                          <img src={tick} alt="" className="mr-3" />
                          {"  "}Working <br /> Software
                        </h1>
                      </div>
                      <div className="w-[9%]">
                        <h1 className="text-[94px] mt-[-40px] text-[#3d5afe] opacity-[0.1]">
                          2
                        </h1>
                      </div>
                    </div>
                    <p className="text-[#828fad] p-[20px_0] mt-[-30px] text-[18px] leading-[34px]">
                      The aim is to deliver software frequently by keeping a
                      shorter timescale in mind. The duration to deliver working
                      software may vary from a couple of weeks to a couple of
                      months.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="max-w-[660px] bg-white rounded-[15px] shadow-[0_10px_20px_#dde2ff80] p-[40px_20px_30px] min-h-0 h-auto mb-[40px]">
                    <div className="flex">
                      <div className="w-[90%]">
                        <h1 className="font-semibold text-[22px] leading-[30px] text-[#000c51] flex items-center">
                          <img src={tick} alt="" className="mr-3" />
                          {"  "}Responding <br /> to Change
                        </h1>
                      </div>
                      <div className="w-[9%]">
                        <h1 className="text-[94px] mt-[-40px] text-[#3d5afe] opacity-[0.1]">
                          3
                        </h1>
                      </div>
                    </div>
                    <p className="text-[#828fad] p-[20px_0] mt-[-30px] text-[18px] leading-[34px]">
                      Agile development processes bring change as per the
                      customer’s competitive advantage by changing the
                      requirements even after the deployment.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="max-w-[660px] bg-white rounded-[15px] shadow-[0_10px_20px_#dde2ff80] p-[40px_20px_30px] min-h-0 h-auto mb-[40px]">
                    <div className="flex">
                      <div className="w-[90%]">
                        <h1 className="font-semibold text-[22px] leading-[30px] text-[#000c51] flex items-center">
                          <img src={tick} alt="" className="mr-3" />
                          {"  "}Customer <br /> Colaboration
                        </h1>
                      </div>
                      <div className="w-[9%]">
                        <h1 className="text-[94px] mt-[-40px] text-[#3d5afe] opacity-[0.1]">
                          4
                        </h1>
                      </div>
                    </div>
                    <p className="text-[#828fad] p-[20px_0] mt-[-30px] text-[18px] leading-[34px]">
                      The team changes its behavior regularly as per the market
                      requirements reflecting how to make the products more
                      effective. Excellent design and technical methodologies to
                      improve agility by continuous attention.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="max-w-[660px] bg-white rounded-[15px] shadow-[0_10px_20px_#dde2ff80] p-[40px_20px_30px] min-h-0 h-auto mb-[40px]">
                    <div className="flex">
                      <div className="w-[90%]">
                        <h1 className="font-semibold text-[22px] leading-[30px] text-[#000c51] flex items-center">
                          <img src={tick} alt="" className="mr-3" />
                          {"  "}Comprehensive <br /> Documentation
                        </h1>
                      </div>
                      <div className="w-[9%]">
                        <h1 className="text-[94px] mt-[-40px] text-[#3d5afe] opacity-[0.1]">
                          5
                        </h1>
                      </div>
                    </div>
                    <p className="text-[#828fad] p-[20px_0] mt-[-30px] text-[18px] leading-[34px]">
                      Agile development does not eliminate documentation, but it
                      gives developers all the knowledge of exactly what the
                      business needs. Agile documents help software developers
                      in building a new function.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Methodology;
