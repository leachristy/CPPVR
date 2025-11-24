import React from 'react'
import { Container, Row, Col, Stack, Image, Nav, NavLink} from "react-bootstrap"

export const Footer = () => {
  return (
    <>
    <footer>
        <Container fluid>
            <Row className='bg-blue-950 text-white'>
                <Col>
                    col 1
                </Col>
                <Col> 
                    <Nav className='flex-col'>
                        <NavLink>About</NavLink>
                        <NavLink>People</NavLink>
                        <NavLink>Technology</NavLink>
                        <NavLink>Contact Us</NavLink>
                    </Nav>
                </Col>
                <Col>
                    col 3
                </Col>
            </Row>
        </Container>
    </footer>
    </>
  )
}
