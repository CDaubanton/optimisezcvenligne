import React from 'react';
import './stylesheets/portfolio.css'

const Portfolio = () => {
    return (
        <>
            <img class="srvImg" src="src/Assets/services.jpg" alt="Points relié par des lignes" />

            <div class="container">
                <div class="title">
                    <h1 class="text-uppercase">Portfolio</h1>
                    <h3>Voici quelques-unes de mes réalisations.</h3>
                    <hr></hr>
                </div>

                <div class="row">
                    <div class="mb-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="card card text-center">
                            <img src="src/Assets/vegetables.jpg" class="card-img-top imgPortfolio" alt="Des legumes disposé sur un fond noir" />
                            <div class="card-body">
                                <h5 class="card-title">Fresh Food</h5>
                                <p class="card-text">Réalistion d'un site de commande en ligne.</p>
                                <a href="#" class="btn btn-outline-primary">Voir</a>

                            </div>
                            <div class="card-footer">
                                <p class="card-text">Site réalisé avec PHP et MySQL</p>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="card card text-center " >
                            <img src="src/Assets/sushis.jpg" class="card-img-top imgPortfolio" alt="Des sushis dans des assietes disposé sur un fond noir" />
                            <div class="card-body">
                                <h5 class="card-title">Restaurant Akira</h5>
                                <p class="card-text">Réalistion d'un site vitrine.</p>
                                <a href="#" class="btn btn-outline-primary">Voir</a>

                            </div>
                            <div class="card-footer">
                                <p class="card-text">Site réalisé avec WordPress</p>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="card card text-center " >
                            <img src="src/Assets/zen.jpg" class="card-img-top imgPortfolio" alt="Des legumes disposé sur un fond noir" />
                            <div class="card-body">
                                <h5 class="card-title">Espace bien-être</h5>
                                <p class="card-text">Réalistion d'un site vitrine pour un praticien de bien-être.</p>
                                <a href="#" class="btn btn-outline-primary">Voir</a>

                            </div>
                            <div class="card-footer">
                                <p class="card-text">Site réalisé en HTML / CSS</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    );
};

export default Portfolio;
