import React, { useState } from 'react';
import '../css/HeaderComponents.css'; // Importar o CSS para o cabeçalho
import Logo from '../shared/logo/sinergia.avif'; // Importamos a logo do site
import Proposta from '../screen/PropostaScreen';

const HeaderComponents = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar o menu
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Estado para controlar a visibilidade do diálogo

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Alterna o estado do menu
  };

  const openDialog = () => {
    setIsDialogOpen(true); // Abre o diálogo
  };

  const closeDialog = () => {
    setIsDialogOpen(false); // Fecha o diálogo
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className={`bar`}></div>
        <div className={`bar`}></div>
        <div className={`bar`}></div>
      </div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#depoimentos">Depoimentos</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contato">Contato</a></li>
          <li><a href="#trabalhe-conosco">Trabalhe Conosco</a></li>
          <li>
            <button className="proposal-button" id='proposal-button' onClick={openDialog}>
              Solicite uma Proposta
            </button>
          </li>
        </ul>
      </nav>

      {/* Diálogo (Modal) para solicitar proposta */}
      {isDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-content">
            <button className="close-dialog" onClick={closeDialog}>✖</button>
            <Proposta />
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderComponents;
