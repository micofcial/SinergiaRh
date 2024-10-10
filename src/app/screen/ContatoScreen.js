// src/components/Contato.js
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // Ensure you install react-leaflet and leaflet
import '../css/Contato.css';
import 'leaflet/dist/leaflet.css';

// Define the location of your company
const position = [-23.550520, -46.633308]; // Example: São Paulo, Brazil

const Contato = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted:', { name, email, message, file });
  };

  return (
    <div className="contato">
      <h1 className="contato__title">Contato</h1>
      <div className="contato__container">
        <div className="contato__map">
          <MapContainer center={position} zoom={13} className="contato__map-container">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                Nossa localização!
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        <form className="contato__form" onSubmit={handleSubmit}>
          <h2 className="contato__form-title">Entre em Contato</h2>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="contato__input"
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="contato__input"
          />

          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="contato__textarea"
          />

          <label htmlFor="file">Anexar Arquivo:</label>
          <input
            type="file"
            id="file"
            onChange={handleFileUpload}
            className="contato__input"
          />

          <button type="submit" className="contato__submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contato;
