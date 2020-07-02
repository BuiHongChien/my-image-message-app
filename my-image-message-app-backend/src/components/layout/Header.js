import React from "react";
import { Link } from "react-router-dom";
import AuthOption from "../auth/AuthOption";

export default function Header() {
  return (
    <header id="header">
      <Link className="title" to="/">
        <h1>Image Message App</h1>
      </Link>
      <AuthOption />
    </header>
  );
}
