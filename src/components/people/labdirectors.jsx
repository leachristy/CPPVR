import React from "react";
import "../../index.css";
import { Card } from "react-bootstrap";

import drhusain from "../../assets/dr.husain.jpeg";
import drjamshidi from "../../assets/dr. jamshidi.jpg"
import blankprofile from "../../assets/blankprofile.jpg";

const directors = [
  {
    name: "Dr. Mohammad Husain",
    role: "Director",
    email: "mihusain@cpp.edu",
    image: drhusain,
  },
  {
    name: "Dr. Fatemeh Jamshidi",
    role: "Co-Director",
    email: "fjamshidi@cpp.edu",
    image: drjamshidi,
  },
];

export const LabDirectors = () => {
  return (
    <>
      <p className="text-center font-rubik db-textcolor display-5 fw-bold pt-3">
        Lab Directors
      </p>

      <div className="px-4 py-8 pb-4 text-center">
        <div className="flex-wrap-center">
          {directors.map((director, index) => (
            <Card key={index} className="card-custom-director p-3 text-center">
              <Card.Img
                src={director.image}
                className="rounded-circle mx-auto mb-3"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                }}
              />

              <Card.Title className="fw-bold font-work">
                {director.name}
              </Card.Title>

              <Card.Text className="font-work">
                {director.role}
                <br />
                Email:{" "}
                <a href={`mailto:${director.email}`}>
                  {director.email}
                </a>
              </Card.Text>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
