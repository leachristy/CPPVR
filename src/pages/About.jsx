import React from "react";
import "../index.css";

import { Leadership } from "../components/about/leadership";
import { Mission } from "../components/about/mission";
import { Research } from "../components/about/research";
import { Timeline } from "../components/about/timeline";

export const About = () => {
  return (
    <>
    <div className="p-2 text-center">
      
      {/* About Header */}
       <p className="font-rubik display-2 fw-bold ">About the Lab</p>
       <p className="font-work pb-3" style={{ fontSize: "1.5rem", lineHeight: "1.2", letterSpacing: "0.05em" }}>Pioneering VR/AR education since 2017</p>

       <hr className="border-t-2 border-gray-300 my-6 w-1/2 mx-auto" />
    
    </div>

    <Mission />
    <hr className="border-t-2 border-gray-300 my-6 w-1/2 mx-auto" />
    <Timeline />
    <hr className="border-t-2 border-gray-300 my-6 w-1/2 mx-auto" />
    <Leadership />
    <hr className="border-t-2 border-gray-300 my-6 w-1/2 mx-auto" />
    <Research />

    </>
  );
};
