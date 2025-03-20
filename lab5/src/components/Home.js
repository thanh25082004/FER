import React from "react";
import { Container, Row, Col, Navbar, Nav, Image, Carousel } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" className="shadow">
        <Container>
          <Navbar.Brand href="/">Food Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/news">News</Nav.Link>
              <Nav.Link href="/quiz">Quiz</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="images/slide1.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="images/slide2.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="images/slide3.jpg" alt="Second slide" />
      </Carousel.Item>

    </Carousel>

      {/* Danh mục hình ảnh */}
      <Container className="mt-4 text-center">
        <Row className="justify-content-center">
          <Col xs={4} md={2}>
            <Image src="/images/menu-01.jpg" roundedCircle className="menu-item" />
          </Col>
          <Col xs={4} md={2}>
            <Image src="/images/menu-02.jpg" roundedCircle className="menu-item" />
          </Col>
          <Col xs={4} md={2}>
            <Image src="/images/menu-03.jpg" roundedCircle className="menu-item" />
          </Col>
          <Col xs={4} md={2}>
            <Image src="/images/menu-04.jpg" roundedCircle className="menu-item" />
          </Col>
          <Col xs={4} md={2}>
            <Image src="/images/menu-05.jpg" roundedCircle className="menu-item" />
          </Col>
          <Col xs={4} md={2}>
            <Image src="/images/menu-06.jpg" roundedCircle className="menu-item" />
          </Col>
        </Row>
      </Container>

      {/* Tiêu đề */}
      <Container className="text-center mt-4">
        <h2 className="home-title">This is Home Page</h2>
      </Container>
    </>
  );
};

export default Home;
