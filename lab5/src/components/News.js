import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./News.css"; // File CSS riêng

const newsData = [
  {
    title: "Woman bakes expletive-laden pies to ‘get a rise’ out of her grandmother in annual tradition",
    description: "“What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition,” wrote Jess Lydon.",
    image: "images/event-1.jpg",
    link: "#",
  },
  {
    title: "Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans",
    description: "Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.",
    image: "images/event-2.jpg",
    link: "#",
  },
  {
    title: "Burger King is testing a new breakfast sandwich",
    description: "This is a win for the flatbread fans.",
    image: "images/event-3.jpg",
    link: "#",
  },
  {
    title: "Popeyes permanently adds chicken wings to its menu",
    description: "And you can get ‘em in five different flavors.",
    image: "images/event-4.jpg",
    link: "#",
  },
  {
    title: "Top salmon with a sizzling mix of aromatics and spices",
    description: "Tadka is a ubiquitous South Asian technique that adds a dramatic last-minute coat of flavor.",
    image: "images/event-5.jpg",
    link: "#",
  },
  {
    title: "80 Christmas dinner ideas for the ultimate holiday feast",
    description: "Build the perfect Christmas menu with these delicious recipes.",
    image: "images/event-6.jpg",
    link: "#",
  },
  {
    title: "How to make the easiest prime rib roast for the holidays",
    description: "Use these tips and tricks to make a juicy and amazingly delicious prime rib roast.",
    image: "images/event-7.jpg",
    link: "#",
  },
  {
    title: "Turn leftover turkey into a flavorful Waldorf salad",
    description: "This light, bright turkey salad is the best post-Thanksgiving lunch.",
    image: "images/event-8.jpg",
    link: "#",
  },
];

const News = () => {
  return (
    <Container className="news-container">
      <h2 className="news-title">News Category</h2>
      <Row>
        {newsData.map((news, index) => (
          <Col key={index} md={3}>
            <Card className="news-card">
              <Card.Img variant="top" src={news.image} />
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>{news.description}</Card.Text>
                <a href={news.link} className="news-link">
                  Read More
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default News;