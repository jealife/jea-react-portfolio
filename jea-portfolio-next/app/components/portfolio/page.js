import React from "react";

import './portfolio.css'

export default function Work(){
    return(
        <section className="section-work section container-dark" id="work">
            <div className="section-work-top">
                <h1 className="section--big-title">
                    Mes réalistaions<span className="dot">•</span>

                </h1>
                <p className="text-bg-dark">
                    Voici quelques unes de mes réalisations et prises dont je suis particulièrement fier.
                </p>
            </div>

            <div id="portfolio" className="portfolio">
                <div id="btnFilter">
                    <button className="btn active" onclick="filterSelection('all')"> Tout</button>
                    <button className="btn" onclick="filterSelection('pictures')">
                        Photographies</button>
                    <button className="btn" onclick="filterSelection('website')">Sites web</button>
                </div>

                <div className="container">
                    <div className="filter pictures">
                        <img src="https://jean-portfolio-six.vercel.app/assets/images/skooter%20Marrakech.jpg" alt />
                        <div className="link-portfolio">
                            <a href="assets/images/skooter Marrakech.jpg" target="_blank">Quad Marrakech</a>
                        </div>
                    </div>
                    <div className="filter pictures">
                        <img src="https://jean-portfolio-six.vercel.app/assets/images/skooter%20Marrakech.jpg" alt />
                        <div className="link-portfolio">
                            <a href="assets/images/JEALIFE_Pictures.jpg" target="_blank">JEALIFE Pictures</a>
                        </div>
                    </div>
                    <div className="filter website">

                        <img src="https://jean-portfolio-six.vercel.app/assets/images/skooter%20Marrakech.jpg" alt/>
                        <div className="link-portfolio">
                            <a href="https://tirem-t.vercel.app/" target="_blank"> TiremT</a>
                        </div>
                    </div>

                    <div className="filter website">
                        <img src="https://jean-portfolio-six.vercel.app/assets/images/skooter%20Marrakech.jpg" alt/>
                        <div className="link-portfolio">
                            <a href="https://jea-portfolio.vercel.app/" target="_blank"> JEaLiFe</a>
                        </div>
                    </div>
                    <div className="filter pictures">
                        <img src="https://jean-portfolio-six.vercel.app/assets/images/skooter%20Marrakech.jpg" alt/>
                        <div className="link-portfolio">
                            <a href="assets/images/girl.jpg" target="_blank">Girl</a>
                        </div>
                    </div>
                    <div className="filter website">
                        <img src="https://jean-portfolio-six.vercel.app/assets/images/skooter%20Marrakech.jpg" alt />
                        <div className="link-portfolio">
                            <a href="https://flex-fit-tau.vercel.app/" target="_blank"> FlexFit</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}