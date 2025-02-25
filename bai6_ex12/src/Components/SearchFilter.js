import React, { useState } from "react";
import { Form, Container, Row, Col, Card } from "react-bootstrap";

const products = [
  { id: 1, name: "vở", color: "Xanh", year: 2023 },
  { id: 2, name: "Bút", color: "Đỏ", year: 2022 },
  { id: 3, name: "tẩy", color: "tím", year: 2021 },
  { id: 4, name: "sách", color: "vàng", year: 2023 },
  { id: 5, name: "Thước", color: "hồng", year: 2020 },
];

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");


  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h3 className="text-center">Tìm kiếm sản phẩm</h3>
          <Form.Control
            type="text"
            placeholder="Nhập tên sản phẩm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-3"
          />
        </Col>
      </Row>

      <Row>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Col md={4} key={product.id} className="mb-3">
              <Card className="shadow-lg">
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    <strong>Màu:</strong> {product.color} <br />
                    <strong>Năm sản xuất:</strong> {product.year}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center">Không tìm thấy sản phẩm nào!</p>
        )}
      </Row>
    </Container>
  );
}

export default SearchFilter;