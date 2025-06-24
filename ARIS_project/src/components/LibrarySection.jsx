import React from 'react';

const LibrarySection = () => (
  <section className="library-section">
    <div className="library-box">
      <h3>라이브러리 리스트</h3>
      <p>나만의 리스트를 만들고 기록해보세요.</p>
      <button>+ 추가하기</button>
    </div>
    <div className="library-box">
      <h3>검색내역</h3>
      <p>
        <span>Python </span>
        <span>JAVA </span>
      </p>
      <button>+ 찾아보기</button>
    </div>
  </section>
);

export default LibrarySection;
