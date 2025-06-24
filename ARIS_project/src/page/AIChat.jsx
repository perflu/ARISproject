import React from 'react';
import './AIChat.css';
import Header from '../components/Header';
import { FaAtom } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';


export default function AIChat() {

  const location = useLocation();
  const query = location.state?.query || "";

  const tags = [
    "novel with unforgettable characters",
    "coming-of-age novel with deep emotions",
    "historical fiction set in medieval europe",
    "detective story with a female detective",
    "true crime", "dark romance", "impressive founding stories"
  ];

  return (
    
    <main className="aichat-container">

      <Header/>

      <h1 className="aichat-title"></h1>

      <div className="atom-wrapper">

      <h1 className="aichat-title">Book Recommendation AI-Assistant</h1>

        <div className="atom-circle">
          <FaAtom size={28} color="#ffffff" />
        </div>
      </div>

      <input
        type="text"
        className="aichat-input"
        value={query}
        placeholder="What would you like to read, dear?"
        readOnly
      />

      <div className="aichat-tags">
        {tags.map((tag, i) => (
          <span key={i} className="aichat-tag">{tag}</span>
        ))}
      </div>
    </main>
  );
}
