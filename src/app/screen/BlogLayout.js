// src/components/Blog.js
import React from 'react';
import '../css/BlogArticle.css';
import images from '../shared/Banner/import';

const articles = [
  {
    id: 1,
    title: 'Tendências de Recrutamento 2024',
    description: 'Descubra as principais tendências de recrutamento que estão moldando o mercado de trabalho em 2024.',
    image: images.BlogImage2, // Replace with your image source
  },
  {
    id: 2,
    title: 'Legislação Trabalhista: O Que Mudou?',
    description: 'Um resumo das mudanças recentes na legislação trabalhista e como elas impactam as empresas.',
    image: images.BlogImage3,
  },
  {
    id: 3,
    title: 'Casos de Sucesso em Recrutamento',
    description: 'Veja exemplos de casos de sucesso em recrutamento e as estratégias utilizadas.',
    image: images.BlogImage1,
  },
  // Add more articles as needed
];

const Blog = () => {
  return (
    <div className="blog">
      <h1 className="blog__title">Blog</h1>
      <div className="blog__articles">
        {articles.map((article) => (
          <div key={article.id} className="blog__card">
            <img src={article.image} alt={article.title} className="blog__image" />
            <h2 className="blog__article-title">{article.title}</h2>
            <p className="blog__description">{article.description}</p>
            <button className="blog__read-more">Leia mais</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;