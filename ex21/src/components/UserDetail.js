import React from "react";
import { useParams } from "react-router-dom";
import { users } from "../data";

function UserDetail() {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) return <h2>User not found</h2>;

  return (
    <div className="container">
      <h2>{user.firstName} {user.lastName}</h2>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default UserDetail;
