import React from "react";
import {acheivements} from "../constants";
import { faculty } from "../constants";
import background from "../assets/background.jpg";
const About = () => {
  return (
    <div className="relative mt-5 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        {/* <h2 className="text-3xl sm:text-5xl h-6 lg:text-6xl mt-5 lg:mt-10 tracking-wide uppercase font-bold">
          About Us
        </h2> */}
        <span className=" text-yellow-400 font-extrabold rounded-full h-6 text-xl font-large px-2 py-1 uppercase">
          About Us
        </span>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-10 p-10 mx-5 border-transparent rounded-md border border-red-600 ">
        {faculty.map((faculty,index)=>(
          <div key={index} className="w-half">
            {/* <img src={background} alt="faculty" /> */}
            {/* {faculty.image} */}
            <div className="flex flex-row ">
              <img src={background} alt="background" className=" mr-3 size-40 "/>   
              {" "}
              {faculty.text}<br/><br/>
              
              {faculty.description}
            </div>
            
          </div>
        ))}
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-15">
        {acheivements.map((acheivements,index)=> (
          <div key={index} className="w-full sm:1/2 lg:w-1/3" >
            <div className="flex">
              <div className="flex mx-4 h-10 w-10  text-yellow-400 bg-neutral-900 justify-center items-center rounded-full">
                {acheivements.icon}
              </div>
              <div className="mt-1 mb-6 text-xl">
                <p className="text-md p-2 mb-10 mr-5 text-neutral-500 text-justify">
                  {acheivements.description}
                </p>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
