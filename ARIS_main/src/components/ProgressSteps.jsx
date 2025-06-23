import React from 'react';
import './ProgressSteps.css';

const ProgressSteps = () => {
  return (
    <div className="progress-outer">
      <div className="progress-container progress-bar-container">
        <div className="step-line">
          <div className="step-circle" />
          <div className="step-circle" />
          <div className="step-circle" />
        </div>
        <div className="step-labels">
          <span>Discover new books</span>
          <span>Ask AI</span>
          <span>Get recommendations</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;
