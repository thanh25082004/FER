import React, { useReducer, useState } from "react";
import { Button, Form, Container, Row, Col, ListGroup, InputGroup, Card } from "react-bootstrap";

function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((item) => item.id !== action.id) };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.item.id ? { ...item, name: action.item.name } : item
        ),
      };
    case "SORT_ITEMS":
      return {
        ...state,
        items: [...state.items].sort((a, b) => {
          if (action.criteria === "alphabetical") {
            return a.name.localeCompare(b.name);
          } else if (action.criteria === "created") {
            return a.id - b.id;
          }
          return 0;
        }),
      };
    case "FILTER_ITEMS":
      return { ...state, filter: action.query };
    default:
      return state;
  }
}

const initialState = {
  items: [],
  filter: "",
};

function ItemList() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState("");
  const [editItemId, setEditItemId] = useState(null);
  const [editItemName, setEditItemName] = useState("");

  const handleAddItem = () => {
    if (newItemName) {
      const newItem = { id: Date.now(), name: newItemName };
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName("");
    }
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const handleEditItem = (id, name) => {
    setEditItemId(id);
    setEditItemName(name);
  };

  const handleSaveEdit = () => {
    dispatch({ type: "EDIT_ITEM", item: { id: editItemId, name: editItemName } });
    setEditItemId(null);
    setEditItemName("");
  };

  const filteredItems = state.items.filter((item) =>
    item.name.toLowerCase().includes(state.filter.toLowerCase())
  );

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6} className="offset-md-3">
          <Card
            className="shadow p-4"
            style={{ backgroundColor: "#ffe4e1", border: "2px solid #ff69b4" }}
          >
            <h2 className="text-center mb-4" style={{ color: "#ff1493", fontWeight: "bold" }}>
              Manage Items
            </h2>

            {/* Input thêm item */}
            <Form>
              <Form.Group controlId="formItem">
                <Form.Label style={{ color: "#ff69b4", fontWeight: "bold" }}>Enter Item:</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                    placeholder="Enter item name"
                    style={{ border: "1px solid #ff69b4", backgroundColor: "#fff0f5" }}
                  />
                  <Button
                    style={{ backgroundColor: "#ff69b4", border: "none", color: "white" }}
                    onClick={handleAddItem}
                  >
                    Add
                  </Button>
                </InputGroup>
              </Form.Group>
            </Form>

            {/* Ô tìm kiếm */}
            <Form.Group controlId="filterItems" className="mt-3">
              <Form.Control
                type="text"
                placeholder="Filter items..."
                onChange={(e) => dispatch({ type: "FILTER_ITEMS", query: e.target.value })}
                style={{ border: "1px solid #ff69b4", backgroundColor: "#fff0f5" }}
              />
            </Form.Group>

            {/* Nút sắp xếp */}
            <div className="d-flex justify-content-between mt-3">
              <Button
                style={{ backgroundColor: "#ff69b4", border: "none", color: "white" }}
                onClick={() => dispatch({ type: "SORT_ITEMS", criteria: "alphabetical" })}
              >
                Sort A-Z
              </Button>
              <Button
                style={{ backgroundColor: "#db7093", border: "none", color: "white" }}
                onClick={() => dispatch({ type: "SORT_ITEMS", criteria: "created" })}
              >
                Sort by Time
              </Button>
            </div>

            {/* Danh sách items */}
            <h3 className="mt-4 text-center" style={{ color: "#ff1493" }}>Item List</h3>
            <ListGroup className="mt-3">
              {filteredItems.map((item) => (
                <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                  {editItemId === item.id ? (
                    <InputGroup>
                      <Form.Control
                        type="text"
                        value={editItemName}
                        onChange={(e) => setEditItemName(e.target.value)}
                        style={{ border: "1px solid #ff69b4", backgroundColor: "#fff0f5" }}
                      />
                      <Button
                        style={{ backgroundColor: "#28a745", border: "none", color: "white" }}
                        onClick={handleSaveEdit}
                      >
                        Save
                      </Button>
                    </InputGroup>
                  ) : (
                    <>
                      <span className="fw-bold" style={{ color: "#ff1493" }}>{item.name}</span>
                      <div>
                        <Button
                          style={{ backgroundColor: "#ff1493", border: "none", color: "white" }}
                          size="sm"
                          className="me-2"
                          onClick={() => handleEditItem(item.id, item.name)}
                        >
                          Edit
                        </Button>
                        <Button
                          style={{ backgroundColor: "#dc3545", border: "none", color: "white" }}
                          size="sm"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </>
                  )}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemList;
