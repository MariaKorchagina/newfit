import React from 'react';
import './HeroSection.css';

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HeroSection = () => {
  const handleScrollToPrograms = () => {
    const el = document.querySelector('.big-center-text');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-row">
      <div className="hero-block hero-block--left">
        <h1 className="hero-title">ОНЛАЙН-ТРЕНИРОВКИ ДЛЯ ДОМА И ЗАЛА С ЛИЛИЕЙ ЯЦКОЙ</h1>
        <p className="hero-subtitle">Авторские фитнес-программы под разные<br/>цели для любого уровня подготовки</p>
        <button className="hero-btn" onClick={handleScrollToPrograms}>
          <span className="hero-btn-text" style={{whiteSpace: 'nowrap'}}>Выбрать программу</span>
          <ArrowIcon />
        </button>
        <div className="hero-stats">Начни свой путь к здоровью<br/>и уверенности вместе со мной!</div>
      </div>
      <div className="hero-block hero-block--right">
        <img src={process.env.PUBLIC_URL + '/pic/trainer6.jpg'} alt="Тренер" className="hero-trainer-photo" />
      </div>
    </div>
  );
};

export default HeroSection; 