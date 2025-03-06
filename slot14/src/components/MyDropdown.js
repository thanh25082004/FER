import React, { useState } from "react";
import { Dropdown, DropdownButton, Container, Card } from "react-bootstrap";

function MyDropdown() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <Container className="text-center mt-4">
      <Card>
        <Card.Body>
          <DropdownButton title={selectedItem || "Select an item"} onSelect={(e) => setSelectedItem(e)}>
            <Dropdown.Item eventKey="Item 1">Item 1</Dropdown.Item>
            <Dropdown.Item eventKey="Item 2">Item 2</Dropdown.Item>
            <Dropdown.Item eventKey="Item 3">Item 3</Dropdown.Item>
          </DropdownButton>
          {selectedItem && <p className="mt-2">You selected: {selectedItem}</p>}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MyDropdown;
