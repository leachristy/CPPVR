import React from "react";
import "../../index.css";
import { Card } from "react-bootstrap";

import VRLab from "../../assets/VR Lab.png";
import VRHeadset from "../../assets/vive.jpg";
import logicgates from "../../assets/logic_gates.png";

export const Research = () => {
  return (
    <>

    {/* Research Section */}
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
