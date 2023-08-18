import React from "react";
import './hero.css'


export default function Hero() {
    return (
        <section className="section section-hero container-dark " id="home">
            <div className="section-hero-top">
                <h1 className="section--big-title">
                    Jean Guylane Memiaghe<span className="dot">•</span>
                    <br />
                    <div className="word line-1 anim-typewriter">

                        <a href="" className="typewrite" data-period="2000"
                            data-type='[ "Developpeur Web.", "Photographe."]'>
                            <span className="wrap"></span>
                        </a>
                    </div>
                </h1>
                <p className="text-bg-dark">
                    Je suis Jean <br /> Je vous invite à parcourir mes réalisations entre Développement web et
                    photographie.
                </p>
                <a href="assets/CV.pdf" download className="button">
                    Download CV <i className='bx bx-cloud-download'></i>
                </a>
            </div>

            <div className="container main-projects grid">
                <a href="" className="main-projects2">
                    <div className="text">
                        <span>
                            Projets Web
                        </span>
                    </div>
                </a>

                <a href="https://gallery-grid-blush.vercel.app/" className="main-projects1">

                    <div className="text">
                        <span>
                            Photographies
                        </span>
                    </div>
                </a>
            </div>

        </section>
    )
}