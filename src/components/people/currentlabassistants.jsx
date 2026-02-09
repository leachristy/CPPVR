import React from "react";
import "../../index.css";
import { Card } from "react-bootstrap";
import blankprofile from "../../assets/blankprofile.jpg";

// Current lab assistants data
const currentAssistants = [
  {
    name: "Alvan Zhuang",
    role: "Lab Assistant",
    focus: "VR Development",
    image: blankprofile,
    year: "2023-2024",
    major: "Computer Science Major",
  },
  {
    name: "Student Name",
    role: "Lab Assistant",
    focus: "AR Applications",
    image: blankprofile,
    year: "2023-2024",
    major: "Computer Science Major",
  },
  {
    name: "Student Name",
    role: "Lab Assistant",
    focus: "3D Modeling",
    image: blankprofile,
    year: "2023-2024",
    major: "Computer Science Major",
  },
];

export const CurrentLabAssistants = () => {
  return (
    <section className="px-4 py-8 pb-4 text-center">
      <p className="font-rubik db-textcolor display-5 fw-bold pt-3">
        Current Lab Assistants (2023-2024)
      </p>
      <div className="flex-wrap-center">
        {currentAssistants.map((assistant, idx) => (
          <Card key={idx} className="card-custom p-2 pb-4 text-center">
            <Card.Img
              src={assistant.image}
              className="rounded-circle mx-auto mb-3"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <Card.Title className="fw-bold font-work">{assistant.name}</Card.Title>
            <Card.Text className="font-work">
              {assistant.role} {assistant.year} <br />
              {assistant.major} <br />
              Focus: {assistant.focus}
            </Card.Text>
          </Card>
        ))}
      </div>
    </section>
  );
};
