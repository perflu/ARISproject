import React from 'react';
import './MyPage.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ProfileCard from '../components/ProfileCard';
import SummaryCards from '../components/SummaryCards';
import LibrarySection from '../components/LibrarySection';

const MyPage = () => {
  return (
    <div>
      <Header />
      <div className="page-wrapper">
        <div className="main-content">
          <Sidebar />
          <div className="content-area">
            <ProfileCard />
            <SummaryCards />
            <LibrarySection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
