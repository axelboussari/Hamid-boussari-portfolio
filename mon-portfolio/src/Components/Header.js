import React from "react";
import "./Header.css"


export default function Header() {
  return (
    <nav class="navbar"style={{ backgroundColor: 'grey', fontFamily: 'Orbitron' }} data-bs-theme="dark">
      <div class="container">
        <a class="navbar-brand" href="#">
          Hamid's Portfolio
        </a>
        <ul class="nav justify-content-end">
        <ul class="nav nav-underline">
  <li class="nav-item">
    <a class="nav-link Home" aria-current="page" style={{ color: 'white', fontFamily: 'Orbitron' }} href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link Education" href="#" style={{ color: 'white', fontFamily: 'Orbitron'}}>Education</a>
  </li>
  <li class="nav-item">
    <a class="nav-link Skills" href="#" style={{ color: 'white', fontFamily: 'Orbitron'}}>Skills</a>
  </li>
  <li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white', fontFamily: 'Orbitron' }}>
            Projects
          </a>
          <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Project 1</a></li>
          <li><a class="dropdown-item" href="#">Project 2</a></li>
          <li><a class="dropdown-item" href="#">Project 3</a></li>
          <li><a class="dropdown-item" href="#">Project 4</a></li>
          </ul>
  </li>
</ul>
</ul>
      </div>
    </nav>
  );
}
