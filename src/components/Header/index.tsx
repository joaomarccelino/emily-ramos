import { useState } from 'react';
import Logo from '../../assets/img/logo.svg';
import './style.css';
import { TfiMenu } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
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
            <span className="menu-icon"><IoClose size={32} /></span>
            :
            <span className="menu-icon"><TfiMenu size={32} /></span>
        }
      </button>
      <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
        <ul className='header-menu'>
          <li>
            <a className='header-menu-item' href="/">Home</a>
          </li>
          <li>
            <a className='header-menu-item' href="/sobre">Sobre</a>
          </li>
          <li>
            <a className='contact-button' href="https://wa.me/+5515997735016/? text=Olá! ">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;