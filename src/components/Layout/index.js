import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";

import Routes from "../../Routes";

import { Nav } from "./styles";

export default function Layout({ onToggletheme, selectedTheme }) {
  return (
    <BrowserRouter>
      <Header onToggletheme={onToggletheme} selectedTheme={selectedTheme} />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/448444">Posts</Link>
      </Nav>
      <Routes />
      <Footer onToggletheme={onToggletheme} selectedTheme={selectedTheme} />
    </BrowserRouter>
  );
}
