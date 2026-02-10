import React from "react";
import "../../index.css";
import { Card } from "react-bootstrap";

import drhusain from "../../assets/dr.husain.jpeg";
import blankprofile from "../../assets/blankprofile.jpg";
import drjamshidi from "../../assets/dr. jamshidi.jpg"

const leaders = [
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

export const Leadership = () => {
  return (
    <>
      {/* Lab Leadership Section */}
      <div className="px-4 py-8 pb-3 text-center">
        <p className="font-rubik db-textcolor display-5 fw-bold pt-3">
          Lab Leadership
        </p>

        <div className="flex-wrap-center">
          {leaders.map((leader, index) => (
            <Card key={index} className="card-custom p-2 pb-4">
              <Card.Img
                className="p-3 rounded-circle mx-auto"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                }}
                src={leader.image}
              />

              <Card.Title className="fw-bold font-work">
                {leader.name}
              </Card.Title>

              <Card.Text className="font-work">
                {leader.role}
                <br />
                Email:{" "}
                <a href={`mailto:${leader.email}`}>
                  {leader.email}
                </a>
              </Card.Text>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
