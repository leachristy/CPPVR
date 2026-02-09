import React from "react";
import "../../index.css";
import { Card } from "react-bootstrap";
import imagePlaceholder from "../../assets/img_placeholder.png";
import htc from "../../assets/HTC VIVE PRO.jpeg";
import oculus from "../../assets/OCULUS RIFT.jpg";
import hololens from "../../assets/MICROSOFT HOLOLENS.png";
import meta2 from "../../assets/META 2.jpg";

const vrHardware = [
  {
    techName: "HTC Vive Pro",
    image: htc, 
    description:
      "Professional-grade VR headset with high-resolution displays and room-scale tracking",
      specs: [
        "2880 x 1600 resolution",
        "110° field of view",
        "SteamVR tracking",
      ],
    },
  {
    techName: "Oculus Rift",
    image: oculus, 
    description:
      "Popular VR platform with extensive software library and intuitive controllers",
      specs: [
        "2160 x 1200 resolution",
        "Touch controllers",
        "Oculus SDK support",
      ],
    },
  {
    techName: "Microsoft HoloLens",
    image: hololens, 
    description:
      "Mixed reality headset blending digital content with physical environment",
      specs: [
        "Holographic displays",
        "Spatial mapping",
        "Gesture recognition",
      ],
    },
  {
    techName: "Meta 2",
    image: meta2, 
    description:
      "Augmented reality headset for immersive AR experiences and development",
      specs: [
        "2560 x 1440 resolution",
        "90° field of view",
        "Hand tracking",
      ],
    },
];

export const Hardware = () => {
  return (
    <>
      <p className="font-rubik db-textcolor display-5 fw-bold mt-4 mb-4 text-center">
        VR/AR Hardware
      </p>

      <div className="flex-wrap-center px-4 pb-4">
        {vrHardware.map((tech, idx) => (
          <Card
          key={idx}
          className="card-custom-alumni p-3 text-center d-flex flex-column"
        >
          <Card.Img
            src={tech.image}
            alt={tech.techName}
            className="mx-auto mb-3"
            style={{ width: "160px", height: "160px", objectFit: "contain" }}
          />
        
          <Card.Title className="fw-bold font-work mb-2">
            {tech.techName}
          </Card.Title>
        
          <Card.Text className="font-work mb-2">
            {tech.description}
          </Card.Text>

          <div className="mt-auto mb-2 text-start">
            <p className="fw-bold font-work mb-1">Specs:</p>
              <ul className="list-disc list-inside font-work text-muted small mb-0">
                {tech.specs.map((spec, i) => (
                <li key={i}>{spec}</li>
                ))}
              </ul>
          </div>
        </Card>
                
        ))}
      </div>
    </>
  );
};
