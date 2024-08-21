import React from "react";
import './home.css';

class Home extends React.Component {
    render() {
        return (
            <>
                <div class="front">
                    <h1>Bonjour, je suis John Doe</h1>
                    <h2>Developpeur web Full-Stack</h2>
                    <button type="button" class="btn btn-primary">En savoir plus</button>
                </div>

                <div class='container' >
                    <div id="about"  class="card text-bg-light mb-3">
                        <div class='container'>
                            <div class="row">
                                <div class="card-body col-lg-6">
                                    <h3 class="card-title">A propos</h3>
                                    <hr class="aboutSeparator"></hr>
                                    <p class="card-text">Passioné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.
                                    <br /><br />
                                    Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.<br /><br />
                                    J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
                                </div>
                                <div class="card-body col-lg-6">

                                    <img class="johnDoePic" src="src/Assets/johndoe.jpg" alt="Image de John Doe" /><br /><br />

                                    <h3 class="card-title">Mes compétences</h3>

                                    <p class="card-text">HTML5 90%</p>
                                    <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-danger" id="htmlBar"></div>
                                    </div><br />

                                    <p class="card-text">CSS3 80%</p>
                                    <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-info" id="cssBar"></div>
                                    </div><br />

                                    <p class="card-text">JAVASCRIPT 70%</p>
                                    <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-warning" id="jsBar"></div>
                                    </div><br />

                                    <p class="card-text">PHP 60%</p>
                                    <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-success" id="phpBar" ></div>
                                    </div>
                                    <br />

                                    <p class="card-text">REACT 50%</p>
                                    <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar" id="reactBar" ></div>
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </>
        )
    }
}

export default Home;