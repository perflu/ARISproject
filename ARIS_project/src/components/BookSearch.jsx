import React from 'react';
import './BookSearch.css';

const BookSearch = () => {
  return (
    <section className="book-search-section">
      <div className="book-search-container">
        <h2>AI recommends you more of what you love.</h2>
        <input
          type="text"
          placeholder="Enter a book you liked"
          className="book-search-input"
        />
      </div>
    </section>
  );
};

export default BookSearch;
