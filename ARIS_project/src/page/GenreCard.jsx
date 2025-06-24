import React from 'react';
import './GenreCard.css'

function GenreCard({ genre }) {
  return (
    <div className="genre-card">
      <div className="genre-image">
        <img src="" alt={genre} />
      </div>
      <div className="genre-label">{genre}</div>
    </div>
  );
}

export default GenreCard;