import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProgressSteps from '../components/ProgressSteps';
import BookSearch from '../components/BookSearch';
import AssistantPromo from '../components/AssistantPromo';
import BookSection from '../components/BookSection';
import './MainPage.css';


function MainPage() {
  return (
    <div className="app-container">
      <Header />
      <Banner />
      <ProgressSteps />
      <BookSearch />
      <AssistantPromo />
      <BookSection title="Fiction" description="Stories Beyond the Surface..." />
      <BookSection title="Thriller" description="Twists at Every Turn..." />
      <BookSection title="Romance" description="Feel the Heartbeat..." />
    </div>
  );
}

export default MainPage;