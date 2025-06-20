import React from "react";
import "./Header.css"


export default function Header() {
  return (
   <nav class="navbar navbar-expand-lg bg-body-tertiary  shadow-xl shadow-cyan-500/50" style={{ backgroundColor: '#e9e8e6', fontFamily: 'Orbitron' }}>
  <div class="container-fluid">
    <a class="navbar-brand me-auto" href="#">OLAWOLE BOUSSARI</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-center flex-grow-1 pe-3 nav nav-underline">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-lg-2" href="#">ABOUT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-lg-2" href="#">EDUCATION</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-lg-2" href="#">PROJECTS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-lg-2" href="#">CONTACTS</a>
          </li>
        </ul>
        <div className="d-flex align-items-center gap-3">
  <a href="https://www.linkedin.com/in/hamid-boussari-722873241/" target="_blank" rel="noreferrer">
    <i className="bi bi-linkedin"></i>
  </a>
  <a href="https://github.com/axelboussari" target="_blank" rel="noreferrer">
    <i className="bi bi-github"></i>
  </a>
  <a href="mailto:axel.boussari@gmail.com" target="_blank" rel="noreferrer">
    <i className="bi bi-envelope-paper-fill"></i>
  </a>
   </div>
      </div>
</div>
  </div>
</nav>
  );
}
