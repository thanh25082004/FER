import React, { useEffect, useState } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState(""); // Thêm state để lưu từ khóa tìm kiếm
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => setPosts(res.data));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa bài viết này?")) {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    }
  };

  // Lọc danh sách bài viết theo từ khóa tìm kiếm
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container style={{ backgroundColor: "#ffc0cb", padding: "20px", borderRadius: "10px" }}>
      <h2 className="text-center my-3">📄 Quản lý Bài Viết</h2>

      {/* Ô tìm kiếm */}
      <Form className="mb-3 ">
        <Form.Control
          type="text"
          placeholder="🔍 Nhập từ khóa tìm kiếm..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>

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
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
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
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center text-muted">
                ❌ Không tìm thấy bài viết nào
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default PostList;
