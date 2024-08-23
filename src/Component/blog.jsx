import React, { Component } from 'react';
import './stylesheets/blog.css'

class Blog extends Component {
    render() {
        return (
            <>
                <img class="srvImg" src="src/Assets/services.jpg" alt="Points relié par des lignes" />

                <div class="container">
                    <div class="title">
                        <h1 class="text-uppercase">Blog</h1>
                        <h3>Retrouvez ici quelques articles sur le developpement web.</h3>
                        <hr></hr>
                    </div>

                    <div class="row">
                        <div class="mb-3 col-lg-4 col-md-6 col-sm-12">
                            <div class="card">
                                <img src="src/Assets/html.jpg" class="card-img-top imgBlog" alt="Des legumes disposé sur un fond noir" />
                                <div class="card-body">
                                    <h5 class="card-title">Coder son site avec HTML/CSS</h5>
                                    <p class="card-text"></p>
                                    <a  class="btn btn-primary">Lire la suite</a>

                                </div>
                                <div class="card-footer">
                                    <p class="card-text">Publié le 22 Juin 2024</p>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 col-lg-4 col-md-6 col-sm-12">
                            <div class="card" >
                                <img src="src/Assets/ecommerce.jpg" class="card-img-top imgBlog" alt="Des sushis dans des assietes disposé sur un fond noir" />
                                <div class="card-body">
                                    <h5 class="card-title">Vendre ses produits sur le Web</h5>
                                    <p class="card-text"></p>
                                    <a  class="btn btn-primary">Lire la suite</a>

                                </div>
                                <div class="card-footer">
                                    <p class="card-text">Publié le 10 Juin 2024</p>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 col-lg-4 col-md-6 col-sm-12">
                            <div class="card" >
                                <img src="src/Assets/google.jpg" class="card-img-top imgBlog" alt="Des legumes disposé sur un fond noir" />
                                <div class="card-body">
                                    <h5 class="card-title">Se positionner sur Google</h5>
                                    <p class="card-text"></p>
                                    <a  class="btn btn-primary">Lire la suite</a>

                                </div>
                                <div class="card-footer">
                                    <p class="card-text">Publié le 30 Mai 2024</p>
                                </div>
                            </div>
                        </div>

                        <div class="mb-3 col-lg-4 col-md-6 col-sm-12">
                            <div class="card">
                                <img src="src/Assets/responsive.jpg" class="card-img-top imgBlog" alt="Des legumes disposé sur un fond noir" />
                                <div class="card-body">
                                    <h5 class="card-title">Coder en responsive design</h5>
                                    <p class="card-text"></p>
                                    <a  class="btn btn-primary">Lire la suite</a>

                                </div>
                                <div class="card-footer">
                                    <p class="card-text">Publié le 20 Mai 2024</p>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 col-lg-4 col-md-6 col-sm-12">
                            <div class="card" >
                                <img src="src/Assets/seo.jpg" class="card-img-top imgBlog" alt="Des sushis dans des assietes disposé sur un fond noir" />
                                <div class="card-body">
                                    <h5 class="card-title">Techniques de référencement</h5>
                                    <p class="card-text"></p>
                                    <a  class="btn btn-primary">Lire la suite</a>

                                </div>
                                <div class="card-footer">
                                    <p class="card-text">Publié le 11 Mai 2024</p>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 col-lg-4 col-md-6 col-sm-12">
                            <div class="card" >
                                <img src="src/Assets/coder.png" class="card-img-top imgBlog" alt="Des legumes disposé sur un fond noir" />
                                <div class="card-body">
                                    <h5 class="card-title">Apprendre à coder</h5>
                                    <p class="card-text"></p>
                                    <a  class="btn btn-primary">Lire la suite</a>

                                </div>
                                <div class="card-footer">
                                    <p class="card-text">Publié le 4 Mai 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        );
    }
};

export default Blog;
