import React from "react";
import "../../index.css";
import { Card } from "react-bootstrap";

import drhusain from "../../assets/dr.husain.jpeg";
import blankprofile from "../../assets/blankprofile.jpg";

const directors = [
  {
    name: "Dr. Mohammad Husain",
    role: "Director",
    email: "mihusain@cpp.edu",
    image: drhusain,
  },
  {
    name: "Dr. Nima Davarpanah",
    role: "Co-Director",
    email: "ndavarpanah@cpp.edu",
    image: blankprofile,
  },
];

export const LabDirectors = () => {
  return (
    <>
    <p className="text-center font-rubik db-textcolor display-5 fw-bold pt-3">Lab Directors</p>
    <div className="px-4 py-8 pb-4 text-center">
      
      <div className="flex-wrap-center">
        {directors.map((director, index) => (
          <Card key={index} className="card-custom-director p-3 text-center">
            <Card.Img
              src={director.image}
              className="rounded-circle mx-auto mb-3"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <Card.Title className="fw-bold font-work">{director.name}</Card.Title>
            <Card.Text className="font-work">
              {director.role} <br />
              Email: {director.email}
            </Card.Text>
          </Card>
        ))}
      </div>
    </div>
    </>
  );
};
