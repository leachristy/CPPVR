import React from "react";
import "../../index.css";

export const Timeline = () => {
  return (
    <>

    {/* Our Journey Section */}
<p className="font-rubik db-textcolor display-5 fw-bold pt-3 text-center">
  Our Journey
</p>

<div
  style={{
    maxWidth: "900px",
    margin: "3rem auto",
    position: "relative",
    padding: "0 1rem",
  }}
>
  {/* Center Line */}
  <div
    style={{
      position: "absolute",
      top: 0,
      bottom: 0,
      left: "50%",
      width: "3px",
      backgroundColor: "#d1d5db",
      transform: "translateX(-50%)",
    }}
  />

  {[
    {
      year: "2017",
      title: "Lab Founded",
      text:
        "The CPP Virtual Reality Lab was established to explore applications of VR/AR in computer science education.",
    },
    {
      year: "2018–2020",
      title: "Early Projects",
      text:
        "First generation of VR games and educational experiences developed.",
    },
    {
      year: "2021–2023",
      title: "Expansion",
      text:
        "Lab grows to include training simulators and expanded technology platforms.",
    },
    {
      year: "2024–Present",
      title: "Continued Innovation",
      text:
        "Focus on cutting-edge VR/AR applications in education and training.",
    },
  ].map((item, index) => (
    <div
      key={index}
      style={{
        display: "flex",
        justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
        marginBottom: "3rem",
        position: "relative",
      }}
    >
      {/* Dot */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "24px",
          width: "14px",
          height: "14px",
          backgroundColor: "#373e4f",
          borderRadius: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      />

      {/* Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "380px",
          background: "#ffffff",
          borderRadius: "16px",
          padding: "1.5rem",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        }}
      >
        <p
          className="font-work fw-bold db-textcolor"
          style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}
        >
          {item.year}
        </p>
        <p
          className="font-work fw-bold"
          style={{ fontSize: "1rem", marginBottom: "0.5rem" }}
        >
          {item.title}
        </p>
        <p className="font-work" style={{ opacity: 0.85 }}>
          {item.text}
        </p>
      </div>
    </div>
  ))}
</div>


    </>
  );
};
