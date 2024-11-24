import React from "react";
import { data } from "../data/data.js";
import { HiArrowNarrowRight } from "react-icons/hi";

const Work = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="card" style={{ width: "20rem" }}>
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="">
                  <h5 className=" px-1 py-1 text-2xl font-bold bg-neutral-500">
                    {item.name}
                  </h5>
                  <p className="">{item.description}</p>
                  <a href={item.link} target="_blank">
                    <button className="text-white group border-2 px-3 py-2 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                      View Work
                      <span className="group-hover:rotate-90 duration-300">
                        <HiArrowNarrowRight className="ml-3 " />
                      </span>
                    </button>
                  </a>
                  <a href={item.github} target="_blank">
                    <button className="text-white group border-2 px-3 py-2 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                      Code on Github
                      <span className="group-hover:rotate-90 duration-300">
                        <HiArrowNarrowRight className="ml-3 " />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
