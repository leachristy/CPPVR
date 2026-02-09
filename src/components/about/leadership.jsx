import React from "react";
import "../../index.css";
import { Card } from "react-bootstrap";

import drhusain from "../../assets/dr.husain.jpeg";
import blankprofile from "../../assets/blankprofile.jpg"

export const Leadership = () => {
  return (
    <>

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


    </>
  );
};
