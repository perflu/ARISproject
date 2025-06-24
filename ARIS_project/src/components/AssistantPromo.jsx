import React from 'react';
import { FaReact } from 'react-icons/fa';
import './AssistantPromo.css';

const AssistantPromo = () => {
  return (
    <section className="assistant-promo">
      <div className="assistant-promo-container">
        <div className="assistant-text">
          <p>Want to get personalized book recommendations?</p>
          <p><strong>Just ask our friendly AI!</strong></p>
        </div>
        <div className="assistant-icon">
          <div className="icon-circle">
            <FaReact size={48} color="white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssistantPromo;
