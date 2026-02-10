import React, { useState } from "react";
import { Projects_2425 } from "../components/projects/projects_2425";
import { Projects_2223 } from "../components/projects/projects_2223";
import { Projects_1819 } from "../components/projects/projects_1819";


export const Projects = () => {
  return (
    <>
     <div className="text-center p-2 mb-5">
        <p className="font-rubik display-2 fw-bold">Our Projects</p>
        <p className="font-work pb-3" style={{ fontSize: "1.5rem", lineHeight: "1.2", letterSpacing: "0.05em" }}>Exploring immersive learning experiences from 2017 to present</p>
        
        <hr className="border-t-2 border-gray-300 my-6 w-1/2 mx-auto" />

        <Projects_2425 />
        <hr className="border-t-2 border-gray-300 my-6 w-1/2 mx-auto" />
        <Projects_2223 />
        <hr className="border-t-2 border-gray-300 my-6 w-1/2 mx-auto" />
        <Projects_1819 />
      </div>
    </>
  )
}
