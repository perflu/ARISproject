import React from 'react';
import NavBar from './components/NavBar';
import GenreGrid from './components/GenreGrid';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <NavBar />
      <GenreGrid />
      <Footer />
    </div>
  );
}

export default App;