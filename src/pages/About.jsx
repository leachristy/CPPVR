import React from "react";
import "../index.css";
import { Card } from "react-bootstrap";

import drhusain from "../assets/dr.husain.jpeg";
import blankprofile from "../assets/blankprofile.jpg"
import VRLab from "../assets/VR Lab.png";
import VRHeadset from "../assets/vive.jpg";
import logicgates from "../assets/logic_gates.png";

export const About = () => {
  return (
    <>
    <div className="p-2 text-center">
      
      {/* About Header */}
       <p className="font-rubik display-2 fw-bold ">About the Lab</p>
       <p className="font-work pb-3" style={{ fontSize: "1.5rem", lineHeight: "1.2", letterSpacing: "0.05em" }}>Pioneering VR/AR education since 2017</p>

       <hr className="border-t-2 border-gray-300 my-6 w-1/2 mx-auto" />

       {/* Our Mission Section */}
       <p className="font-rubik db-textcolor display-5 fw-bold pt-3">
        Our Mission
      </p>
       <p className="px-4 py-8 responsive-paragraph db-textcolor m-5" >
       In computer science, imagine if you could literally grab the computer code and interact with it in your hand. Imagine how your perception of knowledge would change. The CPP Virtual Reality Lab applies virtual and augmented reality to education to enhance student learning. By immersing students in alternate realities, we allow them to step inside a computer, visualize code execution, and interact with digital concepts in revolutionary ways.
       </p>
       
    </div>

    <hr className="border-t-2 border-gray-300 my-6 w-1/2 mx-auto" />

    {/* Our Journey Section */}
    <p className="font-rubik db-textcolor display-5 fw-bold pt-3 text-center">Our Journey</p>
    <div className="ml-4 sm:ml-8 md:ml-16 lg:ml-24">
      <p className="px-4 py-8 responsive-paragraph db-textcolor m-5" >
       <strong className="db-textcolor">2017</strong> <br />
       Lab Founded
       The CPP Virtual Reality Lab was established to explore applications of VR/AR in computer science education
       </p>

       <p className="px-4 py-8 responsive-paragraph db-textcolor m-5" >
       <strong className="db-textcolor">2018-2020</strong> <br />
       Early Projects
       First generation of VR games and educational experiences developed
       </p>

       <p className="px-4 py-8 responsive-paragraph db-textcolor m-5" >
       <strong className="db-textcolor">2021-2023</strong> <br />
       Expansion
       Lab grows to include training simulators and expanded technology platforms
       </p>

       <p className="px-4 py-8 responsive-paragraph db-textcolor m-5" >
       <strong className="db-textcolor">2024-Present</strong> <br />
       Continued Innovation
       Focus on cutting-edge VR/AR applications in education and training
       </p>
    </div>

    <hr className="border-t-2 border-gray-300 my-6 w-1/2 mx-auto" />

    {/* Lab Leadership Section */}
    <div className="px-4 py-8 pb-3 text-center">
    <p className="font-rubik db-textcolor display-5 fw-bold pt-3">
        Lab Leadership
    </p>
      <div className="flex-wrap-center">
        <Card className="card-custom p-2 pb-4">
          <Card.Img className="p-3 rounded-circle mx-auto" style={{ width: "150px", height: "150px", objectFit: "cover" }} src={drhusain}/> 
          <Card.Title className="fw-bold font-work">Dr. Mohammad Husain</Card.Title>
          <Card.Text className="font-work">
            Director 
            <br />
            Email: mihusain@cpp.edu
          </Card.Text>
        </Card>
        <Card className="card-custom p-2">
          <Card.Img className="p-3 rounded-circle mx-auto" style={{ width: "150px", height: "150px", objectFit: "cover" }} src={blankprofile} /> 
          <Card.Title className="fw-bold font-work">Dr. Nima Davarpanah</Card.Title>
          <Card.Text className="font-work">
            Co-Director 
            <br />
            Email: ndavarpanah@cpp.edu
          </Card.Text>
        </Card>
      </div>
    </div>

    <hr className="border-t-2 border-gray-300 my-6 w-1/2 mx-auto" />

    {/* Lab Leadership Section */}
    <div className="px-4 py-8 text-center ">
    <p className="font-rubik db-textcolor display-5 fw-bold pt-3">
        Research Focus
    </p>
    <div className="flex-wrap-center mb-5">
        <Card className="card-custom p-2 pb-4">
          <Card.Img className="p-3"  src={VRLab}/> 
          <Card.Title className="fw-bold font-work">Educational VR</Card.Title>
          <Card.Text className="font-work">
            Developing immersive learning experiences for computer science concepts
          </Card.Text>
        </Card>
        <Card className="card-custom p-2">
          <Card.Img className="p-3"  src={VRHeadset} /> 
          <Card.Title className="fw-bold font-work">Interactive Games</Card.Title>
          <Card.Text className="font-work">
            Creating engaging VR game experiences with educational value
          </Card.Text>
        </Card>
        <Card className="card-custom p-2">
          <Card.Img className="p-3"  src={logicgates} /> 
          <Card.Title className="fw-bold font-work">Training Simulations</Card.Title>
          <Card.Text className="font-work">
            Building realistic simulation environments fro skill development
          </Card.Text>
        </Card>
      </div>
    </div>


    </>
  );
};
