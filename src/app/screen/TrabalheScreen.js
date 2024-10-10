import React, { useState } from 'react';
import '../css/TrabalheConosco.css';
import images from "../shared/Banner/import"; // Corrigir a importação se necessário

const jobListings = [
  {
    id: 1,
    title: 'Analista de Recursos Humanos',
    location: 'São Paulo, SP',
  },
  {
    id: 2,
    title: 'Desenvolvedor Front-end',
    location: 'Remoto',
  },
  {
    id: 3,
    title: 'Gerente de Projetos',
    location: 'Rio de Janeiro, RJ',
  },
  // Adicionar mais vagas conforme necessário
];

const TrabalheConosco = () => {
  const [resume, setResume] = useState(null);
  const [email, setEmail] = useState('');
  const [alerts, setAlerts] = useState(false);

  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { email, alerts, resume });
  };

  return (
    <div className="trabalhe-conosco">
      <h1 className="trabalhe-conosco__title">Trabalhe Conosco</h1>
      <div className="trabalhe-conosco__container">
        <img
          src={images.Trabalho} // Replace with your image source
          alt="Trabalhe Conosco"
          className="trabalhe-conosco__image"
        />
        <form className="trabalhe-conosco__form" onSubmit={handleSubmit}>
          <h2 className="trabalhe-conosco__form-title">Envie seu Currículo</h2>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="trabalhe-conosco__input"
          />

          <label htmlFor="resume">Upload de Currículo:</label>
          <input
            type="file"
            id="resume"
            accept=".pdf, .doc, .docx"
            onChange={handleResumeUpload}
            required
            className="trabalhe-conosco__input"
          />

          <label className="trabalhe-conosco__checkbox-label">
            <input
              type="checkbox"
              checked={alerts}
              onChange={(e) => setAlerts(e.target.checked)}
              className="trabalhe-conosco__checkbox"
            />
            Quero receber alertas de vagas
          </label>

          <button type="submit" className="trabalhe-conosco__submit">
            Enviar
          </button>
        </form>
      </div>

      <h2 className="trabalhe-conosco__jobs-title">Vagas Disponíveis</h2>
      <div className="trabalhe-conosco__job-carousel">
        {jobListings.map((job) => (
          <div key={job.id} className="trabalhe-conosco__job-card">
            <h3 className="trabalhe-conosco__job-title">{job.title}</h3>
            <p className="trabalhe-conosco__job-location">{job.location}</p>
            <button className="trabalhe-conosco__apply-button">Se candidatar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrabalheConosco;
