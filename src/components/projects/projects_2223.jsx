import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../../index.css"; 

// 2022 - 2023 Projects
import bemo from "../../assets/bemo-bounty-hunter.png";
import droneTraining2 from "../../assets/drone-training2.png";
import cybertraining from "../../assets/cyber-training.png";
import godot from "../../assets/godot-demo.png";
import automomataRabbits from "../../assets/automata-rabbits.png";
import labyrinth from "../../assets/pushdown-labyrinth.png";
import purrfectpizza from "../../assets/purrfect-pizza.png";
import snowdown from "../../assets/Snowdown-Image.png";
import carnival from "../../assets/Verb_carnival.JPG";
import bugCatcher from "../../assets/BugCatcher.JPG";
import automaRabbits from "../../assets/automata-rabbits.png"

export const Projects_2223 = () => {
  const [openVideoId, setOpenVideoId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Bemo Bounty Hunter",
      img: bemo,
      description: `CBemo Bounty Hunter is a VR game that simulates an underwater environment. 
      As the player, your goal is to find and catch Bemo, the capture target, with your net. 
      The game features three levels with increasing difficulties and multiple different endings.""`,
      creators: "Joshua Barrientos, Kayte Chien, Rebecca Lee",
      videoUrl: "https://www.youtube.com/embed/Y84hUI5ack8?si=ZRfiOA9rOggHpP_-"
    },
    {
      id: 2,
      title: "Drone Training Simulator",
      img: droneTraining2,
      description: `A virtual reality simulation that allows the user to fly a drone 
      in simulated real-life environments and weather conditions. The player will be 
      able to navigate through maps based on real world locations, practice flying under 
      specific weather conditions, and receive feedback based on specific regulations that 
      the player needs to follow.`,
      creators: "Grecia Alvarado, Daniel Appel, Estefania Chavez, Laurence Garcia, Samantha Macaraniag, Devon Mamawag, Rida Siddiqui",
      videoUrl: "https://www.youtube.com/embed/YcD0RUF4Hl4?si=GrAnsChBo_siTTe7"
    },
    {
      id: 3,
      title: "Cyber Security Training",
      img: cybertraining,
      description: `This game is a cyber-security simulation training game that plays scenarios, 
      so they know how to prevent getting scammed from the dangers of social engineering. The 
      game consists of different scenes with each of them teaching a specific lesson on phishing, 
      tailgating, etc`,
      creators: "Viswadeep Manam, Ryan Trinh, Viet Nguyen, Andrew Kim, Steven Nguyen, Kennedy Janto, Alvan Zhuang",
      videoUrl: "https://www.youtube.com/embed/d75T7h4YUA0?si=6U1I2n7ROY96r4PO"
    },
    {
      id: 4,
      title: "Godot VR Tech Demo",
      img: godot,
      description: `The player traverses a large environment by teleporting and creating mobile 
      platforms for the player to stand on. The player must deactivate a reactor core by pulling 
      3 switches.`,
      creators: "Nathan Brown, Farhan Hussain, Byungchul Kang, Jibriel Ustarz",
      videoUrl: "https://www.youtube.com/embed/ht2saiQqPQM?si=xZ462cFFzx5vSC21"
    },
    {
      id: 5,
      title: "Automata Rabbits",
      img: automomataRabbits,
      description: `A game about catching rabbits in a maze. The maze represents a Finite State 
      Automaton. Each rabbit follows a path through the maze according to the rules of the FSA and 
      their assigned name. The player must figure out how the FSA works in order to catch each rabbit, 
      and return them to the start.`,
      creators: "Christopher Tomes, Jason Rowley, Alec Urbany, Emily Perez",
      videoUrl: "https://www.youtube.com/embed/M9Xj-vAnyLI?si=GETAt7we3xfG5ftv"
    },
    {
      id: 6,
      title: "The Labyrinth of Pushdown",
      img: labyrinth,
      description: `This game is intended to act as a teaching aid to help visualize pushdown automata. 
      The automaton is portrayed as a large maze. Each room represents a state, and there are hallways 
      in between them which represent transitions. The player will act as the active state, moving 
      around the maze. While navigating, they must adhere to the rules established by the pushdown 
      automaton (they are only able to take a transition if they have the corresponding value on the 
      top of their stack). Each time they transition to a new state, the corresponding symbol/string 
      of symbols is written to their sword. By the time they reach the accepting state, they will have 
      written a valid string for the language upon their sword. They will then be taken to a short quiz 
      level, asking them to identify the language of the PDA they just traversed.`,
      creators: "Joshua Lai, Isaac Diaz, Alex Gomez, Daniel Gruhn",
      videoUrl: "https://www.youtube.com/embed/enUawgaFxwA?si=maDvZP0I0pK28JIX"
    },
    {
      id: 7,
      title: "Purrfect Pizza",
      img: purrfectpizza,
      description: `Purrfect Pizza is a virtual reality cooking simulation game meant to help teach the 
      concept of the pumping lemma for regular languages in CS 3110, Formal Languages and Automata. 
      This concept states that all strings or words of a sufficient length in a regular language may 
      have a middle section of the string repeated an arbitrary number of times to produce a new string 
      that is also part of the language. The game aims to create a fun, gamified demonstration of the 
      essential concepts of the pumping lemma. This is accomplished by different cooking behaviors from 
      the sous chefs as well as the ingredients needed to finish a pizza.`,
      creators: "Anita Mehrazarin, Brandon Moya, Gaia Dennison, Janet Cho, Marty Scott, Thongsavik Sirivong",
      videoUrl: "https://www.youtube.com/embed/qvDIFRxtNNs?si=-65JbEgZqxODgi3x"
    },
    {
      id: 8,
      title: "Snowdown",
      img: snowdown,
      description: `You are facing off King Blobert III, a self-identifying slime supremacist that 
      wishes to reign terror amongst the citizens of this fine town. You, as the hero and savior of 
      Slimeville, Snowtown, will be facing off King Blobert III in a dueling battle where the strongest 
      and smartest will come out victorious. The victor that comes out on top will ultimately decide the 
      fate of Slimeville.`,
      creators: "Aaron Do, Robert Balatbat, Theodore Tran, Ryan Yan",
      videoUrl: "https://www.youtube.com/embed/6a3Kjr523JI?si=3EOs4yWLAWevZWUK"
    },
    {
      id: 9,
      title: "VeRB Carnival Games",
      img: carnival,
      description: `The player starts in a wide open field with a few carnival tents. Each carnival 
      tent navigates to a separate carnival game. Available carnival games include balloon pop, ring 
      toss, shooting gallery, whack-a-mole, and bowling.`,
      creators: "Josh Barrientos, Kyle Townsend, Jenny Lee, Shane Dirksen, Kyle Ullum",
      videoUrl: "https://www.youtube.com/embed/Pli1xD56PCI?si=KZCJJ7Ot3UDFKSLm"
    },
    {
      id: 10,
      title: "BugCatcherVR",
      img: bugCatcher,
      description: `A virtual reality simulation game centered around catching bugs. The player 
      is equipped with a net for catching various types of bugs. The player can keep bugs to 
      show off or sell them for money to buy upgrades that’ll help them throughout the game.`,
      creators: "Van Huynh, Tran Nguyen, Nathan Brown, Kenneth Shuto",
      videoUrl: "https://www.youtube.com/embed/mUpouz8LypA?si=iGoKuD8E7ZfVT17z"
    },
    {
      id: 10,
      title: "THE ANIMA AUTOMATA",
      img: automaRabbits,
      description: `THE ANIMA AUTOMATA is a game made to teach Deterministic Finite Automata 
      (DFAs). The player must defeat enemies by attacking them using the sword and shield. 
      Each enemy has their own DFA, and each attack changes the state.`,
      creators: "Lorenzo Cabrera, Kayte Chien, Rebecca Lee, Justin Rebollar",
      videoUrl: "https://www.youtube.com/embed/VIdp8hDAckI?si=sEtXCy21r84jiq1l"
    }
  ];

  return (
    <>
      <p className="font-rubik db-textcolor display-5 fw-bold pt-3">
        2022-2023 Projects
      </p>

      <div className="flex flex-wrap justify-center gap-6">
      {projects.map(project => (
        <Card key={project.id} className="card-custom w-80">
            <Card.Img className="p-3 w-80 h-60 object-cover rounded-lg" src={project.img} />
            <Card.Body>
            <Card.Title className="fw-bold font-work">{project.title}</Card.Title>
            <Card.Text className="font-work">
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
