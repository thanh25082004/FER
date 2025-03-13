import React from "react";
import { Link } from "react-router-dom";
import { users } from "../data";

function UserList() {
  return (
    <div className="container">
      <h2>User List</h2>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            <Link to={`/users/${user.id}`}>
              {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
