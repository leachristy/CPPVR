import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../index.css";

export const Message = () => {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center gap-4 mb-4">
        {/* Get in Touch Card */}
        <Card className="card-custom-director p-4 text-center" style={{ minWidth: "300px", maxWidth: "400px" }}>
          <Card.Title className="fw-bold font-work mb-3">Get in Touch</Card.Title>
          <Card.Text className="font-work text-start">
            <p className="fw-bold mb-1">Location</p>
            Computer Science Department <br />
            California State Polytechnic University, Pomona <br />
            3801 W Temple Ave <br />
            Pomona, CA 91768
            <p className="fw-bold mt-3 mb-1">Email</p>
            Director: mihusain@cpp.edu <br />
            Co-Director: ndavarpanah@cpp.edu
            <p className="fw-bold mt-3 mb-1">Lab Hours</p>
            Monday - Friday: 9:00 AM - 5:00 PM <br />
            By appointment only
          </Card.Text>
        </Card>

        {/* Send Us a Message Card */}
        <Card className="card-custom-director p-4 text-center" style={{ minWidth: "300px", maxWidth: "400px" }}>
          <Card.Title className="fw-bold font-work mb-3">Send Us a Message</Card.Title>
          <Card.Body>
            <Form
              method="POST"
              action="https://formspree.io/mihusain@cpp.edu"
            >
              <input type="hidden" name="_subject" value="Contact request from CPPVR.org" />

              {/* Name Field */}
              <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" name="name" placeholder="Your Name" required />
              </Form.Group>

              {/* Email Field */}
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control type="email" name="_replyto" placeholder="Your Email" required />
              </Form.Group>

              {/* Subject Field */}
              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Control type="text" name="subject" placeholder="Subject" required />
              </Form.Group>

              {/* Message Field */}
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Control as="textarea" name="message" placeholder="Your Message" rows={4} required />
              </Form.Group>

              <Button type="submit" variant="primary" className="btn-custom">
                Send
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>

      
      <div className="d-flex justify-content-center">
        <Card className="card-custom-director p-4 text-center" >
          <Card.Title className="fw-bold font-work mb-3">Interested in Joining?</Card.Title>
          <Card.Text className="font-work">
            We're always looking for motivated students interested in VR/AR development. Contact us to learn about research opportunities and lab assistant positions.
          </Card.Text>
        </Card>
      </div>
    </>
  );
};
