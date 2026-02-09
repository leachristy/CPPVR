import React from "react";
import "../../index.css";
import { Card } from "react-bootstrap";

const tools = [
  {
    name: "Unity 3D",
    description:
      "Primary game engine for VR/AR development with extensive XR support and asset ecosystem",
    useCases: [
      "VR game development",
      "Educational simulations",
      "Training applications",
    ],
  },
  {
    name: "Unreal Engine",
    description:
      "High-fidelity graphics engine for photorealistic VR experiences and complex simulations",
    useCases: [
      "Realistic environments",
      "Advanced graphics",
      "Architectural visualization",
    ],
  },
  {
    name: "SteamVR",
    description:
      "Platform for VR content distribution and hardware integration across multiple devices",
    features: [
      "Cross-platform support",
      "Room-scale tracking",
      "Controller APIs",
    ],
  },
];

export const DevTools = () => {
  return (
    <>
      <p className="font-rubik db-textcolor display-5 fw-bold mt-4 mb-4 text-center">
        Software & Development Tools
      </p>

      <div className="flex-wrap-center px-4 pb-4">
        {tools.map((tool, idx) => (
          <Card
            key={idx}
            className="card-custom p-3 pb-4 text-center d-flex flex-column"
          >
            <Card.Title className="fw-bold font-work display-6 mb-2">
              {tool.name}
            </Card.Title>

            <Card.Text className="font-work mb-2">
              {tool.description}
            </Card.Text>

            {/* Bullet points */}
            <div className="mt-auto text-start px-3">
              <p className="fw-bold font-work mb-1">
                {tool.useCases ? "Use Cases:" : "Features:"}
              </p>

              <ul className="list-disc list-inside font-work small mb-0">
                {(tool.useCases || tool.features).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};
