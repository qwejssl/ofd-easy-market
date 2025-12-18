import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} OFDEasy Маркет. Все права защищены.</p>
      <p>Это учебный проект фронтенда.</p>
    </footer>
  );
}

export default Footer;
