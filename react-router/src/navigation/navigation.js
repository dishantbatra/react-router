import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
export default function Navigation() {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/Add">Add Employee</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/PageNotFound">Page Not Found</Link>
        </li>
      </ul>
    </nav>
  );
}
