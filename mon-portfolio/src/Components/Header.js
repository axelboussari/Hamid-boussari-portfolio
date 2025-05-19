import React from "react";
import "./Header.css"


export default function Header() {
  return (
    <nav class="navbar"style={{ backgroundColor: '#e9e8e6', fontFamily: 'Orbitron' }} data-bs-theme="dark">
      <div class="row justifiy-content-start">
          <div class="col justify-content-around">
         {/* <i class="bi bi-github"></i> */}
         </div>
        <div class="col-10">
          <a>OLAWOLE BOUSSARI</a>
        </div>
      </div>
      <div  class="row justifiy-content-center">
       <ul class="nav justify-content-center nav nav-underline">
        <li class="nav-item">
    <a class="nav-link" aria-current="page" href="#">Home</a>
  </li>
   <li class="nav-item">
    <a class="nav-link" href="#">About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Resume</a>
  </li>
   <li class="nav-item">
    <a class="nav-link" href="#">Projects</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contact</a>
  </li>
       </ul>
      </div>
      <div class="row justifiy-content-end">
        <div class="col justify-content-around">
        <a href="https://www.linkedin.com/in/hamid-boussari-722873241/" target="_blank"><i class="bi bi-linkedin"></i></a>
        </div>
         <div class="col justify-content-around">
          <a href="https://github.com/axelboussari" target="_blank"><i class="bi bi-github"></i></a>
         </div>
           <div class="col justify-content-around">
         <a href="mailto:axel.boussari@gmail.com" target="_blank"><i class="bi bi-envelope-paper-fill"></i></a>
         </div>
           <div class="col justify-content-around">
         {/* <i class="bi bi-github"></i> */}
         </div>
      </div>
    </nav>
    
  );
}
