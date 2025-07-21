import React from 'react';
import './HeroSection.css';

const ArrowIcon = () => (
  <img src="https://gymteam.kinescopecdn.net/img/l/2024/vitrina/arrow.svg" alt="arrow" style={{ width: 44, height: 44, marginLeft: 10, marginRight: 18 }} />
);

const Arrow2Button = () => {
  const handleClick = () => {
    const el = document.querySelector('.big-center-text');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="hero-arrow2-btn-wrap">
      <button className="hero-arrow2-btn" tabIndex={-1} aria-label="Прокрутить вниз" onClick={handleClick}>
        {/* <img src="https://gymteam.kinescopecdn.net/img/l/2024/vitrina/arrow2.svg" alt="arrow2" /> */}
      </button>
    </div>
  );
};

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