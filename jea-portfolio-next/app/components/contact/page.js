import React from "react";
import './contact.css'

export default function Contact(){
    return
    (
        <section class="section-contact section container" id="contact">
            <div class="contact-information">
                <h3>JEaLiFe</h3>
                <h2 class="section-about-title"> Contactez moi</h2>
                <img src="https://jealife-portfolio.vercel.app/assets/images/JEaLiFe%C2%B7.jpg"
                    alt="Jean Guylane Memiaghe"/>

                <div class="skills socials ">
                    <a href="mailto:jealife.pictures@gmail.com"><i class='bx bxs-envelope'></i></a>
                    <a href="http://instagram.com/jealife_pictures"><i class='bx bxl-instagram-alt'></i></a>
                    <a href="https://github.com/jealife"><i class='bx bxl-github'></i></a>

                </div>

            </div>

            <form action="https://submit-form.com/Q6PX1HC6">
                <div class="name">
                    <label for="name">Nom</label>
                    <input type="text" id="name" name="name" aria-required="true" placeholder="Nom" required="" />
                </div>
                <div class="email">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" aria-required="true" placeholder="Email" required="" />
                </div>
                <div class="message">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" aria-required="true" placeholder="Message"
                        required=""></textarea>
                </div>
                <div class="btn-form">

                    <button type="submit">Envoyer</button>
                </div>
            </form>
        </section>
    )
}