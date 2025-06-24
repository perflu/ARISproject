import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import React from 'react';
import "./Login.css";
import { FaAtom } from 'react-icons/fa';

function Login() {
  const navigate = useNavigate();
  const goToSignup=()=>{
    navigate("/Signup");
  };
  const goToMain=()=>{
    navigate("/");
  }
  
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
 
  const handleLogin = async(e)=>{
    e.preventDefault();
    
    const trimUserId = userId.trim();
    const trimUserPw = userPw.trim();
    
    if(!trimUserId || !trimUserPw){
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    try {
      const res = await axios.post("http://localhost:3001/login", {
        userId: trimUserId,
        userPw: trimUserPw,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch(err) {
      const msg = err.response?.data?.message || "로그인 실패. 다시 시도해주세요.";
      alert("❌ " + msg);
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        
          <h1 className="login-logo" onClick={goToMain}>
            <FaAtom className="login-logo-icon"/> ARIS</h1>

          <input type="text" 
            value={userId}
            onChange={(e)=>{setUserId(e.target.value)}}
            placeholder="아이디를 입력해 주세요."/>
          <input type="password"
            value={userPw}
            onChange={(e)=>{setUserPw(e.target.value)}}
            placeholder="비밀번호를 입력해 주세요."/>

          <button className="login-button"
            onClick={handleLogin}>로그인</button>
        
        <div className="login-options">
          <label>
            <input type="checkbox" /> 아이디 저장
          </label>
          <span className="login-links">아이디 찾기 | 비밀번호 찾기</span>
        </div>


        <div className="action-buttons">
          <button className="join" onClick={goToSignup}>회원가입</button>
        </div>

        <footer>© ARIS CENTRE</footer>
      </div>
    </div>
  );
}

export default Login;
