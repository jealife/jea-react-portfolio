import React from "react";

import './footer.css'
import Link from "next/link";

export default function Footer() {
    return (
        <footer class="footer">
            <div class="footer-container sectionntainer">

                <div class="footer-logo"><i class='bx bx-code'></i></div>
                <div class="socials ">
                    <Link href="mailto:jealife.pictures@gmail.com"><i class='bx bxs-envelope'></i></Link>
                    <Link href="http://instagram.com/jealife_pictures"><i class='bx bxl-instagram-alt'></i></Link>
                    <Link href="https://github.com/jealife"><i class='bx bxl-github'></i></Link>

                </div>

                <div class="copy-right">&copy; Jean Guylane, 2023.</div>

            </div>
        </footer>
    )
}