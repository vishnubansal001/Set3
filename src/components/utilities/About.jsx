import React from "react";
import img from "../../assests/screen.svg";

const About = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-8">
        <div className="flex justify-center items-center">
          <img src={img} alt="img/svg" />
        </div>
        <div className="">
          <div>
            <h1 className="text-black font-bold md:text-4xl text-2xl mb-5">
              What is <span className="text-purple-400">Agile Development?</span>
            </h1>
            <p className="flex items-center justify-center w-[80%] text-lg text-slate-500">
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
