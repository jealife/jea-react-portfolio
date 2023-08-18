import { Navigation } from './Navigation'
import './nav.css'
import Link from 'next/link'

const navLinks = [
  { name: 'Accueil', href: '/#home' },
  { name: 'A propos', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
]

function Nav() {
  return (
    <nav className="nav w-auto px-10 container">
      <div className="nav-logo none"><i className='bx bx-code'></i></div>
      <div className="menu-icon none">
        <i className='bx bx-menu-alt-right showMenu'></i>
      </div>
      <div className="flex gap-4 text-center text-slate-950">
        <Navigation navLinks={navLinks} />
      </div>
    </nav>
  )
}

export default Nav