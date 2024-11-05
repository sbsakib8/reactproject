import React from 'react'
import "./Navber.css"
function Navber() {
  return (
    <>
   <nav class="navbar navbar-expand-lg navbar-light bg_color">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="#">SB Sakib</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav text-white mx-auto">
        <li class="nav-item mx-2 hove">
          <a class="nav-link text-white active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link text-white" href="#">About</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link text-white" href="#">service</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link disabled text-white" href="#" tabindex="-1" aria-disabled="true">protfolio</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>

    
  )
}

export default Navber