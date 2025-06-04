import React, { useState } from "react";

// 카테고리 데이터 예시 (추가/수정 가능)
const categories = [
  { name: "Crime", img: "" },
  { name: "Fantasy", img: "" },
  { name: "Mystery", img: "" },
  { name: "Adventure", img: "" },
  { name: "Thriller", img: "" },
  { name: "Young Adult", img: "" },
  { name: "Self Help", img: "" },
  { name: "Science Fiction", img: "" },
  { name: "Fiction", img: "" },
  { name: "Romance", img: "" },
  { name: "Award Winning", img: "" },
  { name: "History", img: "" },
  { name: "Economics", img: "" },
  { name: "Politics", img: "" },
  { name: "Nonfiction", img: "" },
  { name: "Biography", img: "" },
  { name: "Feminism", img: "" },
  { name: "Historical fiction", img: "" },
  { name: "Classics", img: "" },
  { name: "Leadership", img: "" },
  { name: "Psychology", img: "" },
  { name: "Philosophy", img: "" },
  { name: "Drama", img: "" },
  { name: "Travel", img: "" },
  { name: "abc", img: "" },
];

export default function GenresPage() {
  const [search, setSearch] = useState("");

  // 검색 필터
  const filtered = categories.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      {/* 헤더 */}
      <header>
        <input
          className="search-bar"
          id="searchInput"
          type="text"
          placeholder="🔍 Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <nav className="nav">
          <a href="#" style={{ textDecoration: "none", color: "#bbb" }}>ARIS</a>
          <a href="#" style={{ textDecoration: "none", color: "#bbb" }}>Genres</a>
          <a href="#" style={{ textDecoration: "none", color: "#bbb" }}>Authors</a>
          <a href="#" style={{ textDecoration: "none", color: "#bbb" }}>Blog</a>
          <a href="#" style={{ textDecoration: "none", color: "#bbb" }}>About</a>
          <a href="#" className="sign-in" style={{ textDecoration: "none" }}>Sign In</a>
        </nav>
      </header>
      {/* 카테고리 카드 목록 */}
      <div className="grid" id="categoryGrid">
        {filtered.map(c => (
          <div className="card" key={c.name}>
            {c.img
              ? <img src={c.img} alt={c.name} />
              : <div style={{
                  width: 60, height: 60, background: "#eee", borderRadius: "50%",
                  margin: "0 auto 10px auto", display: "flex",
                  alignItems: "center", justifyContent: "center", color: "#888"
                }}>📚</div>
            }
            <div className="label">{c.name}</div>
          </div>
        ))}
      </div>
      {/* 푸터 */}
      <footer>
        <div className="footer-links">
          <a href="#">About</a> |
          <a href="#">Privacy Policy</a> |
          <a href="#">Terms of Service</a> |
          <a href="#">Impressum</a>
        </div>
        <div>© ARIS.ai 2022 - 2025</div>
      </footer>
    </div>
  );
}
