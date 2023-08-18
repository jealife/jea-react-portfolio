import React from "react";

import './footer.css'
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container sectionntainer">

                <div className="footer-logo"><i className='bx bx-code'></i></div>
                <div className="socials ">
                    <Link href="mailto:jealife.pictures@gmail.com"><i className='bx bxs-envelope'></i></Link>
                    <Link href="http://instagram.com/jealife_pictures"><i className='bx bxl-instagram-alt'></i></Link>
                    <Link href="https://github.com/jealife"><i className='bx bxl-github'></i></Link>

                </div>

                <div className="copy-right">&copy; Jean Guylane, 2023.</div>

            </div>
        </footer>
    )
}