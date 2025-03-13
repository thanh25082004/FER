import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, ListGroup, Spinner } from 'react-bootstrap';

function Post() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/posts.json')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => console.error('Error loading posts:', error));
  }, []);

  return (
    <Container className="mt-4">
      <h2>Post List</h2>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <ListGroup>
          {posts.map(post => (
            <ListGroup.Item key={post.id}>
              <Link to={`/post/${post.id}`} className="text-decoration-none">
                {post.title}
              </Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
}

export default Post;
