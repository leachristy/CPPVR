import React from "react";
import "../index.css";
import { LabDirectors } from "../components/people/labdirectors";
import { CurrentLabAssistants } from "../components/people/currentlabassistants"
import { LabAlumni } from "../components/people/labalumni";
import { FormerLeader } from "../components/people/formerleader";



export const People = () => {
  return (
    <>
      <div className="text-center p-2 ">
        <p className="font-rubik display-2 fw-bold">Our Team</p>
        <p className="font-work pb-3" style={{ fontSize: "1.5rem", lineHeight: "1.2", letterSpacing: "0.05em" }}>The talented people behind our VR innovations</p>    
        <hr className="border-t-2 border-gray-300 my-6 w-1/2 mx-auto" />
      </div>
      <div>
        <LabDirectors />
        <hr className="border-t-2 border-gray-300 my-6 w-1/2 mx-auto" />
        <CurrentLabAssistants />
        <hr className="border-t-2 border-gray-300 my-6 w-1/2 mx-auto" />
        <LabAlumni />
        <hr className="border-t-2 border-gray-300 my-6 w-1/2 mx-auto" />
        <FormerLeader />
      </div>
    </>
  )
}
