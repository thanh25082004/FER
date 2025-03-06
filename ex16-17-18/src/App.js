import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaMousePointer, FaSyncAlt, FaCameraRetro } from 'react-icons/fa';
import EventHandlingDemo from './components/EventHandlingDemo';
import RenderAndCommitDemo from './components/RenderAndCommitDemo';
import SnapshotDemo from './components/SnapshotDemo';

function App() {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="p-4 shadow-lg text-center rounded-4 app-container">
        <h1 className="text-dark mb-4">React Interactive Demos </h1>
        <Row className="g-4">
          <Col xs={12}>
            <Card className="shadow-sm border-0 text-center p-3 rounded-4 custom-card event-card">
              <Card.Body>
                <FaMousePointer size={40} className="icon" />
                <Card.Title className="mt-2">Event Handling</Card.Title>
                <EventHandlingDemo />
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12}>
            <Card className="shadow-sm border-0 text-center p-3 rounded-4 custom-card render-card">
              <Card.Body>
                <FaSyncAlt size={40} className="icon" />
                <Card.Title className="mt-2">Render & Commit</Card.Title>
                <RenderAndCommitDemo />
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12}>
            <Card className="shadow-sm border-0 text-center p-3 rounded-4 custom-card snapshot-card">
              <Card.Body>
                <FaCameraRetro size={40} className="icon" />
                <Card.Title className="mt-2">State as a Snapshot</Card.Title>
                <SnapshotDemo />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default App;
