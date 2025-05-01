import React from "react";
import "./Header.css"


export default function Header() {
  return (
    <nav class="navbar"style={{ backgroundColor: 'grey' }} data-bs-theme="dark">
      <div class="container">
        <a class="navbar-brand" href="#">
          Hamid's Portfolio
        </a>
        <ul class="nav justify-content-end">
        <ul class="nav nav-underline">
  <li class="nav-item">
    <a class="nav-link Home" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link Education" href="#">Education</a>
  </li>
  <li class="nav-item">
    <a class="nav-link Skills" href="#">Skills</a>
  </li>
</ul>
</ul>
      </div>
    </nav>
  );
}
