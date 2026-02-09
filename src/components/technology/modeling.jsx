import React from "react";
import "../../index.css";
import { Card } from "react-bootstrap";

const assets = [
  {
    name: "Blender",
    description: "Open-source 3D creation suite for modeling, animation, and rendering",
  },
  {
    name: "Maya",
    description: "Professional 3D modeling and animation software",
  },
  {
    name: "Substance Painter",
    description: "Texturing tools for creating realistic materials",
  },
  {
    name: "Photoshop",
    description: "Image editing for textures and UI elements",
  },
];

export const Modeling = () => {
  return (
    <>
      <p className="font-rubik db-textcolor display-5 fw-bold mt-4 mb-4 text-center">
        3D Modeling & Asset Creation
      </p>

      <div className="flex-wrap-center px-4 pb-4">
        {assets.map((tool, idx) => (
          <Card
            key={idx}
            className="card-custom-alumni p-4 text-center d-flex flex-column"
          >
            <Card.Title
            className="fw-bold font-work mb-2"
            style={{ fontSize: "2rem" }}
            >
                {tool.name}
            </Card.Title>


            <Card.Text className="font-work mb-2">
              {tool.description}
            </Card.Text>
          </Card>
        ))}
      </div>
    </>
  );
};
