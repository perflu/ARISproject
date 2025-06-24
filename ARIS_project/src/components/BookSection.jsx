import { useNavigate } from 'react-router-dom';
import React, { useRef } from 'react';
import './BookSection.css';

const BookSection = ({ title, description }) => {
  const carouselRef = useRef();

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const navigate = useNavigate();
  const goToBookDetailPage=()=>{
    navigate("/BookDetailPage");
  };

  return (
    <section className="book-section">
    <div className="container">
      <h2>{title}</h2>
      <p className="description">{description}</p>
      <div className="book-carousel-wrapper">
        <button className="arrow left" onClick={scrollLeft}>◀</button>
        <div className="book-carousel" ref={carouselRef}>
          <div onClick={goToBookDetailPage} className="book-card">Book 1</div>
          <div className="book-card">Book 2</div>
          <div className="book-card">Book 3</div>
          <div className="book-card">Book 4</div>
          <div className="book-card">Book 5</div>
          <div className="book-card">Book 1</div>
          <div className="book-card">Book 2</div>
          <div className="book-card">Book 3</div>
          <div className="book-card">Book 4</div>
          <div className="book-card">Book 5</div>
        </div>
        <button className="arrow right" onClick={scrollRight}>▶</button>
      </div>
    </div>
    </section>
    
  );
};

export default BookSection;