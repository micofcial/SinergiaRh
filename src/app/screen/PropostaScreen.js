import React, { useState } from 'react';
import '../css/Proposta.css';

const SolicitarProposta = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoServico: '',
    descricaoProjeto: '',
    orcamentoEstimado: '',
    dataInicio: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    
    <div className="container">
        
      <h2>Solicite sua Proposta</h2>
      <p>Preencha o formulário abaixo para receber uma proposta personalizada.</p>
      
      {submitted ? (
        <div className="success-message">
          <h3>Obrigado por solicitar uma proposta!</h3>
          <p>Nossa equipe entrará em contato com você em breve.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome Completo:</label>
            <input
              type="text"
              name="nome"
              placeholder="Digite seu nome completo"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Telefone:</label>
            <input
              type="tel"
              name="telefone"
              placeholder="Digite seu telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Tipo de Serviço:</label>
            <select
              name="tipoServico"
              value={formData.tipoServico}
              onChange={handleChange}
              required
            >
              <option value="">Selecione o serviço desejado</option>
              <option value="consultoria">Consultoria</option>
              <option value="implementacao">Implementação</option>
              <option value="desenvolvimento">Desenvolvimento Personalizado</option>
            </select>
          </div>

          <div className="form-group">
            <label>Descrição do Projeto:</label>
            <textarea
              name="descricaoProjeto"
              placeholder="Descreva brevemente seu projeto ou necessidade"
              value={formData.descricaoProjeto}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Orçamento Estimado:</label>
            <input
              type="number"
              name="orcamentoEstimado"
              placeholder="Informe seu orçamento estimado"
              value={formData.orcamentoEstimado}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Data de Início Prevista:</label>
            <input
              type="date"
              name="dataInicio"
              value={formData.dataInicio}
              onChange={handleChange}
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Solicitar Proposta'}
          </button>
        </form>
      )}
      
    </div>
  );
};

export default SolicitarProposta;
