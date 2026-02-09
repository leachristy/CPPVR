import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../../index.css"; 

// 2024-2025 Projects
import godotDemo from "../../assets/godot-demo.png";
import wildfire from "../../assets/wildfire.JPG";
import ballsbridgesbuildings from "../../assets/ballbridgesbuildings.png";
import towers from "../../assets/towers.png";
import physics from "../../assets/physics.png";

export const Projects_2425 = () => {

  const projects = [
    {
      id: 1,
      title: "Meow Gear Solid VR",
      img: godotDemo,
      description: `Canine regime on Shadow Meowsis Island. Remember to use items, duck behind 
      covers, and carefully plan your moves around the dog’s sightlines. Your mission? Destroy 
      the nuclear-equipped cat-destroying weapon known as "Meow Gear.""`,
      creators: "Alec Urbany, Tyler Jones, Ngoc Chau Nguyen, Aidan Sanders, Bill Li, Ethan Pan",
      videoUrl: "https://www.youtube.com/embed/HBbmjIJbS8o?si=Dqt-4p2KLmbr3gp6"
    },
    {
      id: 2,
      title: "Intergalactic Ranger",
      img: wildfire,
      description: `Intergalactic Ranger is a space adventure game where you are a lone spaceman 
        tasked with cleaning up space junk. With your new state-of-the-art web-shooting 
        gun and jetpack, you can maneuver around space to swing the trash into the blackhole core.`,
      creators: "Dhruvi Choksi, Vinh Pham, Carson Green, Jibriel Ustarz",
      videoUrl: "https://www.youtube.com/embed/1G6X4V2wHtE?si=pKCCQOhOvB-0dVAh"
    },
    {
      id: 3,
      title: "Balls, Bridges, and Buildings",
      img: ballsbridgesbuildings,
      description: `Balls, Bridges, and Buildings is a game that aims to test the player’s structural 
      engineering skills. They must build a free-standing structure able to transport a ball from one 
      point to another. Support struts are designed to mimic real-life physics, and their joints will 
      bend under weight or even break`,
      creators: "Joshua Lai, Kien Nguyen, Aidan Sanders",
      videoUrl: "https://www.youtube.com/embed/pmg3rtDmh-E?si=tK_SrNx92x-ncG_1"
    },
    {
      id: 4,
      title: "Towers",
      img: towers,
      description: `A tower defense game with a VR twist. The towers are constructed using 
        blueprints placed around the map. Enemies will spawn in waves and attempt to reach the end.`,
      creators: "Ian Norman, Katelyn Mijares, Michael Phu, Jesse Chu, Owen Lovett",
      videoUrl: "https://www.youtube.com/embed/H4496qnGVMw?si=KL4QMGKgtEAVvuGB"
    },
    {
      id: 5,
      title: "Object-based Physics Simulator",
      img: physics,
      description: `An interactive physics playground that allows the user to interact with various objects. 
        Users can pick up, throw, and destroy objects as well as traverse through a short level.`,
      creators: "Alan Le, Alex Machorro, Ava Vazquez",
      videoUrl: "https://www.youtube.com/embed/1G6X4V2wHtE?si=oA7CUrUDq7guDi8e"
    }
  ];

  return (
    <>
      <p className="font-rubik db-textcolor display-5 fw-bold pt-3">
        2024-2025 Projects
      </p>

      <div className="flex flex-wrap justify-center gap-6">
      {projects.map(project => (
        <Card key={project.id} className="card-custom w-80">
            <Card.Img className="p-3 w-80 h-60 object-cover rounded-lg" src={project.img} />
            <Card.Body>
            <Card.Title className="fw-bold font-work">{project.title}</Card.Title>
            <Card.Text className="font-work ">
                {project.description}<br />
                Created by: {project.creators}
            </Card.Text>
            </Card.Body>

            <Button
            onClick={() => window.open(project.videoUrl, "_blank")}
            className="m-3 btn-custom"
            >
            VIEW PROJECT
            </Button>
        </Card>
        ))}

      </div>
    </>
  );
};
