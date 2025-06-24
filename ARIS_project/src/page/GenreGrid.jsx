import React from 'react';
import GenreCard from './GenreCard';
import './GenreGrid.css'
import Header from '../components/Header';

const genres = [
  "Crime", "Fantasy", "Mystery", "Adventure", "Thriller",
  "Young Adult", "Self Help", "Science Fiction", "Fiction", "Romance",
  "Award Winning", "History", "Economics", "Politics", "Nonfiction",
  "Biography", "Feminism", "Historical fiction", "Classics", "Leadership",
  "Psychology", "Philosophy", "Drama", "Travel", "abc"
];

function GenreGrid() {
  return (
    <div className="genre-grid">
      <Header/>
      {genres.map((genre) => (
        <GenreCard key={genre} genre={genre} />
      ))}
    </div>
  );
}

export default GenreGrid;