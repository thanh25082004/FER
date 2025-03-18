import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => setPosts(res.data));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa bài viết này?")) {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  return (
    <Container>
      <h2 className="text-center my-3">📄 Quản lý Bài Viết</h2>
      <Button variant="success" className="mb-3" onClick={() => navigate("/create")}>
        ✍️ Tạo bài viết mới
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tiêu đề</th>
            <th>Nội dung</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={post.id}>
              <td>{index + 1}</td>
              <td>{post.title}</td>
              <td>{post.content}</td>
              <td>
                <Button variant="warning" size="sm" className="me-2" onClick={() => navigate(`/edit/${post.id}`)}>
                  ✏️ Chỉnh sửa
                </Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(post.id)}>
                  🗑️ Xóa
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default PostList;