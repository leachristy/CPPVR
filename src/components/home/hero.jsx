import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

// Import images
import vrHeader from "../../assets/VR_Header.jpg";

// Import global CSS
import "../../index.css";

export const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <Container
        fluid
        className="hero-container text-center"
        style={{ backgroundImage: `url(${vrHeader})` }}
      >
        <Row className="w-100 justify-content-center align-items-center">
          <Col>
            <h1 className="fw-bold display-2 font-rubik text-white">
              Immersive Learning <br /> Through VR
            </h1>
            <p className="text-lead text-white mt-5">
              Pioneering VR/AR education research since 2017 <br />
              Creating innovative virtual worlds for computer science education
            </p>
            <Button
              as={Link}
              to="/projects"
              className="mt-4 btn-custom"
            >
              EXPLORE OUR PROJECTS
            </Button>
          </Col>
        </Row>
      </Container>

    </>
  );
};
