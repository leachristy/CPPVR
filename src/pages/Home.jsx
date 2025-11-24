import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';

export const Home = () => {
  return (
    <>
      {/* Hero Section */}

      <Container fluid className="d-flex"
      style = {{
        backgroundImage: "url('src/assets/VR Lab Header.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "70vh",
        minWidth: "100%"
      }}>
        <Row className="w-100 text-center justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
          <Col>
            <h1 className="fw-bold display-4 display-md-3 display-lg-2 text-white" style={{ fontFamily: '"Rubik 80s Fade", sans-serif' }}>Immersive Learning Through VR</h1>
              <p className="lead mt-3">
                  Pioneering VR/AR education research since 2017
              </p>
              <p className="lead mt-3">
                  Creating innovative virtual worlds for computer science education
              </p>
              <Button className="mt-4" variant="primary" >
                EXPLORE OUR PROJECTS
              </Button>

          </Col>
        </Row>
      </Container>

      {/* Featured Projects Section */}
      <div className="border-4 border-black text-center p-2 mt-5">
        <p className="text-xl font-semibold mb-4">Featured Projects</p>

        <div className="d-flex justify-content-center gap-3 mt-5 flex-wrap">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                This is some text inside a React Bootstrap card.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Another Card</Card.Title>
              <Card.Text>
                Cards can have images, text, buttons, and more.
              </Card.Text>
              <Button variant="success">Click me</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Another Card</Card.Title>
              <Card.Text>
                Cards can have images, text, buttons, and more.
              </Card.Text>
              <Button variant="success">Click me</Button>
            </Card.Body>
          </Card>

        </div>
      </div>

      {/* Statistics Section */}
      <div className="border-4 border-black text-center p-2 mt-5">
        <p className="text-xl font-bold">
          Lab at a Glance
        </p>

        <div className="d-flex justify-content-center gap-3 mt-5 flex-wrap">
        <Card style = {{ width: '15rem'}}>
          <Card.Title>2017</Card.Title>
          <Card.Text>Established</Card.Text>
        </Card>

        <Card style = {{ width: '15rem'}}>
          <Card.Title>20+</Card.Title>
          <Card.Text>Projects</Card.Text>
        </Card>

        <Card style = {{ width: '15rem'}}>
          <Card.Title>50+<br /> </Card.Title>
          <Card.Text>Students</Card.Text>
        </Card>

        <Card style = {{ width: '15rem'}}>
          <Card.Title>4+<br /> </Card.Title>
          <Card.Text>VR Platforms</Card.Text>
        </Card>
        </div>
      </div>

      {/* Visual Hierarchy */}
      <div className="border-4 border-black text-center p-2 mt-5 flex flex-row justify-between items-center">
        <img src='src/assets/img_placeholder.png' className="w-6xl p-4"/>

        <div className='text-left'>
          <h1>About the Lab</h1>
          <p>The CPP Virtual Reality Lab applies virtual and augmented reality
          to enhance student learning in computer science education. Since 2017, 
          we've been creating immersive experiences that allows students to step 
          code and interact with digital concepts in revolutionary ways. 
          </p>
          <Button variant="primary" className="mt-3">
          LEARN MORE ABOUT US
          </Button>
        </div>
      </div>

    </>
  );
};
