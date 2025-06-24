import React from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { FaAtom } from 'react-icons/fa';

export default function Signup() {
  const navigate = useNavigate();
  const goToMain=()=>{
    navigate("/");
  }
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="signup-logo" onClick={goToMain}>
          <FaAtom className="signup-logo-icon"/> ARIS</h1>
        <h2>회원가입</h2>
        <hr></hr>
        <form className="form-section">
          <label>아이디 *</label>
          <div className="id-input">
            <input type="text" placeholder="아이디를 입력해 주세요." />
            <button type="button">중복확인</button>
          </div>

          <label>비밀번호 *</label>
          <input type="password" placeholder="비밀번호를 입력해 주세요." />

          <label>비밀번호 확인 *</label>
          <input type="password" placeholder="비밀번호를 한 번 더 입력해 주세요." />

          <label>이름 *</label>
          <input type="text" placeholder="예: 김선우" />

          <label>휴대폰번호 *</label>
          <input type="tel" placeholder="예: 010-1234-5678" />

          <label>이메일 *</label>
          <input type="email" placeholder="이메일을 입력해 주세요." />
            
          <label>생년월일 / 성별 </label>
          <div className="birth-gender">
            <input type="text" placeholder="예: 20010416" />
            <select>
              <option>성별</option>
              <option value="male">남</option>
              <option value="female">여</option>
            </select>
          </div>

          <div className="terms-section">
            <div className="terms-header">서비스 이용약관 동의</div>
            <div><input type="checkbox" /> 전체 동의</div>
            <div><input type="checkbox" /> (필수) ARIS 이용약관</div>
            <div><input type="checkbox" /> (필수) 개인정보 수집 및 이용</div>
            <label><input type="checkbox" /> (선택) 마케팅 수신 동의</label>
          </div>

          <button type="submit" className="submit-button">회원가입</button>
        </form>
      </div>
    </div>
  );
}


