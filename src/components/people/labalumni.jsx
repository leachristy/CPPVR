import React from "react";
import "../../index.css";
import { Card } from "react-bootstrap";
import blankprofile from "../../assets/blankprofile.jpg";

const alumniData = [
  {
    year: "2022-2023",
    members: [
      { name: "Christopher Tomes", role: "Lab Assistant", image: blankprofile },
      { name: "Student Name", role: "Lab Assistant", image: blankprofile },
      { name: "Student Name", role: "Lab Assistant", image: blankprofile },
      { name: "Student Name", role: "Lab Assistant", image: blankprofile },
    ],
  },
  {
    year: "2018-2019",
    members: [
      { name: "Nam Huynh", role: "Lab Assistant", image: blankprofile },
      { name: "Justin Tsai", role: "Lab Assistant", image: blankprofile },
      { name: "Justin Minamitani", role: "Lab Assistant", image: blankprofile },
      { name: "Student Name", role: "Lab Assistant", image: blankprofile },
    ],
  },
  {
    year: "2017-2018",
    members: [
      { name: "Jedon Roc Carter", role: "Lab Assistant", image: blankprofile },
      { name: "Student Name", role: "Lab Assistant", image: blankprofile },
      { name: "Student Name", role: "Lab Assistant", image: blankprofile },
      { name: "Student Name", role: "Lab Assistant", image: blankprofile },
    ],
  },
];

export const LabAlumni = () => {
  return (
    <section className="px-4 py-8 pb-4 text-center">
      <p className="font-rubik db-textcolor display-5 fw-bold pt-3">Lab Alumni</p>

      {alumniData.map((group, i) => (
        <div key={i} className="mb-8">
          <p className="responsive-paragraph pt-4">
            <strong className="db-textcolor">{`Lab Assistants ${group.year}`}</strong>
          </p>
          <div className="flex-wrap-center">
            {group.members.map((member, idx) => (
              <Card key={idx} className="card-custom-alumni p-2 pb-4 text-center">
                <Card.Img
                  src={member.image}
                  className="rounded-circle mx-auto mb-3"
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                />
                <Card.Title className="fw-bold font-work">{member.name}</Card.Title>
                <Card.Text className="font-work">
                  {member.role} <br />
                  {group.year}
                </Card.Text>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
