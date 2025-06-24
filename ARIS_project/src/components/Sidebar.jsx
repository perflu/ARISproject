import React from 'react';

const Sidebar = () => {
  const sections = [
    { title: '라이브러리', items: ['메인', '찜', '리스트', '코멘트', '리뷰'] },
    { title: '활동내역', items: ['커뮤니티 활동', '이벤트 참여', '챌린지'] },
    { title: '챗봇', items: ['대화하기', '설정'] },
    { title: '회원정보', items: ['회원정보 수정', '로그인 설정', '마케팅 수신 설정', '로그아웃'] },
    { title: '알림', items: ['알림함', '알림 설정'] },
    { title: '문의', items: ['1:1 문의'] },
  ];

  return (
    <aside className="sidebar">
      {sections.map((section, idx) => (
        <div key={idx} className="sidebar-section">
          <h3>{section.title}</h3>
          <ul>
            {section.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
