import React from "react";
import "./stylesheets/static.css";

class Navbar extends React.Component {
  render() {
    return (
      <>
      <header>
      <nav class="navbar navbar-expand-lg text-uppercase fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand text-light" href="#page-top">John Doe</a>
                <button class="navbar-toggler text-uppercase font-weight-bold text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse " id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mx-0 mx-lg-1 text-light"><a class="nav-link py-3 px-0 px-lg-3 rounded text-light" href="#portfolio">Acceuil</a></li>
                        <li class="nav-item mx-0 mx-lg-1 text-light"><a class="nav-link py-3 px-0 px-lg-3 rounded text-light" href="#apropos	">Services</a></li>
                        <li class="nav-item mx-0 mx-lg-1 text-light"><a class="nav-link py-3 px-0 px-lg-3 rounded text-light" href="#contact">Réalisations</a></li>
                        <li class="nav-item mx-0 mx-lg-1 text-light"><a class="nav-link py-3 px-0 px-lg-3 rounded text-light" href="#contact">Blog</a></li>
                        <li class="nav-item mx-0 mx-lg-1 text-light"><a class="nav-link py-3 px-0 px-lg-3 rounded text-light" href="#contact">Me contacter</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </header>
      </>
    );
  }
}

export default Navbar;