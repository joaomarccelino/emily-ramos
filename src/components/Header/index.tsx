import { useState } from 'react';
import Logo from '../../assets/img/logo.svg';
import './style.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className={`container header ${menuOpen ? 'menu-open' : ''}`}>
      <a href="/">
        <img src={Logo} alt="Emily Ramos" />
      </a>
      <button className="menu-toggle" onClick={toggleMenu}>
        {
          menuOpen ?
            <span className="menu-icon">X</span>
            :
            <span className="menu-icon">&#9776;</span>
        }
      </button>
      <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
        <ul className='header-menu'>
          <li>
            <a className='header-menu-item' href="/about">Home</a>
          </li>
          <li>
            <a className='header-menu-item' href="/about">Sobre</a>
          </li>
          <li>
            <a className='contact-button' href="/about">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;