import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, Button, Container, Spinner } from "react-bootstrap";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/Products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) 
    return <div className="text-center mt-5"><Spinner animation="border" variant="primary" /></div>;

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: "#ffe6f2" }}>
      <Card className="shadow-lg p-4" style={{ width: '28rem' }}>
        <Card.Img 
          variant="top" 
          src={process.env.PUBLIC_URL + product.image} 
          alt={product.name} 
          className="p-3 rounded"
          onError={(e) => e.target.src = process.env.PUBLIC_URL + "/images/default.png"} 
        />
        <Card.Body>
          <Card.Title className="fw-bold text-center">{product.name}</Card.Title>
          <Card.Text><strong>Category:</strong> {product.category}</Card.Text>
          <Card.Text><strong>Price:</strong> ${product.description}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
          <Button 
            variant="secondary" 
            className="w-100 mt-3"
            onClick={() => navigate("/products")}
          >
            Back to Products
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductDetail;