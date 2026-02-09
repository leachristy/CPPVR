import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../../index.css"; 

// 2018 - 2019 Projects
import yogality from "../../assets/yoga.JPG";
import sorting from "../../assets/sorting.JPG";
import chemistry from "../../assets/chemistry.JPG";
import pinball from "../../assets/pinball.JPG";
import combination from "../../assets/comb_and_perm.JPG";
import wildfire from "../../assets/wildfire.JPG";
import dijkstra from "../../assets/dijkstra.JPG"; 
import dataStructures from "../../assets/data_structures.png";
import reddwarf from "../../assets/red_dwarf.png";
import breaktime from "../../assets/break_time.png";
import logicgates from "../../assets/logic_gates.png";
import rubiks from "../../assets/rubiks.png";

export const Projects_1819 = () => {
  const [openVideoId, setOpenVideoId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Yogality",
      img: yogality,
      description: `This project allows users to learn different yoga poses 
      through interactive learning with a VR yoga instructor.`,
      creators: "Lynn Nguyen, Kim Ngan Nguyen, Kimberlyn Krishnan",
      videoUrl: "https://www.youtube.com/embed/iPzXk-JFs0M?si=LYyjBE06mpxivYm0"
    },
    {
      id: 2,
      title: "Sorting Algorithms Animated",
      img: sorting,
      description: `This project is a visual demonstration of sorting algorithms which 
      can be viewed in Augmented Reality. The user is tested on different steps and 
      properties of those algorithms.`,
      creators: "Derek Yee, Diana Choi",
      videoUrl: "https://www.youtube.com/embed/DtawEmU9MvM?si=WtgISg_sn6hmzwfG"
    },
    {
      id: 3,
      title: "ChemX",
      img: chemistry,
      description: `This project tests users by having them create molecules and compounds 
      from the Periodic Table of Elements using Augmented Reality.`,
      creators: "Bryan Lee, Joshua Chen, Steven Chan",
      videoUrl: "https://www.youtube.com/embed/4WehCnpY7NU?si=gmjw5GIRG4wFbTPH"
    },
    {
      id: 4,
      title: "Newton's Pinball",
      img: pinball,
      description: `This project showcases the forces of physics acting on a pinball machine.`,
      creators: "C. Fortino Flores, Jeffrey McDonald",
      videoUrl: "https://www.youtube.com/embed/lFK2Na9VTQU?si=fK8I5PG8yzljAIPw"
    },
    {
      id: 5,
      title: "Combination and Permutation",
      img: combination,
      description: `This project tests users on their understanding of combinations 
      and permutations by having them solve puzzles to escape trapped rooms.`,
      creators: "Justin Tsai, Nam Huynh, Justen Minamitani",
      videoUrl: "https://www.youtube.com/embed/vLvpxc0-Cl4?si=FH6PifsYZWdOWhr2"
    },
    {
      id: 6,
      title: "Wildfire",
      img: wildfire,
      description: `This project simulates a scenario in which the user is caught 
      in the middle of a wildfire to see what courses of action the user takes.`,
      creators: "Donovan Rush, Ismail Abbas",
      videoUrl: "https://www.youtube.com/embed/NPDaAG-j_Po?si=djw-8_HcpnLvHglA"
    },
    {
      id: 7,
      title: "Dijkstra's Maze Solver",
      img: dijkstra,
      description: `This project is an Augmented Reality Maze Solver that uses depth-first search to 
      randomly generate a maze, and Dijkstra's algorithm to solve the created maze.`,
      creators: "Taeten Prettyman, Phillip Kasteiner, Jaeseung Lee, David Escobedo",
      videoUrl: "https://www.youtube.com/embed/4vsxA65M5R4?si=oLJ9rK-pm62RKZ0d"
    },
    {
      id: 8,
      title: "Data Structures",
      img: dataStructures,
      description: `This project helps students learn Linked Lists, Stacks, and Queues by 
      visualizing the properties and functions of these data structures.`,
      creators: "Je'Don Carter, Zachary Rank",
      videoUrl: "https://www.youtube.com/embed/ilKeqFNM92M?si=EXUY9ZJLeP-xFOT3"
    },
    {
      id: 9,
      title: "Red Dwarf",
      img: reddwarf,
      description: `This is a game in which the player must survive the onslaught of alien 
      armadas by shooting down waves of alien ships while navigating through an asteroid field.`,
      creators: "Kyle Turchik, Colin Trotter, John Vincent Canalita, Jeremy Kleve, Rocky Qiu, Mirza Hasan Baig, Zach Yun",
      videoUrl: ""
    },
    {
      id: 10,
      title: "Break Time",
      img: breaktime,
      description: `This is a game in which the player must break as many household 
      items as possible within a short period of time.`,
      creators: "N/A",
      videoUrl: "https://www.youtube.com/embed/xu4HoGcjBXY?si=WWPZq8bnuum_3_Ai"
    },
    {
      id: 10,
      title: "Logic Gates",
      img: logicgates,
      description: `This project helps students visualize and learn basic computer logic gates and component. 
      Users can also create their own circuits to make more complex devices like a decoder or multiplexer.`,
      creators: "Je'Don Carter, Zachary Rank",
      videoUrl: "https://www.youtube.com/embed/UB5cy5j8a3g?si=bg1xVF86bcO1sNUV"
    },
    {
      id: 11,
      title: "Rubix's Cube",
      img: rubiks,
      description: `This project is a simulation of a rubik’s cube designed for VR platforms with competition 
      and speed-cubing being influential on the application.`,
      creators: "Steven Turner, Victor Ruiz, Ryan Woyshner, Feng Xie",
      videoUrl: "https://www.youtube.com/embed/ERuxuxaNa-Q?si=i-YUcflUDL2167vn"
    }
  ];

  return (
    <>
      <p className="font-rubik db-textcolor display-5 fw-bold pt-3">
        Archived Projects (2017-2021)
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
