import React from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import DishList from "./components/DishList";
import DishDetail from "./components/DishDetail";

function RoutesConfig() {
  return (
    <Routes>
      <Route path="/users" element={<UserList />} />
      <Route path="/users/:id" element={<UserDetail />} />
      <Route path="/dishes" element={<DishList />} />
      <Route path="/dishes/:id" element={<DishDetail />} />
    </Routes>
  );
}

export default RoutesConfig;
