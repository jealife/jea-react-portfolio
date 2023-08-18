import React from "react";
import './hero.css'


export default function Hero() {
    return (
        <section class="section section-hero container-dark " id="home">
            <div class="section-hero-top">
                <h1 class="section--big-title">
                    Jean Guylane Memiaghe<span class="dot">•</span>
                    <br />
                    <div class="word line-1 anim-typewriter">

                        <a href="" class="typewrite" data-period="2000"
                            data-type='[ "Developpeur Web.", "Photographe."]'>
                            <span class="wrap"></span>
                        </a>
                    </div>
                </h1>
                <p class="text-bg-dark">
                    Je suis Jean <br /> Je vous invite à parcourir mes réalisations entre Développement web et
                    photographie.
                </p>
                <a href="assets/CV.pdf" download class="button">
                    Download CV <i class='bx bx-cloud-download'></i>
                </a>
            </div>

            <div class="container main-projects grid">
                <a href="" class="main-projects2">
                    <div class="text">
                        <span>
                            Projets Web
                        </span>
                    </div>
                </a>

                <a href="https://gallery-grid-blush.vercel.app/" class="main-projects1">

                    <div class="text">
                        <span>
                            Photographies
                        </span>
                    </div>
                </a>
            </div>

        </section>
    )
}