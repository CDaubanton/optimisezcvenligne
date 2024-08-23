import React from "react";
import "./stylesheets/static.css";
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <>
      <header>
      <nav class="navbar navbar-expand-lg text-uppercase fixed-top" id="mainNav">
            <div class="container">
                <Link class="navbar-brand text-light" to="/">John Doe</Link>
                <button class="navbar-toggler text-uppercase font-weight-bold text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse " id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mx-0 mx-lg-1 text-light"><Link class="nav-link py-3 px-0 px-lg-3 rounded text-light" to="/">Acceuil</Link></li>
                        <li class="nav-item mx-0 mx-lg-1 text-light"><Link class="nav-link py-3 px-0 px-lg-3 rounded text-light" to="/services	">Services</Link></li>
                        <li class="nav-item mx-0 mx-lg-1 text-light"><Link class="nav-link py-3 px-0 px-lg-3 rounded text-light" to="/portfolio">Réalisations</Link></li>
                        <li class="nav-item mx-0 mx-lg-1 text-light"><Link class="nav-link py-3 px-0 px-lg-3 rounded text-light" to="/blog">Blog</Link></li>
                        <li class="nav-item mx-0 mx-lg-1 text-light"><Link class="nav-link py-3 px-0 px-lg-3 rounded text-light" to="#contact">Me contacter</Link></li>
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