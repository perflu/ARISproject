import React from 'react';

const data = [
  { title: '챌린지', value: '0%' },
  { title: '로드맵', value: '20%' },
  { title: '', value: '0' },
  { title: '', value: '0' },
];

const SummaryCards = () => (
  <section className="summary-cards">
    {data.map((item, idx) => (
      <div className="summary-card" key={idx}>
        <h4>{item.title}</h4>
        <p>{item.value}</p>
      </div>
    ))}
  </section>
);

export default SummaryCards;
