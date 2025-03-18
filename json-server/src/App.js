import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));

    fetch("http://localhost:3000/useraccounts")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary">Danh sách bài viết</h1>
      <ul className="list-group mb-4">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            <h5>{post.title}</h5>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>

      <h1 className="text-center text-success">Danh sách người dùng</h1>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex align-items-center">
            <img src={user.avatar} alt={user.username} className="rounded-circle me-3" width="50" />
            <div>
              <h5>{user.username}</h5>
              <p>{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
