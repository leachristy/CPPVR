import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

// Import images
import vrLab from "../../assets/VR Lab.png";

// Import global CSS
import "../../index.css";

export const AboutTheLab = () => {
  return (
    <>
      {/* Visual Hierarchy / About Section */}
      <div className="container p-2 mt-5 mb-5">
        <div className="row align-items-center">
      
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={vrLab}
              className="img-fluid img-rounded-sm"
              alt="VR Lab"
            />
          </div>

    
          <div className="col-md-6">
            <h2 className="fw-bold display-4 mb-3 font-rubik">About the Lab</h2>
            <p className="mb-3 text-lead">
              The CPP Virtual Reality Lab applies virtual and augmented reality to enhance
              student learning in computer science education. Since 2017, we've been creating
              immersive experiences that allow students to step into code and interact with
              digital concepts in revolutionary ways.
            </p>
            <Button
              as={Link}
              to="/about"
              className="btn-custom"
            >
              LEARN MORE ABOUT US
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
