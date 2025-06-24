import React from 'react';
import './BookDetailPage.css'; // CSS 파일 임포트
import Header from '../components/Header';

const BookDetailPage = ({ book }) => {
  const dummyBook = {
    title: "책 제목",
    author: "저자 이름",
    coverImage: "",
    genres: ["장르1", "장르2"],
    subgenres: ["서브장르1"],
    description: "이 책은 ...에 대한 내용을 담고 있습니다.",
    language: "한국어",
    publishedDate: "2025-01-01",
    pages: 320,
    format: "Paperback",
    isbn: "1234567890123",
    targetReaders: "탐구적인 사람, 역사에 관심 있는 독자",
    topics: ["역사", "정치", "지리", "국제 관계"],
    mood: "사색적",
    tags: ["🔥 베스트셀러", "🏆 비평가 극찬"]
  };

  const currentBook = book || dummyBook;

  return (
    <div>
        <Header/>
    <div className="book-detail-page">
      <div className="book-container">
        {/* 왼쪽 영역 */}
        <div className="book-left">
          <img src={currentBook.coverImage} alt={currentBook.title} className="book-cover" />
          <div className="book-tags">
            {currentBook.tags.map((tag, idx) => (
              <p key={idx} className="tag">{tag}</p>
            ))}
          </div>
          <button className="btn-outline">📚 읽고 싶은 책에 추가</button>
          <button className="btn-primary">구매</button>
          <p className="rating-prompt">읽으셨나요? 평가해 주세요!</p>
          <div className="rating-buttons">
            <button>👎</button>
            <button>👍</button>
            <button>😃</button>
          </div>
        </div>

        {/* 오른쪽 영역 */}
        <div className="book-right">
          <h1>{currentBook.title}</h1>
          <p className="author">by {currentBook.author}</p>
          <p><strong>장르:</strong> {currentBook.genres.join(', ')}</p>
          <p><strong>서브장르:</strong> {currentBook.subgenres.join(', ')}</p>
          <p className="description">{currentBook.description}</p>
          <div className="book-info">
            <p>🌐 언어: {currentBook.language}</p>
            <p>📅 출간일: {currentBook.publishedDate}</p>
            <p>📄 페이지: {currentBook.pages}</p>
            <p>📘 형식: {currentBook.format}</p>
            <p>🔢 ISBN: {currentBook.isbn}</p>
          </div>
          <p><strong>추천 대상:</strong> {currentBook.targetReaders}</p>
          <div className="topic-tags">
            {currentBook.topics.map((topic, idx) => (
              <span key={idx} className="topic">{topic}</span>
            ))}
          </div>
          <p><strong>🧠 무드:</strong> {currentBook.mood}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BookDetailPage;
