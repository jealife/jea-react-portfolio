
import Footer from './components/footer/Footer'
import Nav from './components/navigation/Nav'
import Head from './document/Head'
import './globals.css'

export const metadata = {
  title: 'Jean Portfolio',
  description: 'Salut, je suis Jean Développeur web et mobile et designer graphiste. Je fais aussi de la photographie...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head/>
      <body>
            <header>
              <Nav />
            </header>
            {children}
            <Footer />

          </body>
        </html>
        )
}
