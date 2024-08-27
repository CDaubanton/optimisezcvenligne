import React, { Component }from "react";
import { Link } from 'react-router-dom';
import "./stylesheets/static.css";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          scrollY: 0,
          showLink: false
        };
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);   
    
      }
    
      handleScroll = () => {
        this.setState({ scrollY:   
     window.scrollY, showLink: window.scrollY > 100 });
      }
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
                                    Téléphone : 06 14 90 96 44
                                </address>
                                <div class="social-links">
                                    <a href="https://www.github.com/github-john-doe" target="_blank" rel="nofollow"><i class="fa-brands fa-github"></i></a>
                                    <a href="https://www.twitter.com/johndoe" target="_blank" rel="nofollow"><i class="fa-brands fa-twitter"></i></a>
                                    <a href="https://fr.linkedin.com/in/john-doe-5906131b1" target="_blank" rel="nofollow"><i class="fa-brands fa-linkedin"></i></a>
                                    </div>
                            </section>
                            <section class="col-lg-3 col-md-6" >
                                <h3>Liens utiles</h3>
                                <div class="usefullLinks">
                                    <Link to="/"><i class="fa-solid fa-angle-right"></i> Acceuil</Link><br />
                                    <Link to="/services"><i class="fa-solid fa-angle-right"></i> Services</Link><br />
                                    <Link to="/contact"><i class="fa-solid fa-angle-right"></i> Me contacter</Link><br />
                                    <Link to="/legal"><i class="fa-solid fa-angle-right"></i> Mentions légales</Link><br />
                                    <Link to="/github"><i class="fa-solid fa-angle-right"></i> Github App</Link><br />
                                </div>
                            </section>
                            <section class="col-lg-3 col-md-6">
                                <h3>Mes dernières réalisations</h3>
                                <div class="usefullLinks">
                                    <Link to="/portfolio"><i class="fa-solid fa-angle-right"></i> Fresh Food</Link><br />
                                    <Link to="/portfolio"><i class="fa-solid fa-angle-right"></i> Restaurant Akira</Link><br />
                                    <Link to="/portfolio"><i class="fa-solid fa-angle-right"></i> Espace Bien-être</Link><br />
                                </div>
                            </section>
                            <section class="col-lg-3 col-md-6">
                                <h3>Mes derniers articles</h3>
                                <div class="usefullLinks">
                                    <Link to="/blog"><i class="fa-solid fa-angle-right"></i> Coder son site en HTML/CSS</Link><br />
                                    <Link to="/blog"><i class="fa-solid fa-angle-right"></i> Vendre ses produits sur le web</Link><br />
                                    <Link to="/blog"><i class="fa-solid fa-angle-right"></i> Se positionner sur Google</Link><br />
                                </div>

                            </section>
                        </div>
                    </div>
                    <div class="row" id="copyright">
                        <a><i class="fa-regular fa-copyright" /> Designed by John Doe</a>
                        {this.state.showLink && <a href="#" class="back-to-top">Retour en haut</a>}
                    </div>

                </footer>

            </>
        )
    }
}

export default Footer;