import React, { useState, useEffect } from "react";

const SearchPosts = () => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/posts")
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.content.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>Tìm Kiếm Bài Viết</h2>
            <input
                type="text"
                placeholder="Nhập từ khóa..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ padding: "10px", width: "50%" }}
            />
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {filteredPosts.length > 0 ? (
                    filteredPosts.map(post => (
                        <li key={post.id} style={{ padding: "10px", border: "1px solid #ddd", marginTop: "5px" }}>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                        </li>
                    ))
                ) : (
                    <p>Không tìm thấy kết quả</p>
                )}
            </ul>
        </div>
    );
};

export default SearchPosts;
