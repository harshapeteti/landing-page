import React from "react";
import background from "../assets/background.jpg";
const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center align-middle text-center ">
        <div className="flex flex-col items-center mt-6 lg:mt-20 text-center zi-1 p-20">
            <h1 className="text-4xl sm:text-6xl lg:text7xl text-center tracking-wide font-semibold text-yellow-400">
                Information and Technology for Agriculture Development
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-200 max-w-4xl">
                The center investigates how information technologies can improve
                services related to agriculture. We are building IT-based scalable
                systems to deliver personalized, location-specific, actionable
                agricultural information to poor and marginal farmers.
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className="bg-orange-600 py-3 px-4 mx-3 rounded-md">
                    Know More 
                </a>
                <a href="#" className="py-3 mx-3 px-3 rounded-md border">
                    Projects
                </a>
            </div>
            <div className="flex flex-row mt-10 justify-center ">
                <img src={background} alt="background" className="mx-2 "/>   
            </div>
            {/* <div className="flex  mt-10 justify-center ">
                <img src={background} alt="background" className="mx-2 my-4 "/>   
            </div> */}
            {/* <div className="flex justify-center  mt-10 w-50 h-50">
                <img src={background} alt="background" className=" mx-2 my-4"/>   
            </div> */}
        </div>
        
       
    </div>
    
  );
};
export default HeroSection;
