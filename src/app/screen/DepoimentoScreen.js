import React, { useState, useRef } from 'react';
import '../css/Depoimento.css';
import images from '../shared/Banner/import';

const testimonials = [
  {
    name: 'Gabriela Mendes',
    location: 'Amazonas, AM',
    image: images.cliente2,
    text: 'Trabalhar com a SinergiaRH foi uma das melhores decisões que tomamos. Eles realmente entendem nossas necessidades e vão além do esperado no processo de recrutamento. Conseguimos preencher nossas vagas com rapidez e qualidade, e o suporte deles é impecável. É uma parceria que traz resultados concretos e confiáveis.'
  },
  {
    name: 'Rodrigo Machado',
    location: 'São Paulo, SP',
    image: images.cliente4,
    text: 'Ter a SinergiaRH como parceira foi um grande acerto para nossa empresa. Precisávamos preencher várias vagas em pouco tempo, e eles não só encontraram os profissionais certos, como também garantiram um processo ágil e eficiente. A qualidade e dedicação da equipe nos surpreendeu e, hoje, confiamos neles para todas as nossas demandas de recrutamento.'
  },
  {
    name: 'Mariana Maya',
    location: 'São Paulo, SP',
    image: images.cliente3,
    text: 'Contar com a SinergiaRH foi a melhor decisão que tomamos para nossa empresa. Conseguimos preencher todas as nossas vagas operacionais com agilidade e qualidade, sem nos preocupar com questões trabalhistas. A confiança e a segurança que eles nos proporcionam são incomparáveis!'
  },
  {
    name: 'Adriana Camargo',
    location: 'São Paulo, SP',
    image: images.cliente1,
    text: 'A parceria com a SinergiaRH foi essencial para o crescimento da nossa empresa. Eles cuidaram de todo o processo de recrutamento de forma profissional e ágil, nos apresentando candidatos que realmente se encaixam na nossa cultura. O nível de atendimento e dedicação superou nossas expectativas!'
  }
];

const TestimonialCard = ({ testimonial, recommendationPercentage }) => (
  <div className="testimonial-card">
    <div className="testimonial-card__content">
      <div className="testimonial-card__header">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="testimonial-card__image"
        />
      </div>
      <div className="testimonial-card__info">
        <p className="testimonial-card__name">{testimonial.name}</p>
        <p className="testimonial-card__location">{testimonial.location}</p>
      </div>
      <p className="testimonial-card__text">{testimonial.text}</p>
      <div className="testimonial-card__footer">
        <p className="testimonial-card__recommendation">
          {recommendationPercentage}% recomendam
        </p>
      </div>
    </div>
  </div>
);

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = direction === 'left'
        ? Math.max(prevIndex - 1, 0)
        : Math.min(prevIndex + 1, testimonials.length - 1);
      carouselRef.current.scrollTo({ left: newIndex * 320, behavior: 'smooth' });
      return newIndex;
    });
  };

  return (
    <div className="testimonial-carousel">
      <h2 className="testimonial-carousel__title">Depoimento dos clientes</h2>
      <div className="testimonial-carousel__container" ref={carouselRef}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
            recommendationPercentage={Math.floor(Math.random() * 21) + 80} // Percentual aleatório entre 80% e 100%
          />
        ))}
      </div>
      {/* Removido os botões de navegação */}
    </div>
  );
};

export default TestimonialCarousel;
