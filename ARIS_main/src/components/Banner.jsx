import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="container banner-inner">
        <div className="banner-text">
          <h1>Find books that you will fall in love with</h1>
          <p>Get personalized book recommendations with AI</p>
        </div>
        <div className="banner-books">
          <div className="book-column-wrapper">
            <div className="book-column loop-up">
              <div className="book-box">Book 1</div>
              <div className="book-box">Book 4</div>
              <div className="book-box">Book 1</div>
              <div className="book-box">Book 4</div>
            </div>
          </div>
          <div className="book-column-wrapper">
            <div className="book-column loop-down">
              <div className="book-box">Book 2</div>
              <div className="book-box">Book 5</div>
              <div className="book-box">Book 2</div>
              <div className="book-box">Book 5</div>
            </div>
          </div>
          <div className="book-column-wrapper">
            <div className="book-column loop-up">
              <div className="book-box">Book 3</div>
              <div className="book-box">Book 6</div>
              <div className="book-box">Book 3</div>
              <div className="book-box">Book 6</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
