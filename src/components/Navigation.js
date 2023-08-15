import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { Header } from "./Header";

export const Navigation = () => {
  return (
    <nav className="Navigation">
      <Header />

      <div className="nav-links">
        <ul className="nav-list">
          <li className="nav-list-item">
            <NavLink to="/">home</NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink to="/about">about</NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink to="/projects">projects</NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink to="/contact">contact me</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
