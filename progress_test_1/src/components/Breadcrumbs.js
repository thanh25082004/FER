import React from "react";
import { Breadcrumb } from "react-bootstrap";

function Breadcrumbs({ currentPage }) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>{currentPage}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default Breadcrumbs;
