import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// Import images
import godotDemo from "../../assets/godot-demo.png";
import wildfire from "../../assets/wildfire.JPG";
import droneTraining from "../../assets/drone-training.png";

// Import global CSS
import "../../index.css";

export const FeaturedProjects = () => {
  return (
    <>
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
            onClick={() => window.open("https://www.youtube.com/embed/ht2saiQqPQM?si=xZ462cFFzx5vSC21")}
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
            onClick={() => window.open("https://www.youtube.com/embed/NPDaAG-j_Po?si=djw-8_HcpnLvHglA")}
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
            onClick={() => window.open("https://www.youtube.com/embed/YcD0RUF4Hl4?si=GrAnsChBo_siTTe7")}
            className="m-3 btn-custom"
            >
            VIEW PROJECT
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
};
