import React, { Component } from 'react';
import './stylesheets/contact.css';

class Contact extends Component {
    render() {
        return (
            <>
                <div class="background-contact">
                    <div class="container contact-form">
                        <div class="title">
                            <h1 class="text-uppercase">Contact</h1>
                            <h4>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact</h4>
                            <hr></hr>
                        </div>

                        <div class="row">
                            <div class="mb-3 col-lg-6 col-md-6 col-sm-12">
                                <h2>Formulaire de contact</h2>
                                <hr></hr>
                                <form>
                                    <div class="mb-3">
                                        <input type="name" class="form-control" placeholder="Votre nom" />
                                    </div>
                                    <div class="mb-3">
                                        <input type="email" class="form-control" placeholder="Votre adresse e-mail" />
                                    </div>
                                    <div class="mb-3">
                                        <input type="phone" class="form-control" placeholder="Votre numéro de téléphone" />
                                    </div>
                                    <div class="mb-3">
                                        <input type="Subject" class="form-control" placeholder="Sujet" />
                                    </div>
                                    <div class="mb-3">
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Votre message"></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Envoyer</button>
                                </form>
                            </div>

                            <div class="mb-3 col-lg-6 col-md-6 col-sm-12">
                                <h2>Mes coordonées</h2>
                                <hr></hr>

                                <a><i class="fa-solid fa-location-dot"></i> 40 Rue Laure Diebold, 69009 Lyon, France</a><br />
                                <a><i class="fa-solid fa-mobile-screen-button"></i> 06 14 90 96 44</a><br />
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626965754026!2d4.796403975637597!3d45.77866571240307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1724500696485!5m2!1sfr!2sfr" allowfullscreen="" height="" width="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Contact;
