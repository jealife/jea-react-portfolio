import { Navigation } from './Navigation'
import './nav.css'
import Link from 'next/link'

const navLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'A propos', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
]

function Nav() {
  return (
    <nav className="nav n container">
      <div className="nav-logo none"><i className='bx bx-code'></i></div>
      <div className="menu-icon none">
        <i className='bx bx-menu-alt-right showMenu'></i>
      </div>
      <div className="nav-menu">
        <Navigation navLinks={navLinks} />
      </div>
    </nav>
  )
}

export default Nav