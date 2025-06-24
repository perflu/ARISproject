// About.jsx
import React from "react";
import "./About.css";
import Header from "../components/Header";

export default function About() {
  return (
    <div className="about-body">
      <Header/>
      <section className="hero">
        <div className="hero-text">
          <h1>무엇을 읽어야 할지 모르겠습니까?</h1>
          <button>ARIS.AI에 문의하세요</button>
        </div>
      </section>

      <section className="info">
        <div className="info-block">
          <h2>당신 좋아하는 책 찾아보세요</h2>
          <p>
            다음에 무엇을 읽어야 할지 모르겠나요? 저희가 읽었던 책 관련 알려 주시면 나만의 취향에 맞춰 함께 만들어드릴게요.
          </p>
        </div>
        <div className="info-block">
          <h2>개인화된 추천을 받으세요</h2>
          <p>
            AI는 사용자 취향을 파악해 선호도에 따라 책을 추천해줍니다.
          </p>
        </div>
      </section>

      <section className="book-carousel">
        <div className="book-list">
          <img src="/images/book1.png" alt="기술의 충격" />
          <img src="/images/book2.png" alt="기획자의 습관" />
          <img src="/images/book3.png" alt="AI와 머신러닝" />
          <img src="/images/book4.png" alt="ARIS의 추천서" />
          <img src="/images/book5.png" alt="세상을 바꾼 질문 127개" />
        </div>
      </section>

      <section className="core-values">
        <h2 className="core-title">ARIS 핵심가치</h2>
        <div className="values-grid">
          <div className="value-item">
            <img src="/images/innovation.png" alt="도전과 창의" />
            <h3>도전과 창의</h3>
            <p>우리는 새롭게 시도하고 실패해도 다시 도전한다.</p>
          </div>
          <div className="value-item">
            <img src="/images/customer.png" alt="고객중심" />
            <h3>고객중심</h3>
            <p>우리는 고객관점에서 생각하고 행동한다.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
