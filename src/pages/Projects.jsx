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

export const Projects = () => {
  return (
    <>
     <div className="text-center p-2">
        <p className="font-rubik display-2 fw-bold">Our Projects</p>
        <p className="font-work" style={{ fontSize: "1.5rem", lineHeight: "1.2", letterSpacing: "0.05em" }}>Exploring immersive learning experiences from 2017 to present</p>

        <p className="font-rubik db-textcolor display-5 fw-bold pt-3">2024-2025 Projects</p>
        <div className="flex-wrap-center">
          <Card className="card-custom">
            <Card.Img className="p-3" src={godotDemo} />
            <Card.Body>
              <Card.Title className="fw-bold font-work">
                Meow Gear Solid VR
              </Card.Title>
              <Card.Text className="font-work">
              A short, sweet stealth action game in Virtual Reality (VR), putting you in 
              the boots of a cat infiltrating the base of the canine regime on Shadow 
              Meowsis Island. Remember to use items, duck behind covers, and carefully plan 
              your moves around the dog’s sightlines. Your mission? Destroy the nuclear-equipped 
              cat-destroying weapon known as "Meow Gear."
                <br />
                Created by: Alec Urbany, Tyler Jones, Ngoc Chau Nguyen, Aidan Sanders, Bill Li, Ethan Pan
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
              <Card.Title className="fw-bold font-work">Intergalactic Ranger</Card.Title>
              <Card.Text className="font-work">
              Intergalactic Ranger is a space adventure game where you are a lone spaceman 
              tasked with cleaning up space junk. With your new state-of-the-art web-shooting 
              gun and jetpack, you can maneuver around space to swing the trash into the blackhole core.
                <br />
              Created by: Dhruvi Choksi, Vinh Pham, Carson Green, Jibriel Ustarz
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
                Balls, Bridges, and Buildings
              </Card.Title>
              <Card.Text className="font-work">
              Standing structure able to transport a ball from one point to another. 
              Support struts are designed to mimic real-life physics, and their joints 
              will bend under weight or even break off if too much force is applied. 
              Thus, players must consider how weight loads will be distributed on their structure.
                <br />
                Created by: Joshua Lai, Kien Nguyen, Aidan Sanders
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
              Towers
              </Card.Title>
              <Card.Text className="font-work">
              A tower defense game with a VR twist. The towers are constructed using 
              blueprint placed around the map. Enemies will spawn in waves and attempt 
              to reach the end.
                <br />
                Created by: Ian Norman, Katelyn Mijares, Michael Phu, Jesse Chu, Owen Lovett
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
              Object-based Physics Simulator
              </Card.Title>
              <Card.Text className="font-work">
              An interactive physics playground that allows the user to interact with various objects. 
              Users can pick up, throw and destroy objects as well as traverse through a short level.
                <br />
                Created by: Alan Le, Alex Machorro, Ava Vazquez
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
    </>
  )
}
