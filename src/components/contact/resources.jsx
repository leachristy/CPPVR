import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const Resources = () => {
  const cardBaseStyle = {
    minWidth: "300px",
    maxWidth: "380px",
    border: "none",
    borderRadius: "20px",
    padding: "2rem 1.75rem",
    backgroundColor: "#ffffff",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const cardHoverStyle = {
    transform: "translateY(-6px)",
    boxShadow: "0 16px 40px rgba(0, 0, 0, 0.12)",
  };

  const titleStyle = {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: "700",
    fontSize: "1.35rem",
    marginBottom: "0.75rem",
  };

  const textStyle = {
    fontFamily: "Work Sans, sans-serif",
    fontSize: "0.95rem",
    lineHeight: "1.6",
    opacity: 0.85,
  };

  const ResourceCard = ({ title, text, link, buttonText }) => {
    const [hover, setHover] = React.useState(false);

    return (
      <Card
        className="text-center"
        style={{ ...cardBaseStyle, ...(hover ? cardHoverStyle : {}) }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div>
          <Card.Title style={titleStyle}>{title}</Card.Title>
          <Card.Text style={textStyle}>{text}</Card.Text>
        </div>

        {/* Button untouched */}
        <Button
          as={Link}
          to={link}
          className="btn-custom mt-4"
        >
          {buttonText}
        </Button>
      </Card>
    );
  };

  return (
    <>
      <p className="font-rubik db-textcolor display-5 fw-bold mt-4 mb-4 text-center">
        Additional Resources
      </p>

      <div className="d-flex flex-wrap justify-content-center gap-4 mb-4">
        <ResourceCard
          title="Visit Our Projects"
          text="Browse our complete archive of VR/AR projects"
          link="/projects"
          buttonText="VIEW PROJECTS"
        />

        <ResourceCard
          title="Meet Our Team"
          text="Learn about our directors and student researchers"
          link="/people"
          buttonText="VIEW TEAM"
        />

        <ResourceCard
          title="Our Technology"
          text="Explore the VR/AR platforms we use"
          link="/technology"
          buttonText="VIEW TECH"
        />
      </div>
    </>
  );
};
