import { FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import './style.css';

const Footer = () => {
  return (
    <footer className='footer container'>
      <div className="footer-icons">
        <a href="https://www.instagram.com/emilyrammos/">
          <FaInstagram size={60} color="var(--p1)" />
        </a>
        <a href="mailto:contatoemilyramos@gmail.com">
          <LuMail size={60} color="var(--p1)"  />
        </a>
      </div>
      <p>© 2024 Emily Ramos Fotografia. Todos direitos reservados.</p>
    </footer>
  )
}

export default Footer;