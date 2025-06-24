import React from 'react';

const ProfileCard = () => (
  <section className="profile-card">
    <div className="profile-info">
      <div className="profile-avatar">👤</div>
      <div>
        <h2>김선우님</h2>
      </div>
    </div>
    <div className="profile-stats">
      <div className="stat-box">
        <div className="stat-number">0</div>
        <div>찜</div>
      </div>
      <div className="stat-box">
        <div className="stat-number">0</div>
        <div>알림</div>
      </div>
    </div>
  </section>
);

export default ProfileCard;
