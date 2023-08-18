import React from "react";

import './portfolio.css'

export default function Work(){
    return(
        <section class="section-work section container-dark" id="work">
            <div class="section-work-top">
                <h1 class="section--big-title">
                    Mes réalistaions<span class="dot">•</span>

                </h1>
                <p class="text-bg-dark">
                    Voici quelques unes de mes réalisations et prises dont je suis particulièrement fier.
                </p>
            </div>

            <div id="portfolio" class="portfolio">
                <div id="btnFilter">
                    <button class="btn active" onclick="filterSelection('all')"> Tout</button>
                    <button class="btn" onclick="filterSelection('pictures')">
                        Photographies</button>
                    <button class="btn" onclick="filterSelection('website')">Sites web</button>
                </div>

                <div class="container">
                    <div class="filter pictures">
                        <img src="https://jean-portfolio-six.vercel.app/assets/images/skooter%20Marrakech.jpg" alt />
                        <div class="link-portfolio">
                            <a href="assets/images/skooter Marrakech.jpg" target="_blank">Quad Marrakech</a>
                        </div>
                    </div>
                    <div class="filter pictures">
                        <img src="assets/images/JEALIFE_Pictures.jpg" alt />
                        <div class="link-portfolio">
                            <a href="assets/images/JEALIFE_Pictures.jpg" target="_blank">JEALIFE Pictures</a>
                        </div>
                    </div>
                    <div class="filter website">

                        <img src="assets/images/tiremt.png" alt/>
                        <div class="link-portfolio">
                            <a href="https://tirem-t.vercel.app/" target="_blank"> TiremT</a>
                        </div>
                    </div>

                    <div class="filter website">
                        <img src="assets/images/Jealife Portfolio.png" alt/>
                        <div class="link-portfolio">
                            <a href="https://jea-portfolio.vercel.app/" target="_blank"> JEaLiFe</a>
                        </div>
                    </div>
                    <div class="filter pictures">
                        <img src="assets/images/girl.jpg" alt/>
                        <div class="link-portfolio">
                            <a href="assets/images/girl.jpg" target="_blank">Girl</a>
                        </div>
                    </div>
                    <div class="filter website">
                        <img src="assets/images/Flexfit.png" alt />
                        <div class="link-portfolio">
                            <a href="https://flex-fit-tau.vercel.app/" target="_blank"> FlexFit</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}