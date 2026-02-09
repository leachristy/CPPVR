import React from "react";
import "../../index.css";
import { Card } from "react-bootstrap";

const capabilities = [
    {
        title: "VR Development", 
        description: [
            "Room-scale VR experiences",
            "Multi-user VR environments",
            "VR game development",
            "Educational VR simulations",
            "VR training modules"
        ]
    },
    {
        title: "AR Development",
        description: [
            "Mixed reality applications",
            "Spatial mapping and anchors",
            "Hand gesture recognition",
            "AR educational tools",
            "Holographic interfaces"
        ]
    }
];

export const Labcapabilities = () => {
  return (
    <>
      <p className="font-rubik db-textcolor display-5 fw-bold mt-4 mb-4 text-center">
        Lab Capabilities
      </p>

      <div className="flex-wrap-center">
        {capabilities.map((capability, index) => (
          <Card key={index} className="card-custom-director p-3 text-center">
            
            <Card.Title className="fw-bold font-work mb-3 display-6">{capability.title}</Card.Title>

            <Card.Text className="font-work text-center">
              <ul className="list-disc mb-0 mx-auto" style={{ display: "inline-block" }}>
                {capability.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Card.Text>
          </Card>
        ))}
      </div>
    </>
  );
};
