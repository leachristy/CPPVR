import React from "react";
import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // <- Correct NavLink

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#373e4f" }} className="text-white py-4">
      <Container className="text-center">
        <h5 className="fw-bold mb-3">CPP VIRTUAL REALITY LAB</h5>

        <Nav className="justify-content-center flex-column flex-sm-row mb-3">
          <NavLink className="text-white mx-2 my-1 !no-underline" style={{ fontFamily: '"Work Sans", sans-serif' }} to="/projects">Projects</NavLink>
          <NavLink className="text-white mx-2 my-1 !no-underline" style={{ fontFamily: '"Work Sans", sans-serif' }} to="/about">About</NavLink>
          <NavLink className="text-white mx-2 my-1 !no-underline" style={{ fontFamily: '"Work Sans", sans-serif' }} to="/people">People</NavLink>
          <NavLink className="text-white mx-2 my-1 !no-underline" style={{ fontFamily: '"Work Sans", sans-serif' }} to="/technology">Technology</NavLink>
          <NavLink className="text-white mx-2 my-1 !no-underline" style={{ fontFamily: '"Work Sans", sans-serif' }} to="/contact">Contact</NavLink>
        </Nav>

        <p className="mb-0">© 2024 California State Polytechnic University, Pomona</p>
      </Container>
    </footer>
  );
};
