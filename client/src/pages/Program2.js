import React from 'react';
import { Link } from 'react-router-dom';
import './ProgramPage.css';

function Program2() {
  return (
    <div className="program-page">
      <div className="program-page-header">
        <Link to="/" className="back-button">
          ← Назад
        </Link>
        <h1>🧘‍♀️ Сила в теле — пилатес + питание на тонус</h1>
      </div>
      
      <div className="program-page-content">
        <div className="program-page-text">
          <p>Тело кажется «деревянным»?</p>
          <p>Болит шея, поясница, таз? Кажется, будто ты зажата внутри себя?</p>
          <p>👉 Тонус — это не жёсткий зал. Это гибкость, мобильность и сила изнутри.</p>
          
          <h3>🔥 Что будет:</h3>
          <p>8 тренировок на стабилизаторы, дыхание, растяжку</p>
          <p>Укрепление мышц таза и живота без перегруза</p>
          <p>План питания на лёгкость, тонус и антистресс</p>
          <p>Мягкая, но постоянная поддержка</p>
          
          <h3>🎯 Результат:</h3>
          <p>– Гибкость и выносливость</p>
          <p>– Тело становится подтянутым, лёгким</p>
          <p>– Исчезает дряблость и усталость</p>
          <p>– Улучшается осанка, настроение, энергия</p>
          
          <p>Пилатес — это не про "прокачку". Это про контроль и силу без боли.</p>
          
          <div className="program-price">
            <h3>💰 Цена: 600₪ → 420₪ (скидка 30%)</h3>
            <a href="https://wa.me/972549961795" target="_blank" rel="noopener noreferrer" className="program-cta-button">
              Записаться на программу
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program2; 