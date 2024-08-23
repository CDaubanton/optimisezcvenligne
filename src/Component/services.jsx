// Suggested code may be subject to a license. Learn more: ~LicenseLog:2669349936.
import React, { Component } from 'react';
import './stylesheets/services.css';

class Services extends Component {
    render() {
        return (
            <>
                <img class="srvImg" src="src/Assets/services.jpg" alt="Points relié par des lignes" />

                <div class="container ">
                    <div class="title">
                        <h1>MON OFFRE DE SERVICES</h1>
                        <h2>Voici les préstations sur lesquelles je peux intervenir.</h2>
                        <hr></hr>
                    </div>

                    <div class="row">
                        <div class="mb-3 col-lg-4 col-md-6 col-sm-12">
                            <div class="card text-center">
                                <div class="card-body">
                                    <i class="fa-solid fa-desktop srvIcon"></i>
                                    <h5 class="card-title text-uppercase">UX Design</h5>
                                    <p class="card-text">L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 col-lg-4 col-md-6 col-sm-12">
                            <div class="card text-center">
                                <div class="card-body">
                                    <i class="fa-solid fa-file-code srvIcon"></i>
                                    <h5 class="card-title text-uppercase">Développement Web</h5>
                                    <p class="card-text">Le <strong>développement de sites web</strong> repose sur l'utilisation des langages <u>HTML</u>, <u>CSS</u>, <u>JavaScript</u> et <u>PHP</u></p>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 col-lg-4 col-md-6 col-sm-12">
                            <div class="card text-center">
                                <div class="card-body">
                                    <i class="fa-solid fa-magnifying-glass-dollar srvIcon"></i>
                                    <h5 class="card-title text-uppercase">Référencement</h5>
                                    <p class="card-text">Le <strong>référencement naturel d'un site</strong>, aussi appelé <u>SEO</u>, consiste à mettre des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs de recherche.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Services;
