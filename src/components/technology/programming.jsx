import React from "react";
import "../../index.css";
import { Card } from "react-bootstrap";

const programs = [
    {
        tool: "C#",
        title: "Primary Language",
        description: "Main scripting language for Unity development, game logic, and VR interactions"
    },
    {
        tool: "C++",
        title: "Performance",
        description: "Used for Unreal Engine development and performance-critical systems"
    },
    {
        tool: "Python", 
        title: "Tools & Scripts",
        description: "Pipeline automation, data processing, and tool development"
    }
];

export const Programming = () => {
  return (
    <>
    <p className="font-rubik db-textcolor display-5 fw-bold mt-4 mb-4 text-center">
        Programming & Scripting
      </p>

    <div className="flex-wrap-center px-4 pb-4">
      {programs.map((program, idx) => (
        <Card
          key={idx}
          className="card-custom p-3 pb-4 text-center d-flex flex-column"
        >
          
          <Card.Title className="fw-bold font-work display-6 mb-1">
            {program.tool}
          </Card.Title>

         
          <Card.Subtitle className="fw-bold font-work h5 mb-2">
            {program.title}
          </Card.Subtitle>

         
          <Card.Text className="font-work mb-0">
            {program.description}
          </Card.Text>
        </Card>
      ))}
    </div>
    </>
  );
};
