import Insta from '../../assets/img/insta-btn.svg';
import Mail from '../../assets/img/mail-btn.svg';

import './style.css';

const Footer = () => {
  return (
    <footer className='footer container'>
      <div className="footer-icons">
        <a href="https://www.instagram.com/emilyrammos/">
          <img src={Insta} alt="Instagram" />
        </a>
        <a href="mailto:contatoemilyramos@gmail.com">
          <img src={Mail} alt="E-mail" />
        </a>
      </div>
      <p>© 2024 Emily Ramos Fotografia. Todos direitos reservados.</p>
    </footer>
  )
}

export default Footer;