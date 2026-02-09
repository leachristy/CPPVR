import React from "react";
import Card from "react-bootstrap/Card";
// Import global CSS
import "../../index.css";

export const Statistics = () => {
  return (
    <>

      {/* Statistics Section */}
      <div className="text-center p-2 mt-5">
        <p className="font-rubik display-5 fw-bold">Lab at a Glance</p>

        <div className="flex-wrap-center">
          <Card className="card-stat shadow-sm">
            <Card.Title className="display-4 fw-bold mb-1 font-work">2017</Card.Title>
            <Card.Text className="text-uppercase text-muted fw-medium font-work">
              Established
            </Card.Text>
          </Card>

          <Card className="card-stat shadow-sm">
            <Card.Title className="display-4 fw-bold mb-1 font-work">20+</Card.Title>
            <Card.Text className="text-uppercase text-muted fw-medium font-work">
              Projects
            </Card.Text>
          </Card>

          <Card className="card-stat shadow-sm">
            <Card.Title className="display-4 fw-bold mb-1 font-work">50+</Card.Title>
            <Card.Text className="text-uppercase text-muted fw-medium font-work">
              Students
            </Card.Text>
          </Card>

          <Card className="card-stat shadow-sm">
            <Card.Title className="display-4 fw-bold mb-1 font-work">4+</Card.Title>
            <Card.Text className="text-uppercase text-muted fw-medium font-work">
              VR Platforms
            </Card.Text>
          </Card>
        </div>
      </div>

    </>
  );
};
