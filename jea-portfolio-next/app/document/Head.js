import React from "react";
import { Head } from "next/document";
export default function Head() {
    return (
        <Head>
            <meta property="og:title" content=" JEaLiFe's Portfolio" />
            <meta name="description"
                content="Salut, je suis Jean Développeur web et mobile et designer graphiste. Je fais aussi de la photographie..." />

            <meta name="keywords" content="jealife, HTML, CSS, JavaScript,JEaLife, Pictures" />
            <meta name="author" content="JEaLiFe" />
            <meta property="og:site_name" content="JEaLiFe Portfolio" />
            <meta property="og:type" content="website" />

            <meta property="og:image"
                content="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" type="image/png" href="assets/icons/code.png" />
            <title>Jean Guylane</title>

            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        </Head>
    )
}