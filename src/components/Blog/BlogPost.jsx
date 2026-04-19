import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogData } from './blogData';
import { useLang } from '../../context/LanguageContext'; 
import './Blog.css'; 

export default function BlogPost() {
  const { slug } = useParams();
  const { lang } = useLang();
  
  const post = blogData.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <Navigate to="/blog" replace />;

  const uiText = {
    sv: { back: "Tillbaka till guider", ctaTitle: "Redo att uppgradera?", ctaBtn: "Hämta ditt Pass" },
    en: { back: "Back to guides", ctaTitle: "Ready to upgrade?", ctaBtn: "Get your Pass" }
  };

  const ui = uiText[lang] || uiText.sv;
  const content = post[lang] || post.sv;

  return (
    <div className="blog-page-wrapper">
      <main className="blog-container post-container">
        
        {/* Back Button matching your Legal Pages style */}
        <Link to="/blog" className="blog-back-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          {ui.back}
        </Link>

        <header className="article-header">
          <div className="blog-meta">
            <span className="blog-badge">{content.category}</span>
            <span>{content.date}</span>
          </div>
          <h1 className="article-title">{content.title}</h1>
        </header>

        <div className="article-image">
          <img src={post.image} alt={content.title} />
        </div>

        <article className="article-body" dangerouslySetInnerHTML={{ __html: content.content }} />

        <div className="article-cta-box">
          <h3>{ui.ctaTitle}</h3>
          <a href="https://wa.me/yournumber" className="btn-primary" style={{display: 'inline-block', marginTop: '20px'}}>
            {ui.ctaBtn}
          </a>
        </div>
      </main>
    </div>
  );
}