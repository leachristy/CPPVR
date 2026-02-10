import React from "react";
import "../../index.css";
import { Card } from "react-bootstrap";
import blankprofile from "../../assets/blankprofile.jpg";

const formerLeaders = [
  {
    name: "Dr. Markus Eger",
    role: "Former Co-Director (2021–2024)",
    description:
      "Contributed significantly to the lab's growth and development during tenure as Co-Director",
    email: "",
    image: blankprofile,
  },
  {
    name: "Dr. Nima Davarpanah",
    role: "Former Co-Director",
    description: "",
    email: "ndavarpanah@cpp.edu",
    image: blankprofile,
  },
]


export const FormerLeader = () => {
  return (
    <>
      <div className="px-4 py-8 pb-4 text-center">
        <p className="font-rubik db-textcolor display-5 fw-bold pt-3">
          Former Leadership
        </p>

        <div className="flex-wrap-center">
          {formerLeaders.map((leader, index) => (
            <Card key={index} className="card-custom-former p-2 pb-4">
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
                {leader.description && (
                  <>
                    <br />
                    {leader.description}
                  </>
                )}
                {leader.email && (
                  <>
                    <br />
                    <a href={`mailto:${leader.email}`}>
                      {leader.email}
                    </a>
                  </>
                )}
              </Card.Text>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
