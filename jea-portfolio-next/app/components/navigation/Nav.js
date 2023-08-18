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
    <nav class="nav n container">
      <div class="nav-logo none"><i class='bx bx-code'></i></div>
      <div class="menu-icon none">
        <i class='bx bx-menu-alt-right showMenu'></i>
      </div>
      <div class="nav-menu">
        <Navigation navLinks={navLinks} />
      </div>
    </nav>
  )
}

export default Nav