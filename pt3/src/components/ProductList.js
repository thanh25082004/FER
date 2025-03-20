import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/Products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container className="min-vh-100 py-4" style={{ backgroundColor: "#ffe6f2" }}>
      <h2 className="text-center mb-4" style={{ color: "#ff1493" }}>Product List</h2>
      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="shadow-sm" style={{ borderColor: "#ff69b4" }}>
              <Card.Img 
                variant="top" 
                src={product.image} 
                alt={product.name} 
                style={{ height: "200px", objectFit: "cover" }} 
                onError={(e) => e.target.src = "/images/default.png"} // Ảnh mặc định nếu bị lỗi
              />
              <Card.Body>
                <Card.Title style={{ color: "#ff1493" }}>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text className="fw-bold" style={{ color: "#ff69b4" }}>{product.price}</Card.Text>
                <Link to={`/products/${product.id}`}>
                  <Button className="w-100" style={{ backgroundColor: "#ff69b4", borderColor: "#ff1493" }}>
                    View Details
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
