import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Card, Button, Row, Col, Form } from "react-bootstrap";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, ] = useState("default");

  useEffect(() => {
    axios.get("http://localhost:3000/Products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Lọc sản phẩm theo tìm kiếm
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sắp xếp sản phẩm theo giá (loại bỏ ký hiệu $ nếu có)
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = parseFloat(a.price.toString().replace(/[^0-9.]/g, ""));
    const priceB = parseFloat(b.price.toString().replace(/[^0-9.]/g, ""));
    
    if (sortOption === "priceAsc") return priceA - priceB;
    if (sortOption === "priceDesc") return priceB - priceA;
    return 0;
  });

  return (
    <Container className="min-vh-100 py-4">
      <h2 className="text-center mb-4">Laptop List</h2>
      
      {/* Thanh tìm kiếm và sắp xếp */}
      <Row className="mb-3">
        <Col md={15}>
          <Form.Control
            type="text"
            placeholder="Search product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
      </Row>
      
      


      <Row className="g-4">
        {sortedProducts.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="shadow-sm">
              <Card.Img 
                variant="top" 
                src={product.image} 
                alt={product.brand} 
                style={{ height: "200px", objectFit: "cover" }} 
                onError={(e) => e.target.src = "/images/default.png"} 
              />
              
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text className="text-primary fw-bold">${parseFloat(product.price.toString().replace(/[^0-9.]/g, ""))}</Card.Text>
                <Link to={`/products/${product.id}`}>
                  <Button variant="primary" className="w-100">View Details</Button>
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