import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Card, Form, Button } from "react-bootstrap";
import axios from "axios";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${id}`).then((res) => {
      setTitle(res.data.title);
      setContent(res.data.content);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/posts/${id}`, { title, content });
    navigate("/posts");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow" style={{ width: "400px", borderRadius: "12px" }}>
        <h3 className="text-center">📝 Chỉnh sửa bài viết</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Tiêu đề</Form.Label>
            <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nội dung</Form.Label>
            <Form.Control as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)} required />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">Cập nhật</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default EditPost;


