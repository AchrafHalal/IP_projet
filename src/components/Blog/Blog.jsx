import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from './blogData';
import { useLang } from '../../context/LanguageContext';
import './Blog.css';

export default function Blog() {
  const { lang } = useLang(); // Grab current language (sv or en)

  // Local translations for the static UI text
  const uiText = {
    sv: { badge: "Resurser & Guider", title: "SvenskStream Blogg", sub: "Allt du behöver veta om streaming, tekniska uppsättningar och hur du maximerar din 4K-underhållning.", readMore: "Läs hela artikeln" },
    en: { badge: "Resources & Guides", title: "SvenskStream Blog", sub: "Everything you need to know about streaming, technical setups, and maximizing your 4K entertainment.", readMore: "Read full article" }
  };
  
  const ui = uiText[lang] || uiText.sv; // Fallback to Swedish just in case

  return (
    <div className="blog-page-wrapper">
      <main className="blog-container">
        
        <header className="blog-hero">
          <span className="blog-badge">{ui.badge}</span>
          <h1 className="blog-title">{ui.title}</h1>
          <p className="blog-subtitle">{ui.sub}</p>
        </header>

        <div className="blog-grid">
          {blogData.map((post) => {
            // Drill down to the correct language object for this specific post
            const postContent = post[lang] || post.sv; 
            
            return (
              <article key={post.id} className="blog-card">
                <Link to={`/blog/${post.slug}`} className="blog-card-link">
                  
                  <div className="blog-image-wrapper">
                    <img src={post.image} alt={postContent.title} loading="lazy" />
                    <span className="blog-category">{postContent.category}</span>
                  </div>

                  <div className="blog-content">
                    <div className="blog-meta">
                      <span>{postContent.date}</span>
                      <span className="meta-dot">•</span>
                      <span>{postContent.readTime}</span>
                    </div>
                    
                    <h2 className="blog-post-title">{postContent.title}</h2>
                    <p className="blog-post-excerpt">
                      {postContent.content.replace(/<[^>]+>/g, '').substring(0, 120)}...
                    </p>
                    
                    <div className="blog-read-more">
                      {ui.readMore}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>

                </Link>
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
}