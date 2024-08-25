import React, { Component } from 'react';
import './stylesheets/legal.css';


class Legal extends Component {
    render() {
        return (
            <>
                <div class="container">
                    <div class="title">
                        <h1 class="text-uppercase">Mentions Légales</h1>
                        <hr></hr>
                    </div>

                    <div class="accordion" id="accordionLegal">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#editor" aria-expanded="true" aria-controls="editor">Editeur du site</button>
                            </h2>
                            <div id="editor" class="accordion-collapse collapse" data-bs-parent="#accordionLegal">
                                <div class="accordion-body">
                                    <h2 class="fw-bold">John Doe</h2>

                                    <a><i class="fa-solid fa-location-dot"></i> 40 Rue Laure Diebold<br />69009 Lyon, France</a><br />
                                    <i class="fa-solid fa-mobile-screen-button"></i><a href='tel:0614909644'> 06 14 90 96 44</a><br />
                                    <i class="fa-solid fa-envelope"></i><a href="mailto: john.doe@gmail.com"> john.doe@gmail.com</a>

                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#host" aria-expanded="true" aria-controls="host">Hébergeur</button>
                            </h2>
                            <div id="host" class="accordion-collapse collapse" data-bs-parent="#accordionLegal">
                                <div class="accordion-body">
                                    <h2 class="fw-bold">Always Data</h2>

                                    <a>91 rue du Faubourg Saint Honoré</a><br />
                                    75008 Paris<br /><br />

                                    <i class="fa-solid fa-globe"></i><a href='www.alwaysdata.com'> www.alwaysdata.com</a>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#credits" aria-expanded="true" aria-controls="credits">Crédits</button>
                            </h2>
                            <div id="credits" class="accordion-collapse collapse" data-bs-parent="#accordionLegal">
                                <div class="accordion-body">
                                    <h2 class="fw-bold">Crédits</h2>

                                    <a>Site développé par John Doe, étudiant du CEF.</a><br /><br />
                                    Les images libre de droit sont issues du site <a href="https://www.pixabay.com/">Pixabay</a>.
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </>
        );
    }
}

export default Legal;
