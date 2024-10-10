// src/components/BlogArticle.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/BlogArticle.css'; // Estilize conforme necessário

const BlogArticle = ({ article }) => {
  return (
    <div className="blog-article">
      <img src={article.image} alt={article.title} className="blog-article__image" />
      <h3 className="blog-article__title">{article.title}</h3>
      <p className="blog-article__excerpt">{article.excerpt}</p>
      <Link to={article.link} className="blog-article__link">Leia mais</Link>
    </div>
  );
};

export default BlogArticle;
