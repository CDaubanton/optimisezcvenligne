import React from "react";
import "./stylesheets/static.css";

class Footer extends React.Component {
    render() {
        return (
            <>
                <footer>
                    <div class="container">
                        <div class="row" id="footer">
                            <section class="col-lg-3 col-md-6">
                                <h3>John Doe</h3>
                                <address>
                                    40 Rue Laure Diebold<br />
                                    69009 Lyon, France<br />
                                    Téléphone : 06 14 90 96 44<br />
                                </address>
                            </section>
                            <section class="col-lg-3 col-md-6" >
                                <h3>Liens utiles</h3>
                                <div class="usefullLinks">
                                    <a><i class="fa-solid fa-angle-right"></i> Acceuil</a><br />
                                    <a><i class="fa-solid fa-angle-right"></i> A Propos</a><br />
                                    <a><i class="fa-solid fa-angle-right"></i> Services</a><br />
                                    <a><i class="fa-solid fa-angle-right"></i> Me contacter</a><br />
                                    <a><i class="fa-solid fa-angle-right"></i> Mentions légales</a><br />
                                </div>
                            </section>
                            <section class="col-lg-3 col-md-6">
                                <h3>Mes dernières réalisations</h3>
                                <div class="usefullLinks">
                                    <a><i class="fa-solid fa-angle-right"></i> Fresh Food</a><br />
                                    <a><i class="fa-solid fa-angle-right"></i> Restaurant Akira</a><br />
                                    <a><i class="fa-solid fa-angle-right"></i> Espace Bien-être</a><br />
                                </div>
                            </section>
                            <section class="col-lg-3 col-md-6">
                                <h3>Mes derniers articles</h3>
                                <div class="usefullLinks">
                                    <a><i class="fa-solid fa-angle-right"></i> Coder son site en HTML/CSS</a><br />
                                    <a><i class="fa-solid fa-angle-right"></i> Vendre ses produits sur le web</a><br />
                                    <a><i class="fa-solid fa-angle-right"></i> Se positionner sur Google</a><br />
                                </div>

                            </section>
                        </div>
                    </div>
                    <div class="row" id="copyright">
                        <a><i class="fa-regular fa-copyright" /> Designed by John Doe</a>
                    </div>

                </footer>

            </>
        )
    }
}

export default Footer;