import React from 'react';
import '../css/Footer.css'; // Certifique-se de que o caminho está correto
import images from '../shared/Banner/import';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img src= {images.logo} alt="Logo" className="footer__logo" />
        <div className="footer__contact-info">
          <h4>Contato</h4>
          <p>Email: contato@sinergiarh.com</p>
          <p>Telefone: (11) 1234-5678</p>
        </div>
        <div className="footer__social-media">
          <h4>Redes Sociais</h4>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
        <div className="footer__privacy">
          <h4>Informações Legais</h4>
          <a href="/termos-de-privacidade">Termos de Privacidade</a>
        </div>
      </div>
      <div className="footer__security-seal">
        <img src={images.Selo} alt="Selo de Segurança" />
      </div>
    </footer>
  );
};

export default Footer;
