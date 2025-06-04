import React from "react";
import "../components/Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-logo">ARIS</h1>

        <input type="text" placeholder="아이디를 입력해 주세요." />
        <input type="password" placeholder="비밀번호를 입력해 주세요." />

        <button className="login-button">로그인</button>

        <div className="login-options">
          <label>
            <input type="checkbox" /> 아이디 저장
          </label>
          <span className="login-links">아이디 찾기 | 비밀번호 찾기</span>
        </div>


        <div className="action-buttons">
          <button className="join">회원가입</button>
        </div>

        <footer>© ARIS CENTRE</footer>
      </div>
    </div>
  );
}

export default Login;
