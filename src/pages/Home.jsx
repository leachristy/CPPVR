import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

// Import images
import vrHeader from "../assets/VR_Header.jpg";
import godotDemo from "../assets/godot-demo.png";
import wildfire from "../assets/wildfire.JPG";
import droneTraining from "../assets/drone-training.png";
import vrLab from "../assets/VR Lab.png";

// Import global CSS
import "../index.css";

export const Home = () => {
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

      {/* Featured Projects Section */}
      <div className="text-center p-2 mt-5">
        <p className="font-rubik display-5 fw-bold">Featured Projects</p>
        <div className="flex-wrap-center">
          <Card className="card-custom">
            <Card.Img className="p-3" src={godotDemo} />
            <Card.Body>
              <Card.Title className="fw-bold font-work">
                Godot VR Tech Demo
              </Card.Title>
              <Card.Text className="font-work">
                The player traverses a large environment by teleporting and creating
                mobile platforms for the player to stand on. The player must deactivate
                a reactor core by pulling 3 switches.
                <br />
                Created by: Nathan Brown, Farhan Hussain, Byungchul Kang, Jibriel Ustarz
              </Card.Text>
            </Card.Body>
            <Button
              as={Link}
              to="/projects"
              className="m-3 btn-custom"
            >
              VIEW PROJECT
            </Button>
          </Card>

          <Card className="card-custom">
            <Card.Img className="p-3" src={wildfire} />
            <Card.Body>
              <Card.Title className="fw-bold font-work">Wildfire</Card.Title>
              <Card.Text className="font-work">
                The user is placed in the middle of an active wildfire scenario and must
                navigate the environment while making critical decisions. The simulation
                evaluates the user’s choices based on safety, timing, and available resources.
                <br />
                Created by: Donovan Rush, Ismail Abbas
              </Card.Text>
            </Card.Body>
            <Button
              as={Link}
              to="/projects"
              className="m-3 btn-custom"
            >
              VIEW PROJECT
            </Button>
          </Card>

          <Card className="card-custom">
            <Card.Img className="p-3" src={droneTraining} />
            <Card.Body>
              <Card.Title className="fw-bold font-work">
                Drone Training Simulator
              </Card.Title>
              <Card.Text className="font-work">
                The user pilots a drone in a virtual reality environment with realistic maps
                and weather conditions. The simulation allows navigation through real-world
                locations while providing feedback based on flight regulations.
                <br />
                Created by: Grecia Alvarado, Daniel Appel, Estefania Chavez, Laurence Garcia,
                Samantha Macaraniag, Devon Mamawag, Rida Siddiqui
              </Card.Text>
            </Card.Body>
            <Button
              as={Link}
              to="/projects"
              className="m-3 btn-custom"
            >
              VIEW PROJECT
            </Button>
          </Card>
        </div>
      </div>

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

      {/* Visual Hierarchy / About Section */}
      <div className="container p-2 mt-5 mb-5">
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={vrLab}
              className="img-fluid img-rounded-sm"
              alt="VR Lab"
            />
          </div>

          {/* Text */}
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
