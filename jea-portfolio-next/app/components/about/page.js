import React, { Fragment } from "react"
import './about.css'

export default function About() {
    return (
        <Fragment>
            <section class="section-about section container grid" id="about">
                <div class="section-about-left">
                    <h3>Photographe -Dévéloppeur web</h3>
                    <h2 class="section-about-title"> A propos de moi</h2>
                    <img src="https://jealife-portfolio.vercel.app/assets/images/JEaLiFe%C2%B7.jpg"
                        alt="Jean Guylane Memiaghe" />

                        <div class="skills ">
                            <i class='bx bxl-javascript'></i>
                            <i class='bx bxl-html5'></i>
                            <i class='bx bxl-css3'></i>
                            <i class='bx bxl-php'></i>

                        </div>
                </div>
                <div class="section-about-right">
                    <p>
                        Je suis Jean Guylane, développeur web et mobile avec 3 ans d'expérience et passionné de
                        photographie. J'aime créer des interfaces interactives en utilisant HTML, CSS, JavaScript  Mon objectif est de combiner mes compétences en développement
                        et ma passion pour la photographie pour créer des projets uniques. Contactez-moi pour discuter de
                        collaborations passionnantes.
                    </p>
                </div>

            </section>

            <section class="section pb-5">
                <div class="exerience">
                    <div class="max experience">
                        <h2 class="title txt-link section-about-title">
                            Exprériences
                        </h2>
                        <div class="timeline">
                            <div class="container-tilmeline left" data-aos="zoom-in-left" data-aos-delay="300"
                                data-aos-duration="800" data-aos-easing="ease-in-out">
                                <div class="content">
                                    <h2>Aout 2022- Mars 2023</h2>
                                    <p>Developpeur web et graphiste au seins de l'académie de formation TOTAC académie à
                                        Casabalca au Maroc.</p>
                                </div>
                            </div>
                            <div class="container-tilmeline right" data-aos="zoom-in-right" data-aos-delay="300"
                                data-aos-duration="800" data-aos-easing="ease-in-out">
                                <div class="content">
                                    <h2>Aout 2022-Septembre 2023</h2>
                                    <p>
                                        Community manager et Photographe au sein du restaurant Bambou d'Afrique à Casabalca
                                        au Maroc.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
    )
}