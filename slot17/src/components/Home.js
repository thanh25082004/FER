import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow text-center" style={{ width: "400px", borderRadius: "12px" }}>
        <h2>🏠 Trang Chủ</h2>
        <p>Chào mừng bạn đến với hệ thống quản lý bài viết!</p>
        <Button variant="primary" className="w-100" onClick={() => navigate("/login")}>Bắt đầu</Button>
      </Card>
    </Container>
  );
};

export default Home;
