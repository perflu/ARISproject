import React, { useEffect, useState } from 'react';
import './Header.css';
import { FaAtom, FaGlobe } from 'react-icons/fa'; // 아이콘 import 누락 주의
import {useNavigate} from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const goToLogin=()=>{
    navigate("/Login");
  };
  const goToMainPage=()=>{
    navigate("/");
  };
  const goToMyPage=()=>{
    navigate("/MyPage");
  };
  const goToGenre=()=>{
    navigate("/genre")
  };
  const goToAbout=()=>{
    navigate("/About")
  };

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setShow(false); // 스크롤 위로 → 숨김
      } else {
        setShow(true);  // 스크롤 아래 → 표시
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header ${show ? 'visible' : 'hidden'}`}>
      <div className="header-inner">
        <div className="header-icon" onClick={goToMainPage}>
          <FaAtom />
        </div>
        <div className="header-search">
          <input type="text" placeholder="Search" />
        </div>
        <nav className="header-nav">
          <a href="#">AI</a>
          <a href="#" onClick={goToGenre}>Genre</a>
          <a href="#" onClick={goToMyPage}>Authors</a>
          <a href="#">Forum</a>
          <a href="#" onClick={goToAbout}>About</a>
          <button onClick={goToLogin}>Sign In</button>
          <FaGlobe />
        </nav>
      </div>
    </header>
  );
};

export default Header;
