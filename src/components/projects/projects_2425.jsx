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
import hybridgame from "../../assets/Multiplayer Hybrid Game.JPG";
import electricshift from "../../assets/Electric Shift.JPG";
import serpentVR from "../../assets/Serpent VR.JPG";
import sntruggled from "../../assets/sntruggled.JPG"
import surgism from "../../assets/surgism VR.JPG";

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
    },
    {
      id: 6,
      title: "Multiplayer Hybird Game: A Fusion of Call of Duty Zombies and TTRPG Mechanics",
      img: hybridgame,
      description: `A multiplayer game merging the intense combat of Call of Duty: Zombies with TTRPG elements. 
      Four players fight waves of enemies while a fifth acts as a Game Master, controlling events and environmental dynamics.`,
      creators: "Ian Norman, Nathan Elias, Bill Li, Michael Van",
      videoUrl: "https://www.youtube.com/embed/JbRu7gBSjaQ?si=Kb5gvAhw4AsJDPwk"
    },
    {
      id: 7,
      title: "Electric Shift – VR Puzzle Game for Electrical Learning",
      img: electricshift,
      description: `A VR game designed to teach electrical engineering concepts through immersive, escape-room-style gameplay. 
      Players solve circuit puzzles covering Ohm’s Law, logic gates, and more. Built in Unity for Meta Quest.`,
      creators: "Alana Dubie, Kelly Lwin, Sarah Abdeen, Chau Nguyen",
      videoUrl: "https://www.youtube.com/embed/il7waBCsAp0?si=MfAfu9ZuDz7hQAXU"
    },
    {
      id: 8,
      title: "Serpent VR – Stealth Espionage Experience in VR",
      img: serpentVR,
      description: `A single-player VR stealth-action game inspired by Metal Gear Solid 3. Players use camouflage, stealth, and 
      gadgets to infiltrate a jungle base and complete objectives undetected.`,
      creators: "Viet Nguyen, Dachi Sirbiladze",
      videoUrl: "https://livecsupomona-my.sharepoint.com/:v:/g/personal/fjamshidi_cpp_edu/EdLXO3W_EBRFuBy0v3bpQg0BJOvBtqtLIo8AjKVGm3agcQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=ARtHxj"
    },
    {
      id: 9,
      title: "Sntruggled – Toy Zombie Survival in VR",
      img: sntruggled,
      description: `An arcade-style VR zombie game where players battle waves of toy enemies with randomized weapons in a spooky warehouse. 
      Features dynamic difficulty and atmospheric design.`,
      creators: "William Licup, Nathan Lam, Angela Santos, Emily Tran",
      videoUrl: "https://www.youtube.com/embed/2cnyOMvNU2k?si=BREoxikVryGIkkkj"
    },
    {
      id: 10,
      title: "Surgisim VR – Virtual Reality Surgical Training",
      img: surgism,
      description: `AA VR medical training platform with two modules: one introduces surgical tools and techniques using intelligent quizzes, 
      and the second offers AI-assisted simulation of operating room procedures. Combines VR, adaptive assessment, and generative AI for scalable and immersive surgical education.`,
      creators: "Daniel Ho, Clifton Williams",
      videoUrl: "https://livecsupomona-my.sharepoint.com/:v:/g/personal/fjamshidi_cpp_edu/ESZ8PAiC2-dBmgXt-gjFxc0BKNw4g7gjTN9r88cMyBWiKg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=IVgpmo"
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
